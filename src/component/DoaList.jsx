import React, {useEffect, useState} from 'react'
import '../css/DoaList.css'
import axios from 'axios'

function DoaList() {
    const [doa, setDoa] = useState([])

    const getDoa = async () => {
        try {
            let res = await axios.get("https://open-api.my.id/api/doa")
            setDoa(res.data);
            console.log(res.data)
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getDoa()
    }, [])
  return (
    <div className="doaList">
        {
            doa.map((doa, index) => {
                return (
                    <div key={index}>
                        <div className="titleDoa">
                            <span className='id'>{doa.id}</span>
                            <h1><a href={`./ViewDoa/${doa.id}`} className='doaName'>{doa.judul}</a></h1>
                        </div>
                        <div className="deskripsiDoa">
                            <h1 className='dataArab'>{doa.arab}</h1>
                            <h1 className='latin'>{doa.latin}</h1>
                            <h1 className='terjemah'>{doa.terjemah}</h1>
                        </div>
                        <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default DoaList