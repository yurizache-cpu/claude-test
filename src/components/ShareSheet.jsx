import { useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import { Copy, Facebook, Link2, MessageCircle, Send, Twitter, X } from 'lucide-react'

// Menu de compartilhamento próprio, usado quando o navegador não tem o
// menu nativo (desktops e alguns navegadores embutidos). Nos celulares
// com suporte, o menu nativo do sistema é aberto no lugar deste.
export default function ShareSheet({ url, title, onClose, onCopied }) {
  const text = `${title} — ${url}`

  // data-yzr-skip evita que a triagem intercepte o link de WhatsApp
  const TARGETS = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      color: '#25d366',
      href: `https://wa.me/?text=${encodeURIComponent(text)}`,
      skipTriagem: true,
    },
    {
      label: 'Telegram',
      icon: Send,
      color: '#2aabee',
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: 'Facebook',
      icon: Facebook,
      color: '#1877f2',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: 'X',
      icon: Twitter,
      color: '#2b2d2a',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
  ]

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = url
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    onCopied()
    onClose()
  }

  return (
    <Motion.div
      className="share-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-label="Compartilhar esta página"
    >
      <Motion.div
        className="share-sheet"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="share-sheet-head">
          <span>Compartilhar</span>
          <button className="share-sheet-close" aria-label="Fechar" onClick={onClose}>
            <X size={17} />
          </button>
        </div>

        <div className="share-targets">
          {TARGETS.map((t) => (
            <a
              key={t.label}
              className="share-target"
              href={t.href}
              target="_blank"
              rel="noreferrer"
              {...(t.skipTriagem ? { 'data-yzr-skip': '' } : {})}
              onClick={onClose}
            >
              <span className="share-target-icon" style={{ '--brand': t.color }}>
                <t.icon size={22} strokeWidth={1.9} />
              </span>
              {t.label}
            </a>
          ))}
        </div>

        <button className="share-copy" onClick={copy}>
          <span className="share-copy-url">
            <Link2 size={15} /> {url.replace(/^https?:\/\//, '')}
          </span>
          <span className="share-copy-action">
            <Copy size={15} /> Copiar
          </span>
        </button>
      </Motion.div>
    </Motion.div>
  )
}
