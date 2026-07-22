import { Lightbulb, PenTool, Printer, PackageCheck, Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { WHATSAPP_URL } from '../config.js'

const STEPS = [
  {
    icon: Lightbulb,
    title: 'Sua ideia',
    desc: 'Você conta o que imagina — uma referência, um rabisco ou só uma descrição já bastam.',
  },
  {
    icon: PenTool,
    title: 'Modelagem 3D',
    desc: 'Transformo a ideia em um modelo digital e envio prévias para você aprovar cada detalhe.',
  },
  {
    icon: Printer,
    title: 'Impressão',
    desc: 'A peça ganha forma camada por camada, no material e na cor escolhidos por você.',
  },
  {
    icon: PackageCheck,
    title: 'Acabamento & entrega',
    desc: 'Lixamento, montagem e revisão final antes de embalar com cuidado e enviar.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="process">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="eyebrow">Como funciona</span>
              <h2 className="section-title">Da ideia ao objeto, em quatro passos</h2>
            </div>
          </div>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="step">
                <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                <s.icon className="step-icon" size={21} strokeWidth={1.6} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const BANNER_ITEMS = [
  'Peça única ou pequenas tiragens',
  'Prévia do modelo 3D antes de imprimir',
  'Escolha de material, cor e tamanho',
  'Orçamento sem compromisso',
]

export function CustomBanner() {
  return (
    <section id="personalizado">
      <div className="container">
        <Reveal>
          <div className="custom-banner">
            <div>
              <span className="eyebrow">Sob medida</span>
              <h2 className="section-title">Não achou o que procurava? A gente cria.</h2>
              <p className="lead">
                A maior parte do que faço nasce de pedidos personalizados: presentes com nome,
                peças de reposição, suportes específicos, troféus, action figures. Se dá para
                imaginar, provavelmente dá para imprimir.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Contar minha ideia
              </a>
            </div>
            <ul className="banner-list">
              {BANNER_ITEMS.map((item) => (
                <li key={item}>
                  <Check size={18} strokeWidth={2.4} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
