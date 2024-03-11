import { useState } from 'react'
import HeroSection from '../component/HeroSection'
import LinkNavbar from '../component/LinkNavbar'
import Navbar from '../component/Navbar'
import SurahList from '../component/SurahList'

function HomePages() {
  return (
    <> 
        <Navbar/>
        <HeroSection/>
        <LinkNavbar/>
        <SurahList/>
    </>
  )
}

export default HomePages