import { useState } from 'react'
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
  Youtube,
} from 'lucide-react'
import Background from './components/Background.jsx'
import { LINK_GROUPS, PROFILE } from './config.js'

const ICONS = {
  whatsapp: MessageCircle,
  instagram: Instagram,
  mail: Mail,
  site: Globe,
  youtube: Youtube,
  spotify: Music2,
  tiktok: Music2,
  calendar: CalendarDays,
  article: Newspaper,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
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
    <Motion.a
      variants={item}
      className={`link-card ${link.highlight ? 'highlight' : ''}`}
      href={link.href}
      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
    >
      <span className="link-icon">
        <Icon size={21} strokeWidth={1.9} />
      </span>
      <span className="link-text">
        <b>{link.label}</b>
        {link.desc && <span>{link.desc}</span>}
      </span>
      <ArrowUpRight className="link-arrow" size={18} />
    </Motion.a>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <div className="glow" aria-hidden="true" />
      <ShareButton />

      <main className="hub">
        <Motion.header
          className="profile"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="avatar-breath" aria-hidden="true">
            <span className="breath-ring" />
            <span className="breath-ring delay" />
            <span className="avatar-mono">{PROFILE.initials}</span>
          </div>
          <span className="eyebrow">
            {PROFILE.role} · {PROFILE.crp}
          </span>
          <h1>{PROFILE.name}</h1>
          <p className="bio">{PROFILE.bio}</p>
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
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.crp}
        </Motion.footer>
      </main>
    </>
  )
}
