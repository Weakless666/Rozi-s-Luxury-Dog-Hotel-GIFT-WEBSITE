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

/**
 * Именуване на нови файлове в public/images/:
 * - Двор:     yard-06.jpg, yard-07.jpg, ...
 * - Вътре:    inside-17.jpg, inside-18.jpg, ...
 * - Храна:    food-06.jpg, food-07.jpg, ...
 */
export const galleryImages: GalleryImage[] = [
  // Двор (yard-01 … yard-05)
  { id: 1, title: 'Социализация в двора', category: 'yard', type: 'image', imageUrl: '/images/yard-01.jpg' },
  { id: 2, title: 'Весел момент на тревата', category: 'yard', type: 'image', imageUrl: '/images/yard-02.jpg' },
  { id: 3, title: 'Игри между гости', category: 'yard', type: 'image', imageUrl: '/images/yard-03.jpg' },
  { id: 4, title: 'Охлаждане в басейна', category: 'yard', type: 'image', imageUrl: '/images/yard-04.jpg' },
  { id: 5, title: 'Гости на терасата', category: 'yard', type: 'image', imageUrl: '/images/yard-05.jpg' },

  // Вътре в хотела (inside-01 … inside-16)
  { id: 6, title: 'Луксозни стаи за гости', category: 'inside', type: 'image', imageUrl: '/images/inside-01.jpg' },
  { id: 7, title: 'Модерен интериор', category: 'inside', type: 'image', imageUrl: '/images/inside-02.jpg' },
  { id: 8, title: 'Зона за релакс', category: 'inside', type: 'image', imageUrl: '/images/inside-03.jpg' },
  { id: 9, title: 'Уютна стая за почивка', category: 'inside', type: 'image', imageUrl: '/images/inside-04.jpg' },
  { id: 10, title: 'Детайли от стаята', category: 'inside', type: 'image', imageUrl: '/images/inside-05.jpg' },
  { id: 11, title: 'Любопитен поглед от стаята', category: 'inside', type: 'image', imageUrl: '/images/inside-06.jpg' },
  { id: 12, title: 'Добре дошли в стаята', category: 'inside', type: 'image', imageUrl: '/images/inside-07.jpg' },
  { id: 13, title: 'Спокоен сън', category: 'inside', type: 'image', imageUrl: '/images/inside-08.jpg' },
  { id: 14, title: 'Щастлив гост', category: 'inside', type: 'image', imageUrl: '/images/inside-09.jpg' },
  { id: 15, title: 'Релакс на дивана', category: 'inside', type: 'image', imageUrl: '/images/inside-10.jpg' },
  { id: 16, title: 'Уют и топлина', category: 'inside', type: 'image', imageUrl: '/images/inside-11.jpg' },
  { id: 17, title: 'Усмивка в хотела', category: 'inside', type: 'image', imageUrl: '/images/inside-12.jpg' },
  { id: 18, title: 'Наш любим гост', category: 'inside', type: 'image', imageUrl: '/images/inside-13.jpg' },
  { id: 19, title: 'Комфорт и грижа', category: 'inside', type: 'image', imageUrl: '/images/inside-14.jpg' },
  { id: 20, title: 'Време за храна', category: 'inside', type: 'image', imageUrl: '/images/inside-15.jpg' },
  { id: 21, title: 'Свежа и чиста грижа', category: 'inside', type: 'image', imageUrl: '/images/inside-16.jpg' },

  // Храна (food-01 … food-05)
  { id: 22, title: 'Балансирано меню', category: 'food', type: 'image', imageUrl: '/images/food-01.jpg' },
  { id: 23, title: 'Свежа и питателна храна', category: 'food', type: 'image', imageUrl: '/images/food-02.jpg' },
  { id: 24, title: 'Приготвяне на храна', category: 'food', type: 'image', imageUrl: '/images/food-03.jpg' },
  { id: 25, title: 'Разнообразно меню', category: 'food', type: 'image', imageUrl: '/images/food-04.jpg' },
  { id: 26, title: 'Качествени продукти', category: 'food', type: 'image', imageUrl: '/images/food-05.jpg' }
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
