import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Advantages from '@/components/Advantages'
import Ticker from '@/components/Ticker'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Advantages />
      <Ticker />
      <Footer />
    </main>
  )
}

