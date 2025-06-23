import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel';


const ItemPage = () => {
    const { id } = useParams();
    const [images, setImages] = useState([])
    const [item, setItem] = useState({})

    async function getItem() {
        const res = await fetch(`/api/items/get/${id}`)
        const data = await res.json();
        setItem(data.data)
        setImages(data.data?.images)
    }

    useEffect(() => {
        getItem()
    }, [id])


    return (
        <div className='w-[35%] px-4 py-6 flex items-center gap-3 justify-center flex-col mx-auto mt-20 bg-amber-100 rounded-lg '>
            <div className=' overflow-x-auto whitespace-nowrap scrollbar-hide py-4 ' >
                <Carousel images={images} />
            </div>
            <div>
                <h1 className="text-4xl capitalize font-bold mx-3 pt-1  text-black ">{item.name}</h1>
                <h3 className="text-2xl mx-3 text-black pt-0.5">{item.type}</h3>
                <p className="text-xl mx-3 text-black pt-0.5">{item.description}</p>
            </div>
        </div>

    )
}

export default ItemPage
