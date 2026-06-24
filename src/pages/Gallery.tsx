import { useState } from 'react'
import GalleryHero from '../components/sections/gallery/GalleryHero'
import GalleryCategories from '../components/sections/gallery/GalleryCategories'
import GalleryGrid from '../components/sections/gallery/GalleryGrid'
import type { GalleryCategoryId } from '../data/galleryData'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategoryId>('all')

  return (
    <div className="pt-20">
      <GalleryHero />
      <GalleryCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid activeCategory={activeCategory} />
    </div>
  )
}

export default Gallery
