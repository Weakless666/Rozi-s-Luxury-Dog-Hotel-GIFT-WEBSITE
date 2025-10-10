// API Types for Vite/Express compatibility
export interface ApiRequest {
  method: string
  body?: any
  query?: any
  headers?: any
}

export interface ApiResponse {
  status: (code: number) => ApiResponse
  json: (data: any) => void
  setHeader?: (name: string, value: string | string[]) => void
}

export interface BookingData {
  ownerName: string
  email: string
  phone: string
  dogName: string
  dogBreed: string
  dogAge: string
  checkIn: string
  checkOut: string
  services: string[]
  specialRequests: string
  totalPrice: number
  numberOfDays: number
}

export interface GalleryImage {
  id: number
  title: string
  description: string
  category: string
  type: string
  likes: number
  date: string
  imageUrl: string
  fileName: string
}

export interface EmailData {
  to: string
  subject: string
  bookingData?: BookingData
  type: 'confirmation' | 'notification'
}
