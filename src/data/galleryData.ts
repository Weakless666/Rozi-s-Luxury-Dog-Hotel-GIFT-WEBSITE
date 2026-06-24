export type GalleryCategoryId = 'all' | 'yard' | 'inside' | 'food'

export interface GalleryImage {
  id: number
  title: string
  description?: string
  category: Exclude<GalleryCategoryId, 'all'>
  imageUrl: string
  type: 'image'
}

export const galleryCategories: {
  id: GalleryCategoryId
  name: string
}[] = [
  { id: 'all', name: 'Всички' },
  { id: 'yard', name: 'Двор' },
  { id: 'inside', name: 'Вътре в хотела' },
  { id: 'food', name: 'Храна' }
]

export const galleryImages: GalleryImage[] = [
  // Двор
  { id: 1, title: 'Щастлив момент с Боби', category: 'yard', type: 'image', imageUrl: '/images/dog1.png' },
  { id: 2, title: 'Щастлив момент с Макс', category: 'yard', type: 'image', imageUrl: '/images/dog2.png' },
  { id: 3, title: 'Игри с топка', category: 'yard', type: 'image', imageUrl: '/images/dog3.png' },
  { id: 4, title: 'Релакс след игра', category: 'yard', type: 'image', imageUrl: '/images/dog4.png' },
  { id: 5, title: 'Щастливи кучета заедно', category: 'yard', type: 'image', imageUrl: '/images/dog5.png' },
  { id: 6, title: 'Игри в градината', category: 'yard', type: 'image', imageUrl: '/images/dog6.png' },
  { id: 7, title: 'Весели моменти', category: 'yard', type: 'image', imageUrl: '/images/dog7.png' },
  { id: 8, title: 'Игри с играчки', category: 'yard', type: 'image', imageUrl: '/images/dog8.png' },
  { id: 9, title: 'Релакс в двора', category: 'yard', type: 'image', imageUrl: '/images/dog9.png' },
  { id: 10, title: 'Активни игри', category: 'yard', type: 'image', imageUrl: '/images/dog10.png' },
  { id: 11, title: 'Щастливи моменти', category: 'yard', type: 'image', imageUrl: '/images/dog11.png' },
  { id: 13, title: 'Специални моменти', category: 'yard', type: 'image', imageUrl: '/images/dog13.png' },
  { id: 23, title: 'Игри в двора', category: 'yard', type: 'image', imageUrl: '/images/activity1.png' },
  { id: 24, title: 'Тренировка', category: 'yard', type: 'image', imageUrl: '/images/activity2.png' },
  { id: 25, title: 'Социализация', category: 'yard', type: 'image', imageUrl: '/images/activity3.png' },
  { id: 26, title: 'Активни игри', category: 'yard', type: 'image', imageUrl: '/images/activity4.png' },
  { id: 27, title: 'Игри с играчки', category: 'yard', type: 'image', imageUrl: '/images/activity5.png' },
  { id: 28, title: 'Релакс в двора', category: 'yard', type: 'image', imageUrl: '/images/activity6.png' },
  { id: 29, title: 'Весели моменти', category: 'yard', type: 'image', imageUrl: '/images/activity7.png' },
  { id: 30, title: 'Игри в градината', category: 'yard', type: 'image', imageUrl: '/images/activity8.png' },
  { id: 31, title: 'Активни упражнения', category: 'yard', type: 'image', imageUrl: '/images/activity9.png' },
  { id: 35, title: 'Наши гости', category: 'yard', type: 'image', imageUrl: '/images/dog14.png' },
  { id: 36, title: 'Любимци при нас', category: 'yard', type: 'image', imageUrl: '/images/dog15.png' },
  { id: 37, title: 'Момент в двора', category: 'yard', type: 'image', imageUrl: '/images/dog16.png' },
  { id: 38, title: 'Релакс с гостите', category: 'yard', type: 'image', imageUrl: '/images/dog17.png' },
  { id: 39, title: 'Щастлив гост', category: 'yard', type: 'image', imageUrl: '/images/dog18.png' },
  { id: 47, title: 'Гости на терасата', category: 'yard', type: 'image', imageUrl: '/images/dog19.png' },
  { id: 48, title: 'Игри в басейна', category: 'yard', type: 'image', imageUrl: '/images/dog20.png' },
  { id: 41, title: 'Социализация', category: 'yard', type: 'image', imageUrl: '/images/socalization1.png' },
  { id: 42, title: 'Игри между гости', category: 'yard', type: 'image', imageUrl: '/images/socalization2.png' },
  { id: 43, title: 'Групово играене', category: 'yard', type: 'image', imageUrl: '/images/socalization3.png' },
  { id: 44, title: 'Социализация в двора', category: 'yard', type: 'image', imageUrl: '/images/socalization4.png' },
  { id: 45, title: 'Другарство между кучета', category: 'yard', type: 'image', imageUrl: '/images/socalization5.png' },
  { id: 46, title: 'Общи игри', category: 'yard', type: 'image', imageUrl: '/images/socalization6.png' },

  // Вътре в хотела
  { id: 12, title: 'Игри в стаята', category: 'inside', type: 'image', imageUrl: '/images/dog12.png' },
  { id: 14, title: 'Луксозна стая', category: 'inside', type: 'image', imageUrl: '/images/room1.png' },
  { id: 15, title: 'Релакс в стаята', category: 'inside', type: 'image', imageUrl: '/images/room2.png' },
  { id: 32, title: 'Игри в стаята', category: 'inside', type: 'image', imageUrl: '/images/activity10.png' },
  { id: 33, title: 'Специални моменти', category: 'inside', type: 'image', imageUrl: '/images/activity11.png' },
  { id: 34, title: 'Щастливи игри', category: 'inside', type: 'image', imageUrl: '/images/activity12.png' },

  // Храна
  { id: 40, title: 'Качествена храна', category: 'food', type: 'image', imageUrl: '/images/food1.png' }
]

export function getFilteredGalleryImages(category: GalleryCategoryId): GalleryImage[] {
  const seen = new Set<string>()

  return galleryImages.filter((img) => {
    if (category !== 'all' && img.category !== category) return false
    if (seen.has(img.imageUrl)) return false
    seen.add(img.imageUrl)
    return true
  })
}
