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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-28 md:pt-32 relative text-white"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1542323228-002ac256e7b8?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay to ensure text readability with the new hope color scheme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4CAF50]/40 via-[#4DD0E1]/50 to-[#81D4FA]/60"></div>
      
      {/* Scroll down arrow - positioned at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Link
          href="#about"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FFEB3B] text-gray-800 shadow-lg hover:bg-[#FDD835] transition-colors duration-300"
          aria-label={t('hero_scroll_aria')}
        >
          <FiArrowDown size={24} />
        </Link>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/80 text-[#4CAF50] font-medium mb-6 shadow-sm">
            {t('hero_welcome')}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            {t('hero_title')}
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto text-white">
            {t('hero_subtitle')}
          </p>

          <div className="space-x-4">
            <Link
              href="/#contact"
              className="bg-[#FFEB3B] hover:bg-[#FDD835] text-gray-800 py-3 px-8 rounded-full inline-flex items-center font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('hero_cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
