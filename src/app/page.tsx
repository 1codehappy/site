import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSectionNew from '@/components/ServicesSectionNew'
import ContactSectionNew from '@/components/ContactSectionNew'

// Main page component with explicit styling to ensure content visibility
// Each section has explicit sizing and styling to guarantee it appears correctly
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-black bg-white">
      {/* Header with fixed styling */}
      <div className="w-full">
        <Header />
      </div>
      
      {/* Main content area with explicit minimum height */}
      <div className="flex-grow w-full block">
        {/* Hero section at the top of the content */}
        <HeroSection />
        
        {/* About section */}
        <AboutSection />
        
        {/* Services section */}
        <ServicesSectionNew />
        
        {/* Contact section */}
        <ContactSectionNew />
      </div>
      
      {/* Footer with fixed styling */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}
