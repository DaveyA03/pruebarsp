import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Home from './components/Home';
import FooterCT from './components/FooterRsp'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='pt-20 px-6 '>
     < Home  /> 
        </div>
 
       
        

     <div className="max-w-7xl mx-auto pt-32 px-6">
     {/* <HeroSection /> 
        <FeatureSection />
      <Workflow />
      <Pricing />
     <FeatureSection />
       <Testimonials />
        <Footer />
     */} 
       
  
        </div>
    

        <FooterCT />
     </>
  
     
  )
}

export default App