'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { name: 'Trading',   href: '#' },
  { name: 'Platforms', href: '#' },
  { name: 'Markets',   href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company',   href: '#' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => scrollY.onChange(v => setIsScrolled(v > 40)), [scrollY])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const blurVal    = useTransform(scrollY, [0, 80], [14, 24])
  const bgOpacity  = useTransform(scrollY, [0, 80], [0,  0.95])
  const borderAlpha = useTransform(scrollY, [0, 80], [0.0, 0.12])

  return (
    <>
      <motion.nav
        style={{
          backdropFilter:       blurVal.get() > 14 ? `blur(${blurVal.get()}px)` : 'none',
          WebkitBackdropFilter: blurVal.get() > 14 ? `blur(${blurVal.get()}px)` : 'none',
          background:  menuOpen ? 'rgba(8,10,14,0.98)' : `rgba(8,10,14,${isScrolled ? 0.92 : 0})`,
          borderBottom: `1px solid rgba(255,255,255,${isScrolled ? 0.1 : 0})`,
          height:  isScrolled ? 68 : 84,
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center',
          transition: 'height 0.3s ease, background 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div className="logo-glow" style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.2s' }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>V</span>
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>VERTEX</div>
              <div style={{ fontSize: 7.5, fontWeight: 700, color: '#4b5563', letterSpacing: '0.35em', textTransform: 'uppercase' }}>MARKETS</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'none', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }} className="hidden lg:flex">
            {links.map(l => (
              <li key={l.name}>
                <a href={l.href} className="nav-link">{l.name}</a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 20 }}>
            <a href="#" className="nav-link" style={{ fontSize: 14 }}>Log In</a>
            <a href="#" className="btn-shimmer btn-primary" style={{ padding: '10px 24px', fontSize: 14, fontWeight: 700, color: '#fff', background: '#2563eb', borderRadius: 10, textDecoration: 'none', transition: 'all 0.3s ease' }}>
              Open Account
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden"
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5, lineHeight: 0 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -12, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.22 }}
        className="lg:hidden"
        style={{ position: 'fixed', top: isScrolled ? 68 : 84, left: 0, right: 0, zIndex: 99, background: 'rgba(8,10,14,0.98)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '20px 20px 28px' }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
          {links.map(l => (
            <li key={l.name}>
              <a href={l.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '13px 0', fontSize: 18, fontWeight: 600, color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>{l.name}</a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a href="#" style={{ textAlign: 'center', padding: '14px', fontSize: 15, fontWeight: 700, color: '#fff', background: '#2563eb', borderRadius: 10, textDecoration: 'none' }}>Open Account</a>
          <a href="#" style={{ textAlign: 'center', padding: '14px', fontSize: 15, fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, textDecoration: 'none' }}>Log In</a>
        </div>
      </motion.div>
    </>
  )
}
