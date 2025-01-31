
import './App.css'
import ContactForm from './Component/Pages/ContactForm/ContactForm'
import Footer from './Component/Pages/Footer/Footer'
import HeroSection from './Component/Pages/HeroSection/HeroSection'
import Improve from './Component/Pages/Improve/Improve'
import MarketingSection from './Component/Pages/MarketingSection/MarketingSection'
import Navbar from './Component/Pages/Navbar/Navbar'
import Payment from './Component/Pages/Payment/Payment'
import Sectioneplan from './Component/Pages/Sectioneplan/Sectioneplan'
import Servres from './Component/Pages/Servres/Servres'

function App() {

  return (
    <>
 <Navbar />
 <HeroSection/>
 <Payment />
 <MarketingSection />
 <Improve />
 <Servres />
 <Sectioneplan />
 <ContactForm />
        <Footer />
    </>
  )
}

export default App
