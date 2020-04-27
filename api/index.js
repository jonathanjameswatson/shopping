import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import jsonwebtoken from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

import connection from './db.js'

const api = express()

api.use(cookieParser())

api.use(bodyParser.json())

api.use(
  '/',
  jwt({
    secret: process.env.SHOPPING_JWT_SECRET || 'jwtSecret'
  }).unless({
    path: ['/api/signin']
  })
)

const mainPasswordPromise = bcrypt.hash(
  process.env.SHOPPING_MAIN_PASSWORD || 'password',
  12
)

api.post(
  '/signin',
  asyncHandler(async (req, res) => {
    const secret = process.env.SHOPPING_JWT_SECRET || 'jwtSecret'

    const { password } = req.body

    const mainPassword = await mainPasswordPromise

    const valid = await bcrypt.compare(password, mainPassword)
    if (!valid) {
      throw new Error('Invalid password')
    }

    const accessToken = jsonwebtoken.sign({}, secret, { expiresIn: '1000y' })

    res.json({
      token: {
        accessToken
      }
    })
  })
)

api.post(
  '/',
  asyncHandler(async (req, res) => {
    const { sections, items } = req.body
    const client = await connection()

    try {
      const db = client.db('shopping')
      await db.collection('shopping').insertOne({ sections, items })
      res.json({
        success: true
      })
    } finally {
      client.close()
    }
  })
)

api.get(
  '/',
  asyncHandler(async (req, res) => {
    const client = await connection()

    try {
      const db = client.db('shopping')
      const found = await db
        .collection('shopping')
        .find({})
        .sort({ $natural: -1 })
        .toArray()
      const { items, sections } = found[0]
      res.json({ items, sections })
    } finally {
      client.close()
    }
  })
)

export default api
