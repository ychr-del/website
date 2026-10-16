import { useState } from 'react'

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: '首页', href: '#hero' },
    { label: '功能', href: '#features' },
    { label: '关于', href: '#about' },
    { label: '价格', href: '#pricing' },
    { label: '评价', href: '#testimonials' },
    { label: '联系', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/90 backdrop-blur-lg shadow-lg shadow-purple-500/5 border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <i className="fas fa-cloud text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CloudFlow
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              开始使用
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold"
            >
              开始使用
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
