'use client'
import { useState } from "react"
import Link from "next/link"



const AdminPanel = () => {
    const [data, setData] = useState([])

    const getAllLocalData = () => {
        const keys = Object.keys(localStorage)
        const allData = keys.map(key => JSON.parse(localStorage.getItem(key)))
        setData(allData)
    }

    const deleteData = () => {
        localStorage.clear()
        alert("Data cleared !")
    }


    return (
        <div style={{ margin: "20px", height: 'auto' }}>
            <h1 style={{ fontFamily: 'monospace' }}>Admin Panel</h1>

            <div style={{ height: "auto", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <div>
                    {data.map((item, index) => (
                        <div key={index}>
                            <h3>{item.option}</h3>

                            {Object.entries(item.quantities).map(([product, quantity]) => (
                                <p key={product}>
                                    {product} : {quantity}
                                </p>
                            ))}

                        </div>
                    ))}

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <button onClick={getAllLocalData} type="submit" style={{ width: '150px', height: "40px", margin: 'auto', fontSize: "20px" }}>Sifarişləri yoxla</button>
                    <Link href='/'><button style={{ width: '150px', height: "40px", margin: 'auto', fontSize: "20px" }}>Əsas Səhifə</button></Link>
                    <button onClick={deleteData} style={{ width: '150px', height: "40px", margin: 'auto', fontSize: "20px" }}>Delete Data</button>
                </div>


            </div>
        </div >
    )
}

export default AdminPanel