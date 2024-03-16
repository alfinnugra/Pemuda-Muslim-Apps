import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/AsmaList.css'

function AsmaList() {
    const [asma, setAsma] = useState([])

    const getAsma = async () => {
        try {
            let res = await axios.get("https://api.dikiotang.com/quran/asma")
            if (Array.isArray(res.data.data)) {
                setAsma(res.data.data);
            } else {
                console.error("Response data is not an array:", res.data.data);
            }
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getAsma()
    }, [])
  return (
    <div className="asmaList">
        {asma.length > 0 ? (
            asma.map((asma, index) => {
                return (
                    <>
                   <div className='cardAsma' key={index}>
                        <h1 className='arabTitle'>{asma.arab}</h1>
                        <h1 className='latinText'>{asma.latin}</h1>
                        <p className='indoText'>{asma.indo}</p>
                   </div>
                    </>
                )
            })
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
  )
}

export default AsmaList