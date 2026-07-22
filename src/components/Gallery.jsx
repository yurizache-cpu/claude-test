import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import LayerArt from './LayerArt.jsx'
import Reveal from './Reveal.jsx'
import { CATEGORIES, PRODUCTS } from '../data/products.js'
import { WHATSAPP_NUMBER } from '../config.js'

function orderLink(product) {
  const msg = `Olá! Tenho interesse no produto "${product.name}". Pode me passar mais detalhes?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}

export default function Gallery() {
  const [active, setActive] = useState('Todos')
  const shown = active === 'Todos' ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active)

  return (
    <section id="criacoes">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">Portfólio</span>
              <h2 className="section-title">Criações que já saíram da impressora</h2>
            </div>
            <div className="filters" role="tablist" aria-label="Filtrar por categoria">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  className={`filter-btn ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Motion.div className="gallery-grid" layout>
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <Motion.article
                key={p.id}
                className="card"
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="card-art" style={{ '--card-glow': p.glow }}>
                  <span className="card-tag">{p.cat}</span>
                  <LayerArt layers={p.layers} color={p.color} width={190} height={200} />
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="card-foot">
                    <span className="price">
                      <small>a partir de</small>
                      {p.price}
                    </span>
                    <a href={orderLink(p)} target="_blank" rel="noreferrer">
                      Encomendar <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </Motion.article>
            ))}
          </AnimatePresence>
        </Motion.div>
      </div>
    </section>
  )
}
