'use client'

import React, { useState, useEffect } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { Locale } from '@/lib/translations'

/**
 * Language switcher component that allows users to toggle between English and Portuguese
 * Stores the selected language in localStorage and reloads the page to apply changes
 */
const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Get language from localStorage on client side
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('language') as Locale
      if (storedLang && (storedLang === 'en' || storedLang === 'pt')) {
        setCurrentLang(storedLang)
      }
    }
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const languageSwitcher = document.getElementById('language-switcher')
      
      if (languageSwitcher && !languageSwitcher.contains(target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleLanguage = (lang: Locale) => {
    setCurrentLang(lang)
    localStorage.setItem('language', lang)
    document.documentElement.lang = lang
    // Reload the page to apply language change
    window.location.reload()
  }

  return (
    <div id="language-switcher" className="relative">
      <button 
        className="flex items-center gap-2 bg-[#4CAF50] hover:bg-[#43A047] text-white px-3 py-1.5 rounded-full transition-colors shadow-sm"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <FiGlobe className="text-white" />
        <span className="text-sm font-medium">{currentLang === 'en' ? 'English' : 'Português'}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 overflow-hidden border border-[#4CAF50]/20">
          <div className="py-1">
            <button
              className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-[#4CAF50]/10 ${currentLang === 'en' ? 'bg-[#FDD835]/10 text-[#4CAF50] font-medium' : 'text-gray-700'}`}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                toggleLanguage('en');
              }}
            >
              <span className="inline-block w-6 h-6 mr-2 rounded-full overflow-hidden">
                🇺🇸
              </span>
              English
              {currentLang === 'en' && (
                <svg className="ml-auto w-4 h-4 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            <button
              className={`flex items-center w-full text-left px-4 py-2 text-sm hover:bg-[#4CAF50]/10 ${currentLang === 'pt' ? 'bg-[#FDD835]/10 text-[#4CAF50] font-medium' : 'text-gray-700'}`}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                toggleLanguage('pt');
              }}
            >
              <span className="inline-block w-6 h-6 mr-2 rounded-full overflow-hidden">
                🇧🇷
              </span>
              Português
              {currentLang === 'pt' && (
                <svg className="ml-auto w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
