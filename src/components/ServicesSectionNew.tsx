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
    <section
      id="services"
      className="py-16 md:py-24 relative text-white"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay with reduced opacity to show more of the background image - using the new color scheme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4CAF50]/70 to-[#4DD0E1]/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">{t('services_title')}</h2>
          <div className="w-24 h-1 bg-[#81D4FA] mx-auto mt-2 mb-6 glow"></div>
          <p className="text-xl max-w-2xl mx-auto text-white">{t('services_description')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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

// Service Card component with futuristic styling optimized for mobile
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
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 border-t-2 border-[#4CAF50] group">
      <div className="text-4xl sm:text-5xl text-[#4CAF50] mb-3 sm:mb-5 group-hover:scale-110 transform transition-transform duration-300">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#4CAF50]">{title}</h3>
      <p className="text-sm sm:text-base text-gray-700">{description}</p>
    </div>
  )
}

export default ServicesSectionNew
