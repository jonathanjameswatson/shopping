import { MongoClient } from 'mongodb'

const connectionString =
  process.env.SHOPPING_DB_CONNECTION_STRING || 'mongodb://localhost:27017'
export default () =>
  MongoClient.connect(connectionString, {
    useUnifiedTopology: true
  })
