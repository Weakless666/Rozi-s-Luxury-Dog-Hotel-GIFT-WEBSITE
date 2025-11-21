'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Phone, Mail, PawPrint, MessageSquare, CheckCircle, Clock, X } from 'lucide-react'

interface Booking {
  id: number
  dog_name: string
  owner_name: string
  phone: string
  email: string
  check_in_date: string
  check_out_date: string
  dog_weight: string
  special_notes: string
  status: string
  created_at: string
}

interface Inquiry {
  id: number
  name: string
  email: string
  phone: string
  message: string
  status: string
  created_at: string
}

export default function AdminPanel() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'bookings' | 'inquiries'>('bookings')

  useEffect(() => {
    fetchBookings()
    fetchInquiries()
  }, [])

  const fetchBookings = async () => {
    try {
      const response = await fetch('/api/bookings')
      const data = await response.json()
      if (data.success) {
        setBookings(data.data)
      }
    } catch (error) {
      console.error('Error fetching bookings:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/inquiries')
      const data = await response.json()
      if (data.success) {
        setInquiries(data.data)
      }
    } catch (error) {
      console.error('Error fetching inquiries:', error)
    }
  }

  const updateBookingStatus = async (id: number, status: string) => {
    // This would need to be implemented in the API
    alert(`Booking ${id} status updated to ${status}`)
  }

  const getStatusBadge = (status: string) => {
    const statuses: Record<string, { color: string; icon: any; text: string }> = {
      pending: { color: 'bg-yellow-500', icon: Clock, text: 'Изчаква' },
      confirmed: { color: 'bg-blue-500', icon: CheckCircle, text: 'Потвърдена' },
      completed: { color: 'bg-green-500', icon: CheckCircle, text: 'Завършена' },
      cancelled: { color: 'bg-red-500', icon: X, text: 'Отменена' },
      new: { color: 'bg-purple-500', icon: MessageSquare, text: 'Нова' },
      read: { color: 'bg-gray-500', icon: CheckCircle, text: 'Прочетена' }
    }

    const statusInfo = statuses[status] || statuses.pending
    const Icon = statusInfo.icon

    return (
      <span className={`${statusInfo.color} text-white px-3 py-1 rounded-full text-sm flex items-center gap-1`}>
        <Icon className="w-4 h-4" />
        {statusInfo.text}
      </span>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-6 rounded-t-2xl text-white">
            <h1 className="text-3xl font-handwriting font-bold">
              Админ Панел
            </h1>
            <p className="text-white/90 mt-2">
              Управление на резервации и заявки
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'bookings'
                  ? 'border-b-2 border-soft-pink text-luxury-purple'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Резервации ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'inquiries'
                  ? 'border-b-2 border-soft-pink text-luxury-purple'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Заявки ({inquiries.length})
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-soft-pink mx-auto"></div>
                <p className="mt-4 text-gray-600">Зареждане...</p>
              </div>
            ) : activeTab === 'bookings' ? (
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Няма резервации
                  </div>
                ) : (
                  bookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-elegant font-bold text-gray-800 flex items-center gap-2">
                            <PawPrint className="w-5 h-5 text-soft-pink" />
                            {booking.dog_name}
                          </h3>
                          <p className="text-gray-600">Собственик: {booking.owner_name}</p>
                        </div>
                        {getStatusBadge(booking.status)}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            Настаняване: {new Date(booking.check_in_date).toLocaleDateString('bg-BG')}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            Напускане: {new Date(booking.check_out_date).toLocaleDateString('bg-BG')}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="w-4 h-4" />
                            {booking.phone}
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail className="w-4 h-4" />
                            {booking.email}
                          </div>
                        </div>
                      </div>

                      {booking.dog_weight && (
                        <div className="mt-3 text-gray-600">
                          Тегло: {booking.dog_weight}
                        </div>
                      )}

                      {booking.special_notes && (
                        <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Бележки:</p>
                          <p className="text-sm text-gray-600">{booking.special_notes}</p>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                        >
                          Потвърди
                        </button>
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'completed')}
                          className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                        >
                          Завършена
                        </button>
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                        >
                          Отмени
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Няма заявки
                  </div>
                ) : (
                  inquiries.map((inquiry) => (
                    <div key={inquiry.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-elegant font-bold text-gray-800 flex items-center gap-2">
                            <User className="w-5 h-5 text-soft-pink" />
                            {inquiry.name}
                          </h3>
                        </div>
                        {getStatusBadge(inquiry.status)}
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-4 h-4" />
                          {inquiry.email}
                        </div>
                        {inquiry.phone && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <Phone className="w-4 h-4" />
                            {inquiry.phone}
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700">{inquiry.message}</p>
                      </div>

                      <div className="mt-4 text-sm text-gray-500">
                        {new Date(inquiry.created_at).toLocaleString('bg-BG')}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

