'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const links = [
  { name: 'Trading',   href: '#' },
  { name: 'Platforms', href: '#' },
  { name: 'Markets',   href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Company',   href: '#' },
  { name: 'Partners',  href: '#' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black'}`}
      style={{ height: '72px', display: 'flex', alignItems: 'center' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="font-black text-xl text-white">V</span>
          </div>
          <span className="font-bold text-xl tracking-tighter text-white">VERTEX</span>
        </div>

        {/* Desktop Links - Horizontal only */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-white text-sm font-medium px-4 py-2 hover:opacity-80 transition-opacity">
            Login
          </button>
          <button className="bg-[#2563EB] text-white text-sm font-bold px-6 py-2.5 rounded hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle Placeholder (Hidden on Desktop) */}
        <div className="lg:hidden">
          {/* Simple mobile menu could go here, but focusing on desktop horizontal nav as requested */}
          <button className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

