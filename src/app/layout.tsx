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
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {/* Language detector */}
        <LanguageDetectorClient />
        
        {/* Main content */}
        {children}
      </body>
    </html>
  )
}
