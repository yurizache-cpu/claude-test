import { Star } from 'lucide-react'
import Reveal from './Reveal.jsx'

const TESTIMONIALS = [
  {
    quote:
      'Pedi uma luminária personalizada de presente e ficou muito acima do que eu esperava. O acabamento parece de loja grande.',
    name: 'Mariana S.',
    detail: 'Luminária Lua personalizada',
  },
  {
    quote:
      'Precisava de uma peça de reposição que não existia mais para comprar. Ele modelou do zero e encaixou perfeitamente.',
    name: 'Carlos E.',
    detail: 'Peça sob medida',
  },
  {
    quote:
      'As miniaturas do nosso grupo de RPG ficaram incríveis. Atendimento rápido e capricho em cada detalhe da pintura.',
    name: 'Renata O.',
    detail: 'Miniaturas para RPG',
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">Depoimentos</span>
              <h2 className="section-title">Quem já recebeu uma peça, recomenda</h2>
            </div>
          </div>
        </Reveal>
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="testimonial">
                <div className="stars" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote>“{t.quote}”</blockquote>
                <footer>
                  <span className="avatar">{t.name[0]}</span>
                  <div>
                    <b>{t.name}</b>
                    <span>{t.detail}</span>
                  </div>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
