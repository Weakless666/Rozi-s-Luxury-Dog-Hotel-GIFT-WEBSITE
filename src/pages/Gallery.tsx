import GalleryHero from '../components/sections/gallery/GalleryHero'
import GalleryGrid from '../components/sections/gallery/GalleryGrid'
import GalleryCategories from '../components/sections/gallery/GalleryCategories'

const Gallery = () => {
  return (
    <div className="pt-20">
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
    </div>
  )
}

export default Gallery
