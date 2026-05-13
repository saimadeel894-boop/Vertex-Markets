import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Advantages from '@/components/Advantages'
import Ticker from '@/components/Ticker'
import Platforms from '@/components/Platforms'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
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
