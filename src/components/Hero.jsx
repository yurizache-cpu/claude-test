import { motion as Motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import LayerArt from './LayerArt.jsx'
import { HERO_LAYERS } from '../data/products.js'
import { WHATSAPP_URL } from '../config.js'

const STATS = [
  { value: '300+', label: 'peças entregues' },
  { value: '20+', label: 'cores disponíveis' },
  { value: '100%', label: 'sob medida' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">Impressão 3D personalizada</span>
          <h1 className="display">
            Ideias impressas <em className="accent">camada por camada</em>, feitas para você.
          </h1>
          <p className="lead">
            Decoração, utilidades, presentes e projetos únicos — cada peça é desenhada e
            impressa sob medida, com acabamento cuidadoso e a sua cara.
          </p>
          <div className="hero-ctas">
            <a href="#criacoes" className="btn btn-primary">
              Ver criações <ArrowRight size={17} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <MessageCircle size={17} /> Falar no WhatsApp
            </a>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          className="hero-art"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <LayerArt layers={HERO_LAYERS} width={300} height={360} printing />
        </Motion.div>
      </div>
    </section>
  )
}

const MARQUEE_ITEMS = [
  'PLA & PETG',
  'Projetos sob medida',
  'Acabamento artesanal',
  'Cores sob demanda',
  'Envio para todo o Brasil',
  'Modelagem 3D própria',
]

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
