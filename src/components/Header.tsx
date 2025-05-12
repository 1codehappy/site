'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import CodeHappyLogo from './CodeHappyLogo'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation, Locale } from '@/lib/translations'

type HeaderProps = {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  const { t, locale } = useTranslation()

  useEffect(() => {
    setCurrentLang(locale as Locale)
  }, [locale])

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled
          ? 'bg-white shadow-md text-gray-900'
          : 'bg-blue-500 text-white'
      } ${className || ''}`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="w-10 md:w-12 transition-all duration-300">
          <CodeHappyLogo color={scrolled ? 'black' : 'white'} />
        </Link>

        <div className="flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center mr-4">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="/" className="block py-2 hover:text-primary transition">
                    {t('nav_experience')}
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="block py-2 hover:text-primary transition">
                    {t('nav_about')}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="block py-2 hover:text-primary transition">
                    {t('nav_services')}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="block py-2 hover:text-primary transition">
                    {t('nav_contact')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg text-gray-900 p-4">
          <nav>
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
                  {t('nav_about')}
                </Link>
              </li>
              <li>
                <Link href="/#services" onClick={() => setIsMenuOpen(false)}>
                  {t('nav_services')}
                </Link>
              </li>
              <li>
                <Link href="/#experience" onClick={() => setIsMenuOpen(false)}>
                  {t('nav_experience')}
                </Link>
              </li>
              <li>
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  {t('nav_contact')}
                </Link>
              </li>
              <li className="pt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header