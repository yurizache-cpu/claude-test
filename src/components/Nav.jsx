import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BRAND, WHATSAPP_URL } from '../config.js'

const LINKS = [
  { href: '#criacoes', label: 'Criações' },
  { href: '#processo', label: 'Processo' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M2 13h12M3.5 9.5h9M5 6h6M6.5 2.5h3"
                stroke="#D89A5B"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </span>
          {BRAND.replace(' 3D', '')}
          <sup>3D</sup>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Pedir orçamento
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
