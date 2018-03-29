import mongoose from 'mongoose'

const CONN_URI = process.env.MONGODB_URI

if (!CONN_URI) {
  console.log('no MONGODB_URI set')
} else {
  console.log('MONGODB_URI set')
}

export function connectSync() {
  return mongoose.connect(CONN_URI, {
    reconnectTries: 5,
  })
}

export function isEnvSetup() {
  return !!CONN_URI
}
