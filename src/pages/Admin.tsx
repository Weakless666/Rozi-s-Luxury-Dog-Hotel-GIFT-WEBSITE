import { useEffect, useState } from 'react'

type Booking = {
  id: number
  owner_name: string
  email: string
  phone: string
  dog_name: string | null
  dog_breed: string | null
  dog_age: string | null
  check_in: string | null
  check_out: string | null
  services: any
  total: number
  status: string
  created_at: string
}

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/bookings')
      const data = await res.json()
      setBookings(data)
    } catch (e: any) {
      setError('Грешка при зареждане на резервации')
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id: number, status: string) => {
    await fetch('/api/bookings', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    await fetchBookings()
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-3xl font-elegant font-semibold mb-6">Админ – Резервации</h1>
        {loading && <p>Зареждане...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <div className="overflow-x-auto bg-white/90 backdrop-blur-sm rounded-xl shadow">
          <table className="min-w-full text-sm">
            <thead className="bg-soft-pink/20">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Клиент</th>
                <th className="p-3 text-left">Контакт</th>
                <th className="p-3 text-left">Период</th>
                <th className="p-3 text-left">Сума</th>
                <th className="p-3 text-left">Статус</th>
                <th className="p-3 text-left">Действия</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr key={b.id} className="border-t">
                  <td className="p-3">{b.id}</td>
                  <td className="p-3">{b.owner_name}<div className="text-gray-500">{b.dog_name || '-'} ({b.dog_breed || '-'})</div></td>
                  <td className="p-3">{b.email}<div className="text-gray-500">{b.phone}</div></td>
                  <td className="p-3">{b.check_in || '-'} — {b.check_out || '-'}</td>
                  <td className="p-3">{b.total} лв</td>
                  <td className="p-3">{b.status}</td>
                  <td className="p-3 space-x-2">
                    <button className="px-3 py-1 rounded bg-green-600 text-white" onClick={() => updateStatus(b.id, 'confirmed')}>Потвърди</button>
                    <button className="px-3 py-1 rounded bg-yellow-600 text-white" onClick={() => updateStatus(b.id, 'pending')}>Чака</button>
                    <button className="px-3 py-1 rounded bg-red-600 text-white" onClick={() => updateStatus(b.id, 'cancelled')}>Откажи</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


