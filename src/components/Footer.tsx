'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiMail, FiMapPin } from 'react-icons/fi'
import CodeHappyLogo from './CodeHappyLogo'
import { useTranslation, Locale } from '@/lib/translations'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [currentLang, setCurrentLang] = useState<Locale>('en')
  const { t, locale } = useTranslation()

  useEffect(() => {
    setCurrentLang(locale as Locale)
  }, [locale])

  return (
    <footer className="bg-[#4CAF50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Logo, Contact Info, Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Logo and Description */}
            <div className="col-span-1 flex flex-col">
              <div className="w-32 md:w-40 mb-4">
                <CodeHappyLogo color="white" />
              </div>
              <p className="text-gray-300 mb-4">
                {t('footer_description')}
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com/1codehappy" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDD835] transition-colors">
                  <FiGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/1giba" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FDD835] transition-colors">
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer_quick_links')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#home" className="text-white/80 hover:text-[#FDD835] transition-colors">
                    {t('nav_experience')}
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-white/80 hover:text-[#FDD835] transition-colors">
                    {t('nav_about')}
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-white/80 hover:text-[#FDD835] transition-colors">
                    {t('nav_services')}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-white/80 hover:text-[#FDD835] transition-colors">
                    {t('nav_contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">{t('footer_contact')}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FiMapPin className="text-[#81D4FA] mt-1 flex-shrink-0" />
                  <span className="text-white/80">{t('footer_address')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="text-[#81D4FA] flex-shrink-0" />
                  <a href="mailto:contato@codehappy.com.br" className="text-white/80 hover:text-[#FDD835] transition-colors">
                    contato@codehappy.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white">
            <p>&copy; {currentYear} Code Happy Tecnologia Ltda. {t('footer_rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer