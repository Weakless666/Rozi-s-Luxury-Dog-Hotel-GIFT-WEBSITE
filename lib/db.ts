import { neon } from '@neondatabase/serverless'

// Function to get SQL instance
export function getSql() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set. Please configure it in .env.local')
  }
  return neon(process.env.DATABASE_URL)
}

// Export sql for runtime use (will be initialized when first called)
export const sql = process.env.DATABASE_URL 
  ? neon(process.env.DATABASE_URL) 
  : (() => {
      // Return a proxy that throws an error when called
      return new Proxy({} as any, {
        get: () => () => {
          throw new Error('DATABASE_URL is not configured. Please add it to your .env.local file')
        }
      })
    })()
