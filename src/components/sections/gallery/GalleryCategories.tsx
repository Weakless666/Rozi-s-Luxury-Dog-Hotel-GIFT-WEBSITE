import { motion } from 'framer-motion'
import { Camera, Home, TreePine, Utensils } from 'lucide-react'
import { galleryCategories, type GalleryCategoryId } from '../../../data/galleryData'

const categoryIcons: Record<GalleryCategoryId, typeof Camera> = {
  all: Camera,
  yard: TreePine,
  inside: Home,
  food: Utensils
}

interface GalleryCategoriesProps {
  activeCategory: GalleryCategoryId
  onCategoryChange: (category: GalleryCategoryId) => void
}

const GalleryCategories = ({ activeCategory, onCategoryChange }: GalleryCategoriesProps) => {

  return (
    <section className="section-padding bg-white/50 pb-8">
      <div className="container-custom">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {galleryCategories.map((category, index) => {
            const Icon = categoryIcons[category.id]
            const isActive = activeCategory === category.id

            return (
              <motion.button
                key={category.id}
                type="button"
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onCategoryChange(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-soft-pink to-luxury-purple text-white shadow-lg'
                    : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-md border border-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default GalleryCategories
