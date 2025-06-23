import React from 'react'

function Carousel({images}) {

  return (

    <div className='flex gap-4 px-4'>   
            {images.map((img, indx)=>{
                return <img src={img} alt="image" className='flex-shrink-0 max-h-64 rounded-lg object-contain' />
            })} 
      
    </div>
  )
}

export default Carousel
