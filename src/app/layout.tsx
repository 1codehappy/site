// Import global styles with Tailwind CSS directives
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import LanguageDetectorClient from '@/components/LanguageDetector'
import type { Metadata } from 'next'

// Font loading
const inter = Inter({ subsets: ['latin'] })

// Site metadata
export const metadata = {
  title: 'Code Happy | Technology Solutions',
  description: 'Code Happy Technology - Outsourcing, consulting, and infrastructure solutions since 2020',
  keywords: 'Code Happy, Technology, Outsourcing, Consulting, Infrastructure',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon for technology icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {/* Font Awesome for additional icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {/* Language detector */}
        <LanguageDetectorClient />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
