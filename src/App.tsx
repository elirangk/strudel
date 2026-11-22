import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { FinalCta } from './components/FinalCta'
import { FloatingBuy } from './components/FloatingBuy'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Order } from './components/Order'
import { TrustBar } from './components/TrustBar'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Order />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingBuy />
    </>
  )
}
