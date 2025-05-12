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
    <section id="about" className="bg-gray-100 text-black py-10 md:py-14 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">
            {t('about_title')}
          </h2>
          <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mt-1 mb-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">{t('about_subtitle')}</h3>
            <p className="mb-4">{t('about_desc_1')}</p>
            <p className="mb-6">{t('about_desc_2')}</p>
            
            <div className="mb-8">
              <p className="italic text-sm text-gray-500">
                {t('about_founded')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
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
            <div className="bg-white rounded-lg shadow-md p-2 sm:p-3 md:p-4">
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-500">code-happy.tsx</div>
              </div>
              
              <div className="bg-gray-900 text-gray-100 p-2 rounded font-mono text-xs overflow-x-auto">
                <pre className="whitespace-pre-wrap break-all sm:break-normal">{
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

        <div className="mt-8 md:mt-12 text-center">
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{t('about_tech_title')}</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-full md:max-w-4xl mx-auto px-2">
            <TechItem name="Laravel" icon="devicon-laravel-plain colored" />
            <TechItem name="React" icon="devicon-react-original colored" />
            <TechItem name="React Native" icon="devicon-react-original colored" />
            <TechItem name="Vue" icon="devicon-vuejs-plain colored" />
            <TechItem name="Python" icon="devicon-python-plain colored" />           
            <TechItem name="Redis" icon="devicon-redis-plain colored" />
            <TechItem name="MySQL" icon="devicon-mysql-plain colored" />
            <TechItem name="Postgres" icon="devicon-postgresql-plain colored" />
            <TechItem name="Kubernetes" icon="devicon-kubernetes-plain colored" />
            <TechItem name="Docker" icon="devicon-docker-plain colored" />
            <TechItem name="Ubuntu" icon="devicon-ubuntu-plain colored" />
            <TechItem name="AWS" icon="devicon-amazonwebservices-plain-wordmark colored" />
            <TechItem name="OpenAI" icon="fa fa-robot" color="#10a37f" />
            <TechItem name="Claude AI" icon="fa fa-brain" color="#6464FF" />
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
    <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h4 className="font-bold text-sm sm:text-base mb-1 sm:mb-2">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  )
}

interface TechItemProps {
  name: string
  icon: string
  color?: string
}

// Component for displaying tech stack items with responsive sizing
const TechItem = ({ name, icon, color }: TechItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
      <i 
        className={icon} 
        style={{ fontSize: 'clamp(1rem, 4vw, 2rem)', color: color || 'inherit' }}
        aria-hidden="true"
      ></i>
      <span className="mt-1 md:mt-2 text-xs sm:text-sm font-medium truncate max-w-full">{name}</span>
    </div>
  )
}

export default AboutSection
