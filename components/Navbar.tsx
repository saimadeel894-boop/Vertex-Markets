'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { name: 'Trading', href: '#' },
  { name: 'Platforms', href: '#' },
  { name: 'Markets', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
  }, [scrollY])

  const navBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(8,10,14,0)', 'rgba(8,10,14,0.92)']
  )

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(255,255,255,0)', '1px solid rgba(255,255,255,0.08)']
  )

  return (
    <motion.nav
      style={{
        background: navBg,
        borderBottom: navBorder,
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        height: isScrolled ? 72 : 88,
      }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center transition-all duration-300"
    >
      <div className="max-w-[1440px] w-full mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div 
            style={{ 
              width: 38, height: 38, 
              background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', 
              borderRadius: 10, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 20px rgba(37,99,235,0.4)',
            }}
            className="group-hover:scale-105 transition-transform duration-300"
          >
            <span style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>V</span>
          </div>
          <div className="leading-tight">
            <div className="text-[18px] font-black tracking-tight text-white">VERTEX</div>
            <div className="text-[9px] font-bold tracking-[0.4em] text-brand-muted uppercase">MARKETS</div>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
          {links.map(l => (
            <li key={l.name}>
              <a
                href={l.href}
                className="text-[14px] font-semibold text-brand-muted hover:text-white transition-colors duration-200 no-underline relative group"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hidden sm:block text-[14px] font-semibold text-white/80 hover:text-white transition-colors duration-200 no-underline"
          >
            Log In
          </a>
          <a
            href="#"
            className="px-6 py-2.5 text-[14px] font-bold text-white bg-blue-600 rounded-[8px] no-underline transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_8px_25px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Open Account
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
