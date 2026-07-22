import { ArrowRight, Instagram, Mail, MessageCircle } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { BRAND, EMAIL, INSTAGRAM_URL, INSTAGRAM_USER, WHATSAPP_URL } from '../config.js'

const CHANNELS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Resposta rápida — ideal para orçamentos',
    href: WHATSAPP_URL,
  },
  {
    icon: Instagram,
    title: 'Instagram',
    desc: `@${INSTAGRAM_USER} — bastidores e novidades`,
    href: INSTAGRAM_URL,
  },
  {
    icon: Mail,
    title: 'E-mail',
    desc: EMAIL,
    href: `mailto:${EMAIL}?subject=${encodeURIComponent('Orçamento de impressão 3D')}`,
  },
]

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact-inner">
        <Reveal>
          <span className="eyebrow">Contato</span>
          <h2 className="section-title">
            Vamos tirar sua ideia <em className="accent">do papel</em>?
          </h2>
          <p className="lead">
            Me chame por onde for mais fácil para você. Envie referências, fotos ou só a ideia
            geral — eu retorno com sugestões e um orçamento sem compromisso.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="contact-cards">
            {CHANNELS.map((c) => (
              <a
                key={c.title}
                className="contact-card"
                href={c.href}
                target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <c.icon size={22} strokeWidth={1.8} />
                </span>
                <span>
                  <b>{c.title}</b>
                  <span>{c.desc}</span>
                </span>
                <ArrowRight className="arrow" size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {BRAND} — feito camada por camada.
        </span>
        <span>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
          {' · '}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          {' · '}
          <a href={`mailto:${EMAIL}`}>E-mail</a>
        </span>
      </div>
    </footer>
  )
}
