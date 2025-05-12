'use client'

import { useEffect, useState } from 'react'
import { useTranslation, Locale } from '@/lib/translations'

// This component is used to debug translation issues
const TranslationDebug = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  
  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language') as Locale
    if (storedLang) {
      setCurrentLang(storedLang)
    }
  }, [])

  const { t } = useTranslation()

  // All translation keys we want to test
  const keysToTest = [
    'services_title',
    'services_subtitle',
    'services_item1_title',
    'services_item1_desc',
    'about_title',
    'about_subtitle',
    'about_tech_title',
    'contact_title',
    'contact_subtitle',
    'hero_title',
    'hero_subtitle'
  ]

  return (
    <div className="fixed bottom-0 right-0 bg-white p-4 border shadow-lg z-50 max-w-md max-h-96 overflow-auto text-xs">
      <h3 className="font-bold text-sm mb-2">Translation Debug (Current Lang: {currentLang})</h3>
      <button 
        onClick={() => {
          // Force reload to update translations
          localStorage.setItem('language', currentLang === 'en' ? 'pt' : 'en')
          window.location.reload()
        }}
        className="bg-blue-500 text-white px-2 py-1 rounded mb-2"
      >
        Toggle Language
      </button>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Key</th>
            <th className="text-left">Translation</th>
          </tr>
        </thead>
        <tbody>
          {keysToTest.map(key => (
            <tr key={key} className={t(key as any) === key ? 'bg-red-100' : 'bg-green-100'}>
              <td className="border px-2 py-1">{key}</td>
              <td className="border px-2 py-1">{t(key as any)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TranslationDebug
