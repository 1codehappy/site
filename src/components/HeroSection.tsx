'use client'

import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
import Link from 'next/link'
import { useTranslation, Locale } from '@/lib/translations'

// Hero section with title and welcome message
const HeroSection = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en')

  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language') as Locale
    if (storedLang) {
      setCurrentLang(storedLang)
    }
  }, [])

  const { t } = useTranslation()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white text-black pt-28 md:pt-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 mb-4">
            {t('hero_welcome')}
          </span>

          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            {t('hero_title')}
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
            {t('hero_subtitle')}
          </p>

          <div className="space-x-4">
            <Link
              href="/#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full inline-flex items-center"
            >
              {t('hero_cta')}
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Link
              href="#about"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white"
              aria-label={t('hero_scroll_aria')}
            >
              <FiArrowDown />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
