'use client'
import { motion } from 'framer-motion'

const links = ['Trading','Platforms','Markets','Resources','Company','Partners']

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[100] h-20 flex items-center"
      style={{
        background: 'rgba(8,10,14,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline group">
          <div 
            style={{ 
              width: 36, height: 36, 
              background: '#2563eb', 
              borderRadius: 8, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
              transition: 'transform 0.3s ease'
            }}
            className="group-hover:scale-105"
          >
            <span style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.05em' }}>V</span>
          </div>
          <div className="leading-tight">
            <div className="text-[17px] font-black tracking-tight text-white">VERTEX</div>
            <div className="text-[9px] font-bold tracking-[0.3em] text-brand-muted uppercase">MARKETS</div>
          </div>
        </a>

        {/* Nav links */}
        <ul className="hidden lg:flex items-center gap-10 list-none">
          {links.map(l => (
            <li key={l}>
              <a
                href="#"
                className="text-[14px] font-semibold text-brand-muted hover:text-white transition-colors duration-200 no-underline"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="px-6 py-2.5 text-[14px] font-semibold text-white rounded-[8px] no-underline transition-all duration-200 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
          >
            Login
          </a>
          <a
            href="#"
            className="px-6 py-2.5 text-[14px] font-bold text-white bg-brand-primary rounded-[8px] no-underline transition-all duration-200 hover:bg-blue-700 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)]"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
