'use client'

import { useEffect, useState } from 'react'
import { FiUsers, FiCode, FiServer, FiDatabase } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation, Locale } from '@/lib/translations'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentLang, setCurrentLang] = useState<Locale>('en')

  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language') as Locale
    if (storedLang) {
      setCurrentLang(storedLang)
    }
  }, [])

  const { t } = useTranslation(currentLang)

  const services = [
    {
      icon: <FiUsers className="text-4xl mb-4 text-primary" />,
      title: t('service1_title'),
      description: t('service1_desc')
    },
    {
      icon: <FiCode className="text-4xl mb-4 text-primary" />,
      title: t('service2_title'),
      description: t('service2_desc')
    },
    {
      icon: <FiServer className="text-4xl mb-4 text-primary" />,
      title: t('service3_title'),
      description: t('service3_desc')
    }
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="services" className="bg-white dark:bg-dark py-16 md:py-20">
      <div className="container">
        <div className="section-heading">
          <motion.h2 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            {t('services_title')}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mt-2 mb-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('services_description')}
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.3 + index * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ 
  icon, 
  title, 
  description,
  delay,
  inView
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="card text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mx-auto">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

export default ServicesSection
