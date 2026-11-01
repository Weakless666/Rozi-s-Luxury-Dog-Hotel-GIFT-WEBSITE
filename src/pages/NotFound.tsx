import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
        <div className="text-7xl mb-6" aria-hidden="true">🐾</div>
        <h1 className="text-4xl md:text-5xl font-handwriting font-bold text-gray-800 mb-6">
          Страницата не е намерена
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Изглежда тази следа не води наникъде. Разгледайте нашия хотел за кучета в Сапарева баня
          или се свържете с нас за резервация.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Към началото
          </Link>
          <Link to="/services" className="btn-secondary">
            Цени и услуги
          </Link>
          <Link to="/contact" className="btn-secondary">
            Контакти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
