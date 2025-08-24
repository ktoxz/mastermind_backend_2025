import mongoose from 'mongoose'
import { ENV } from './environment.js'

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI)
    console.log('MongoDB connected successfully')
  } catch (error) {
    console.error('MongoDB connection failed:', error)
    process.exit(1)
  }
}
