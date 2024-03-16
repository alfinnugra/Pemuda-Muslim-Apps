import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import LinkNavbar from '../component/LinkNavbar'
import AsmaList from '../component/AsmaList'

function AsmaPages() {
  return (
    <>
        <Navbar />
        <HeroSection/>
        <LinkNavbar />
        <AsmaList />
    </>
  )
}

export default AsmaPages