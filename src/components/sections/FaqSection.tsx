import { Link } from 'react-router-dom'
import { faqs } from '../../config/seo'

const FaqSection = () => {
  return (
    <section className="section-padding bg-white/70" aria-labelledby="faq-heading">
      <div className="container-custom max-w-4xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-handwriting font-bold text-gray-800 mb-8 text-center">
          Често задавани въпроси за хотела за кучета
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="bg-white rounded-2xl shadow-md p-5 group">
              <summary className="cursor-pointer text-lg font-semibold text-gray-800 list-none flex justify-between gap-4">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-luxury-purple">+</span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-700">
          <Link to="/services" className="font-semibold text-luxury-purple underline">Вижте цените на хотела за кучета</Link>
          {' · '}
          <Link to="/contact" className="font-semibold text-luxury-purple underline">Резервация</Link>
        </p>
      </div>
    </section>
  )
}

export default FaqSection
