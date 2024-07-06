import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import Benefits from '../components/Benefits'
import Apartments from '../components/Apartments'
import HeroSecondary from '../components/HeroSecondary'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Metrics />
        <Benefits />
        <Apartments />
        <HeroSecondary />
        <Footer />
        <FooterNav /> 
    </div>
  )
}

export default HomePage