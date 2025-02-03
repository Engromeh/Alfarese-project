import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import HeroSection from '../Pages/HeroSection/HeroSection'
import Payment from '../Pages/Payment/Payment'
import MarketingSection from '../Pages/MarketingSection/MarketingSection'
import Improve from '../Pages/Improve/Improve'
import Servres from '../Pages/Servres/Servres'
import Sectioneplan from '../Pages/Sectioneplan/Sectioneplan'
import ContactForm from '../Pages/ContactForm/ContactForm'
import Footer from '../Pages/Footer/Footer'
import Pricing from '../Pages/Pricing/Pricing'
import TeamSlider from '../Pages/TeamSlider/TeamSlider'

const Home = () => {
  return (
    <>
      <Navbar />
 <HeroSection/>
 <Payment/>
 <MarketingSection />
 <Improve />
 <Servres />
 <Pricing />
 <Sectioneplan />
 <TeamSlider />
 <ContactForm />
        <Footer />
    </>
  )
}

export default Home
