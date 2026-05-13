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

  useEffect(() => {
    return scrollY.onChange(v => setIsScrolled(v > 40))
  }, [scrollY])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navBg = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.96)'])
  const navBorder = useTransform(scrollY, [0, 50], ['1px solid rgba(255,255,255,0)', '1px solid rgba(255,255,255,0.08)'])

  return (
    <>
      <motion.nav
        style={{
          background: menuOpen ? 'rgba(0,0,0,0.98)' : navBg,
          borderBottom: navBorder,
          backdropFilter: isScrolled || menuOpen ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: isScrolled || menuOpen ? 'blur(24px)' : 'none',
          height: isScrolled ? 68 : 84,
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          display: 'flex', alignItems: 'center',
          transition: 'height 0.3s ease',
        }}
      >
        <div className="container-padded" style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div style={{ width: 36, height: 36, background: '#fff', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: 22, fontWeight: 900, color: '#000', letterSpacing: '-0.05em', fontFamily: 'Inter, sans-serif' }}>V</span>
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>VERTEX</div>
              <div style={{ fontSize: 8, fontWeight: 700, color: '#4b5563', letterSpacing: '0.35em', textTransform: 'uppercase' }}>MARKETS</div>
            </div>
          </a>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0, padding: 0 }} className="hidden lg:flex">
            {links.map(l => (
              <li key={l.name}>
                <a href={l.href} style={{ fontSize: 14, fontWeight: 600, color: '#6b7585', textDecoration: 'none', transition: 'color 0.2s', position: 'relative' }}
                  onMouseOver={e => (e.currentTarget.style.color = '#fff')}
                  onMouseOut={e  => (e.currentTarget.style.color = '#6b7585')}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex" style={{ alignItems: 'center', gap: 20 }}>
            <a href="#" style={{ fontSize: 14, fontWeight: 600, color: '#6b7585', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#fff')}
              onMouseOut={e  => (e.currentTarget.style.color = '#6b7585')}
            >Log In</a>
            <a href="#" className="btn-shimmer" style={{ padding: '10px 24px', fontSize: 14, fontWeight: 700, color: '#000', background: '#fff', borderRadius: 10, textDecoration: 'none', transition: 'all 0.3s ease' }}>
              Open Account
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden"
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, padding: '8px 10px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 5 }}
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'opacity 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 22, height: 2, background: '#fff', borderRadius: 2, transition: 'transform 0.3s, opacity 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -16, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        style={{ position: 'fixed', top: isScrolled ? 68 : 84, left: 0, right: 0, zIndex: 99, background: 'rgba(0,0,0,0.98)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '24px 20px 32px' }}
        className="lg:hidden"
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map(l => (
            <li key={l.name}>
              <a href={l.href} onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '14px 0', fontSize: 18, fontWeight: 600, color: '#fff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href="#" style={{ textAlign: 'center', padding: '15px', fontSize: 16, fontWeight: 700, color: '#000', background: '#fff', borderRadius: 12, textDecoration: 'none' }}>
            Open Account
          </a>
          <a href="#" style={{ textAlign: 'center', padding: '15px', fontSize: 16, fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 12, textDecoration: 'none' }}>
            Log In
          </a>
        </div>
      </motion.div>
    </>
  )
}
