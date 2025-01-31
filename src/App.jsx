
import './App.css'
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
        <Footer />
    </>
  )
}

export default App
