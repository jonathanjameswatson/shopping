import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import jwt from 'express-jwt'
import jsonwebtoken from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'

const api = express()

api.use(cookieParser())

api.use(bodyParser.json())

api.use(
  '/',
  jwt({
    secret: process.env.JWT_SECRET || 'jwtSecret'
  }).unless({
    path: ['/api/signin']
  })
)

const mainPasswordPromise = bcrypt.hash(
  process.env.JWT_SECRET || 'password',
  12
)

api.post(
  '/signin',
  asyncHandler(async (req, res) => {
    const secret = process.env.JWT_SECRET || 'jwtSecret'

    const { password } = req.body

    const mainPassword = await mainPasswordPromise

    const valid = await bcrypt.compare(password, await mainPassword)
    if (!valid) {
      throw new Error('Invalid password')
    }

    const accessToken = jsonwebtoken.sign({}, secret)

    res.json({
      token: {
        accessToken
      }
    })
  })
)

export default api
