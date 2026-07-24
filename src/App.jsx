import { useEffect, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Globe,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
  Newspaper,
  Share2,
  Wind,
  Wrench,
  Youtube,
} from 'lucide-react'
import Background from './components/Background.jsx'
import BreathGuide from './components/BreathGuide.jsx'
import TiltCard from './components/TiltCard.jsx'
import { LINK_GROUPS, PROFILE } from './config.js'

const ICONS = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  mail: Mail,
  site: Globe,
  tools: Wrench,
  youtube: Youtube,
  spotify: Music2,
  tiktok: Music2,
  calendar: CalendarDays,
  article: Newspaper,
}

// Frases que se alternam sob a bio. Edite à vontade.
const FRASES = [
  'Autoconhecimento é o começo de toda mudança.',
  'Você não precisa dar conta de tudo sozinho.',
  'Cuidar da mente também é cuidar da saúde.',
  'Terapia é um espaço que é só seu.',
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.9 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function AnimatedName({ name }) {
  return (
    <h1 aria-label={name}>
      {name.split('').map((ch, i) => (
        <Motion.span
          key={i}
          className="name-letter"
          initial={{ opacity: 0, y: 26, rotate: 6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.35 + i * 0.045, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch === ' ' ? ' ' : ch}
        </Motion.span>
      ))}
    </h1>
  )
}

function PhraseRotator() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % FRASES.length), 5200)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="phrase" aria-live="polite">
      <AnimatePresence mode="wait">
        <Motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.55 }}
        >
          “{FRASES[i]}”
        </Motion.span>
      </AnimatePresence>
    </div>
  )
}

function ShareButton() {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const data = { title: PROFILE.name, text: PROFILE.role, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(data)
        return
      } catch {
        return
      }
    }
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <>
      <Motion.button
        className="share-btn"
        onClick={share}
        aria-label="Compartilhar esta página"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        <Share2 size={17} />
      </Motion.button>
      <AnimatePresence>
        {copied && (
          <Motion.div
            className="toast"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
          >
            <Check size={15} /> Link copiado!
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LinkCard({ link }) {
  const Icon = ICONS[link.icon] ?? ArrowUpRight
  return (
    <Motion.div variants={item}>
      <TiltCard
        className={`link-card ${link.highlight ? 'highlight' : ''}`}
        href={link.href}
        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noreferrer"
      >
        <span className="link-icon">
          <Icon size={21} strokeWidth={1.9} />
        </span>
        <span className="link-text">
          <b>{link.label}</b>
          {link.desc && <span>{link.desc}</span>}
        </span>
        <ArrowUpRight className="link-arrow" size={18} />
      </TiltCard>
    </Motion.div>
  )
}

export default function App() {
  const [breathing, setBreathing] = useState(false)

  return (
    <>
      <Background />
      <div className="glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <ShareButton />

      <main className="hub">
        <Motion.header
          className="profile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Motion.button
            className="avatar-breath"
            onClick={() => setBreathing(true)}
            aria-label="Abrir exercício de respiração guiada"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
          >
            <span className="breath-ring" />
            <span className="breath-ring delay" />
            <img
              className="avatar-photo"
              src={PROFILE.photo}
              alt={`Foto de ${PROFILE.name}`}
              width="100"
              height="100"
            />
          </Motion.button>
          <Motion.span
            className="breath-hint"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <Wind size={12} /> toque para respirar comigo
          </Motion.span>

          <Motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {PROFILE.role} · {PROFILE.crp}
          </Motion.span>
          <AnimatedName name={PROFILE.name} />
          <Motion.p
            className="bio"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {PROFILE.bio}
          </Motion.p>
          <PhraseRotator />
        </Motion.header>

        <Motion.div variants={container} initial="hidden" animate="show">
          {LINK_GROUPS.map((group) => (
            <section className="group" key={group.title}>
              <Motion.h2 variants={item} className="group-title">
                {group.title}
              </Motion.h2>
              {group.links.map((link) => (
                <LinkCard key={link.label} link={link} />
              ))}
            </section>
          ))}
        </Motion.div>

        <Motion.footer
          className="foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.crp}
        </Motion.footer>
      </main>

      <AnimatePresence>
        {breathing && <BreathGuide onClose={() => setBreathing(false)} />}
      </AnimatePresence>
    </>
  )
}
