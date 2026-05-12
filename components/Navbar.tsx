'use client'
import { motion } from 'framer-motion'

const links = ['Trading','Platforms','Markets','Resources','Company','Partners']

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[100] h-16 flex items-center"
      style={{
        background: 'rgba(8,10,14,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1280px] w-full mx-auto px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M3 3L14 25L25 3" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 3L14 17L20 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
          </svg>
          <div className="leading-none">
            <div className="text-[15px] font-black tracking-[0.07em] text-white">VERTEX</div>
            <div className="text-[8px] font-medium tracking-[0.22em] text-brand-subtle uppercase mt-0.5">MARKETS</div>
          </div>
        </a>

        {/* Nav links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {links.map(l => (
            <li key={l}>
              <a
                href="#"
                className="text-[13.5px] font-medium text-brand-muted hover:text-white transition-colors duration-200 no-underline"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="px-5 py-2 text-[13.5px] font-medium text-white rounded-[6px] no-underline transition-all duration-200 hover:bg-white/5"
            style={{ border: '1px solid rgba(255,255,255,0.18)' }}
          >
            Login
          </a>
          <a
            href="#"
            className="px-5 py-2 text-[13.5px] font-semibold text-white bg-brand-primary rounded-[6px] no-underline transition-all duration-200 hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
