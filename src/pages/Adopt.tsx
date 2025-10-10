import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import { Heart, Phone, Mail, MapPin } from 'lucide-react'
=======
import { Heart, Phone, Mail, MapPin, Upload } from 'lucide-react'
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13

interface AdoptDog {
  id: number
  name: string
  breed: string
  age: string
  gender: string
  size: string
  description: string
  medicalInfo: string
  personality: string[]
  images: string[]
  contactInfo: {
    phone: string
    email: string
    location: string
  }
  dateAdded: string
  isAdopted: boolean
}

const Adopt = () => {
  const [dogs, setDogs] = useState<AdoptDog[]>([])
<<<<<<< HEAD
  const [selectedDog, setSelectedDog] = useState<AdoptDog | null>(null)
=======
  const [filteredDogs, setFilteredDogs] = useState<AdoptDog[]>([])
  const [selectedDog, setSelectedDog] = useState<AdoptDog | null>(null)
  const [filters, setFilters] = useState({
    breed: '',
    age: '',
    size: '',
    gender: ''
  })
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13

  // Sample data - в реалността това ще идва от API
  useEffect(() => {
    const sampleDogs: AdoptDog[] = [
<<<<<<< HEAD
      // В момента нямаме кучета за осиновяване
      // Когато има такива, ще бъдат добавени тук
    ]
    setDogs(sampleDogs)
  }, [])

=======
      {
        id: 1,
        name: "Боби",
        breed: "Смесена порода",
        age: "2 години",
        gender: "Мъжки",
        size: "Среден",
        description: "Боби е много дружелюбен и игрив кученце. Обича да играе с топка и да ходи на разходки. Перфектен за семейства с деца.",
        medicalInfo: "Ваксиниран, стерилизиран, здрав",
        personality: ["Дружелюбен", "Игрив", "Интелигентен", "Лоялен"],
        images: ["/images/dog1.jpg", "/images/dog2.jpg"],
        contactInfo: {
          phone: "+359 888 123 456",
          email: "adopt@rozis-dog-hotel.com",
          location: "Сапарева баня"
        },
        dateAdded: "2024-01-15",
        isAdopted: false
      },
      {
        id: 2,
        name: "Луна",
        breed: "Лабрадор микс",
        age: "1 година",
        gender: "Женски",
        size: "Голям",
        description: "Луна е много спокойна и любяща. Обича да се гушка и да играе с други кучета. Идеална за първи собственици.",
        medicalInfo: "Ваксинирана, стерилизирана, здрав",
        personality: ["Спокойна", "Любяща", "Търпелива", "Социална"],
        images: ["/images/dog3.jpg", "/images/dog4.jpg"],
        contactInfo: {
          phone: "+359 888 123 456",
          email: "adopt@rozis-dog-hotel.com",
          location: "Сапарева баня"
        },
        dateAdded: "2024-01-10",
        isAdopted: false
      }
    ]
    setDogs(sampleDogs)
    setFilteredDogs(sampleDogs)
  }, [])

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    
    let filtered = dogs.filter(dog => !dog.isAdopted)
    
    if (newFilters.breed) {
      filtered = filtered.filter(dog => dog.breed.toLowerCase().includes(newFilters.breed.toLowerCase()))
    }
    if (newFilters.age) {
      filtered = filtered.filter(dog => dog.age.includes(newFilters.age))
    }
    if (newFilters.size) {
      filtered = filtered.filter(dog => dog.size === newFilters.size)
    }
    if (newFilters.gender) {
      filtered = filtered.filter(dog => dog.gender === newFilters.gender)
    }
    
    setFilteredDogs(filtered)
  }

  const clearFilters = () => {
    setFilters({ breed: '', age: '', size: '', gender: '' })
    setFilteredDogs(dogs.filter(dog => !dog.isAdopted))
  }

>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-soft-pink/20 via-luxury-purple/20 to-premium-gold/20 overflow-hidden">
        <div className="absolute inset-0 paw-bg opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 text-9xl opacity-10 floating-slow">🐕</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl opacity-10 floating-slow delay-1">❤️</div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-handwriting font-bold text-gray-800 mb-6">
              Осиновете Любов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
<<<<<<< HEAD
              Всеки кученце заслужава любящ дом и семейство. В момента нямаме кучета за осиновяване, 
              но когато има такива, те ще намерят тук своята надежда за нов живот, пълна с любов и грижа.
            </p>
            <div className="bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 rounded-2xl p-6 max-w-4xl mx-auto mb-8">
              <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">
                Защо осиновяването е толкова важно?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-luxury-purple mb-2">💝 Даваш втори шанс</h3>
                  <p className="text-gray-700">Всяко осиновено кученце получава шанс за нов живот, пълен с любов и грижа.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-purple mb-2">🏠 Спасяваш живот</h3>
                  <p className="text-gray-700">Осиновяването означава, че спасяваш живот и даваш дом на нуждаещо се същество.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-purple mb-2">❤️ Получаваш безгранична любов</h3>
                  <p className="text-gray-700">Осиновените кучета са изключително благодарни и ще те обичат безрезервно.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-luxury-purple mb-2">🌟 Променяш света</h3>
                  <p className="text-gray-700">С всяко осиновяване правиш света по-добро място за животните.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
=======
              Всеки кученце заслужава любящ дом. Разгледайте нашите бездомни приятели, 
              които чакат да намерят своето семейство.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsUploadModalOpen(true)}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Upload className="w-5 h-5" />
                <span>Добавете кученце</span>
              </motion.button>
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('dogs-grid')?.scrollIntoView({ behavior: 'smooth' })}
<<<<<<< HEAD
                className="btn-primary inline-flex items-center space-x-2"
=======
                className="btn-secondary inline-flex items-center space-x-2"
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
              >
                <Heart className="w-5 h-5" />
                <span>Вижте кучетата</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
<<<<<<< HEAD
              { number: '100+', label: 'Осиновени кучета', icon: '🐕' },
              { number: '0', label: 'Чакат дом в момента', icon: '❤️' },
=======
              { number: '50+', label: 'Осиновени кучета', icon: '🐕' },
              { number: '25+', label: 'Чакат дом', icon: '❤️' },
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
              { number: '100%', label: 'Безплатно осиновяване', icon: '🏠' },
              { number: '24/7', label: 'Поддръжка', icon: '📞' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-luxury-purple mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
      {/* Filters Section */}
      <section className="py-12 bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-elegant font-bold text-center text-gray-800 mb-8">
            Намерете своя перфектен приятел
          </h2>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Порода</label>
                <input
                  type="text"
                  placeholder="Търсете порода..."
                  value={filters.breed}
                  onChange={(e) => handleFilterChange('breed', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Възраст</label>
                <select
                  value={filters.age}
                  onChange={(e) => handleFilterChange('age', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                >
                  <option value="">Всички възрасти</option>
                  <option value="до 1 година">До 1 година</option>
                  <option value="1-3 години">1-3 години</option>
                  <option value="3-5 години">3-5 години</option>
                  <option value="над 5 години">Над 5 години</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Размер</label>
                <select
                  value={filters.size}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                >
                  <option value="">Всички размери</option>
                  <option value="Малък">Малък</option>
                  <option value="Среден">Среден</option>
                  <option value="Голям">Голям</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пол</label>
                <select
                  value={filters.gender}
                  onChange={(e) => handleFilterChange('gender', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-pink focus:border-transparent"
                >
                  <option value="">Всички</option>
                  <option value="Мъжки">Мъжки</option>
                  <option value="Женски">Женски</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <button
                onClick={clearFilters}
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Изчисти филтрите
              </button>
            </div>
          </div>
        </div>
      </section>

>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
      {/* Dogs Grid */}
      <section id="dogs-grid" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-elegant font-bold text-center text-gray-800 mb-12">
<<<<<<< HEAD
            Кучета за осиновяване
          </h2>
          
          {dogs.filter(dog => !dog.isAdopted).length === 0 ? (
            <div className="text-center py-16">
              <div className="max-w-3xl mx-auto">
                <div className="text-8xl mb-6">🐕💔</div>
                <h3 className="text-3xl font-elegant font-semibold text-gray-700 mb-6">
                  В момента нямаме кучета за осиновяване
                </h3>
                <div className="bg-gradient-to-r from-soft-pink/10 to-luxury-purple/10 rounded-2xl p-8 mb-8">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Това е добра новина! Означава, че всички наши гости са намерили любящи домове. 
                    Но това не означава, че няма да има нови кученца, които ще се нуждаят от вашата помощ.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Когато има кучета за осиновяване, те ще се появят тук с пълна информация за тях. 
                    Докато чакате, можете да се свържете с нас, за да научите повече за процеса на осиновяване 
                    и как можете да помогнете на нуждаещи се животни.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+359888123456"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Обадете се за информация</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:adopt@rozis-dog-hotel.com"
                    className="btn-secondary inline-flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Изпратете имейл</span>
                  </motion.a>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dogs.filter(dog => !dog.isAdopted).map((dog, index) => (
=======
            Нашите кучета за осиновяване
          </h2>
          
          {filteredDogs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐕</div>
              <h3 className="text-2xl font-elegant font-semibold text-gray-700 mb-2">
                Няма намерени кучета
              </h3>
              <p className="text-gray-600">
                Опитайте с различни филтри или се върнете по-късно за нови кученца.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDogs.map((dog, index) => (
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
                <motion.div
                  key={dog.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedDog(dog)}
                >
                  <div className="relative">
                    <img
<<<<<<< HEAD
                      src={dog.images[0] || '/images/dog1.png'}
=======
                      src={dog.images[0] || '/images/dog1.jpg'}
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
                      alt={dog.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                      {dog.age}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-soft-pink/90 text-white rounded-full px-3 py-1 text-sm font-medium">
                      {dog.gender}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-elegant font-bold text-gray-800 mb-2">
                      {dog.name}
                    </h3>
                    <p className="text-gray-600 mb-3">{dog.breed}</p>
                    <p className="text-gray-700 mb-4 line-clamp-3">{dog.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dog.personality.slice(0, 3).map((trait) => (
                        <span
                          key={trait}
                          className="bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{dog.contactInfo.location}</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-soft-pink to-luxury-purple text-white px-4 py-2 rounded-full text-sm font-medium"
                      >
                        Осиновете
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-luxury-purple to-soft-pink text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-elegant font-bold mb-6">
            Имате въпроси за осиновяване?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Нашият екип е тук да ви помогне да намерите перфектния приятел за вашето семейство.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+359888123456"
              className="bg-white text-luxury-purple px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Обадете се</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:adopt@rozis-dog-hotel.com"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Изпратете имейл</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Dog Detail Modal */}
      {selectedDog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-soft-pink to-luxury-purple p-6 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-handwriting font-bold">{selectedDog.name}</h2>
                <button
                  onClick={() => setSelectedDog(null)}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <img
<<<<<<< HEAD
                    src={selectedDog.images[0] || '/images/dog1.png'}
=======
                    src={selectedDog.images[0] || '/images/dog1.jpg'}
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
                    alt={selectedDog.name}
                    className="w-full h-64 object-cover rounded-2xl mb-4"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    {selectedDog.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedDog.name} ${index + 2}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Основна информация</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Порода:</span>
                          <span className="font-medium">{selectedDog.breed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Възраст:</span>
                          <span className="font-medium">{selectedDog.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Пол:</span>
                          <span className="font-medium">{selectedDog.gender}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Размер:</span>
                          <span className="font-medium">{selectedDog.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Описание</h3>
                      <p className="text-gray-700">{selectedDog.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Характер</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedDog.personality.map((trait) => (
                          <span
                            key={trait}
                            className="bg-gradient-to-r from-soft-pink/20 to-luxury-purple/20 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Медицинска информация</h3>
                      <p className="text-gray-700">{selectedDog.medicalInfo}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Контакт</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-soft-pink" />
                          <span>{selectedDog.contactInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-soft-pink" />
                          <span>{selectedDog.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-soft-pink" />
                          <span>{selectedDog.contactInfo.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary flex-1"
                    >
                      Осиновете {selectedDog.name}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDog(null)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-gray-400 transition-colors"
                    >
                      Затвори
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
<<<<<<< HEAD
=======

      {/* Upload Modal - Placeholder */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl"
          >
            <div className="text-center">
              <h2 className="text-2xl font-elegant font-bold text-gray-800 mb-4">
                Добавете кученце за осиновяване
              </h2>
              <p className="text-gray-600 mb-6">
                Функционалността за качване ще бъде добавена скоро. 
                Засега можете да се свържете с нас директно.
              </p>
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsUploadModalOpen(false)}
                  className="btn-primary"
                >
                  Разбрах
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+359888123456"
                  className="btn-secondary"
                >
                  Обадете се
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
    </div>
  )
}

export default Adopt
