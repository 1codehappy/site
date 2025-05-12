'use client'

import { useEffect, useState } from 'react'
import { useTranslation, Locale } from '@/lib/translations'

// Simplified Services Section component
const ServicesSectionNew = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  
  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language') as Locale
    if (storedLang) {
      setCurrentLang(storedLang)
    }
  }, [])

  const { t } = useTranslation()

  // Service data
  const services = [
    {
      icon: "💻",
      title: t('service1_title'),
      description: t('service1_desc')
    },
    {
      icon: "🌐",
      title: t('service2_title'),
      description: t('service2_desc')
    },
    {
      icon: "📱",
      title: t('service3_title'),
      description: t('service3_desc')
    },
    {
      icon: "🔒",
      title: t('service4_title'),
      description: t('service4_desc')
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('services_title')}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t('services_description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index} /* key is a React prop, not passed to the component */
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple Service Card component
const ServiceCard = ({ 
  icon, 
  title, 
  description
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default ServicesSectionNew
