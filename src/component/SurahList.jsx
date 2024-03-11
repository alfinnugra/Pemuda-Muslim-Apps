import React, {useEffect, useState} from 'react'
import '../css/SurahList.css'
import axios from 'axios'

function SurahList() {
    const [surah, setSurah] = useState([])

    const getSurah = async () => {
        try {
            let res = await axios.get("https://equran.id/api/surat")
            setSurah(res.data);
            console.log(res.data)
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getSurah()
    }, [])
  return (
    <div className="surahList">
        {
            surah.map((surah, index) => {
                return (
                    <div key={index}>
                        <div className="title">
                            <h1><a href={`./ViewSurah/${surah.nomor}`} className='surahName'>{surah.nama_latin}</a></h1>
                            <h1 className='textsArab'>${surah.nama}</h1>
                        </div>
                        <div className="deskripsi">
                            <span>{surah.arti} | {surah.jumlah_ayat} ayat</span>
                        </div>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default SurahList