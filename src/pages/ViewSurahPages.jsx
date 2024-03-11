import { useState, useEffect } from 'react'
import ViewSurah from '../component/ViewSurah';

function ViewSurahPages() {
  useEffect(() => {
    document.title = 'Pemuda Muslim | ViewSurah Pages'
  })
  return (
    <> 
        <ViewSurah/>
    </>
  )
}

export default ViewSurahPages