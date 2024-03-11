import React, {useEffect} from 'react'
import Navbar from '../component/Navbar'
import HeroSection from '../component/HeroSection'
import LinkNavbar from '../component/LinkNavbar'
import DoaList from '../component/DoaList'

function DoaPages() {
  useEffect(() => {
    document.title = 'Pemuda Muslim | Doa Pages'
  })
  return (
    <>
        <Navbar />
        <HeroSection/>
        <LinkNavbar/>
        <DoaList />
    </>
  )
}

export default DoaPages