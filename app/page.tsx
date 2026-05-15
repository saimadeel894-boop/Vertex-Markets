import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Advantages from '@/components/Advantages'
import Ticker from '@/components/Ticker'
import Footer from '@/components/Footer'
import Platforms from '@/components/Platforms'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--background)' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Advantages />
      <Ticker />
      <Platforms />
      <CTABanner />
      <Footer />
    </main>
  )
}

