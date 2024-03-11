import React from 'react'
import '../css/HeroSection.css'
import alquranImg from '../assets/img/alquranimg.png'

const HeroSection = () => {
  return (
    <div className="heroSection">
        <p className='textWelcome'>Assalamualaikum</p>
        <div className="cardHero">
          <h1 className="titleQuran">Al Quran Online</h1>
          <img src={alquranImg} alt="alquran"  className='alquranImg'/>
        </div>
    </div>
  )
}

export default HeroSection
