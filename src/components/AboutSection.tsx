'use client'

import { useState, useEffect } from 'react'
import { useTranslation, Locale } from '@/lib/translations'

// Simple About section component
const AboutSection = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  const { t } = useTranslation()

  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language') as Locale
    if (storedLang) {
      setCurrentLang(storedLang)
    }
  }, [])

  return (
    <section id="about" className="bg-gray-100 text-black py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            {t('about_title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{t('about_subtitle')}</h3>
            <p className="mb-4">{t('about_desc_1')}</p>
            <p className="mb-6">{t('about_desc_2')}</p>
            
            <div className="mb-8">
              <p className="italic text-sm text-gray-500">
                {t('about_founded')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <SkillBox
                title={t('about_skill1_title')}
                description={t('about_skill1_desc')}
              />
              <SkillBox
                title={t('about_skill2_title')}
                description={t('about_skill2_desc')}
              />
              <SkillBox
                title={t('about_skill3_title')}
                description={t('about_skill3_desc')}
              />
              <SkillBox
                title={t('about_skill4_title')}
                description={t('about_skill4_desc')}
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">code-happy.tsx</div>
              </div>
              
              <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{
`function CodeHappy() {
  const [isHappy, setIsHappy] = useState(true);
  
  useEffect(() => {
    // Keep coding, keep happy!
    const interval = setInterval(() => {
      setIsHappy(true);
    }, 86400000); // Reset happiness daily
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={isHappy ? 'paradise' : 'debug-mode'}>
      {isHappy ? '😊 Coding bliss!' : '🔍 Seeking solutions...'}
    </div>
  );
}`
                }</pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">{t('about_tech_title')}</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {/* Tech stack would go here */}
          </div>  
        </div>
      </div>
    </section>
  )
}

interface SkillBoxProps {
  title: string
  description: string
}

const SkillBox = ({ title, description }: SkillBoxProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h4 className="font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default AboutSection
