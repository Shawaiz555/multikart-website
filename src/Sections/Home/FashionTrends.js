import React from 'react'

export default function FashionTrends() {
  return (
    <div className='w-full h-[550px] bg-cover bg-fixed mt-20 mb-14 relative' style={{ backgroundImage: 'url("/Background Images/FashionTrendsbgimg.jpg")' }}>
         <div className='w-[50%] absolute top-[30%]'>
             <h1 className='text-8xl text-center text-orange-400 font-semibold mb-1'>2023</h1>
             <h1 className='text-6xl text-center mb-2 tracking-wider font-semibold'>FASHION TRENDS</h1>
              <h1 className='text-2xl text-gray-400 tracking-widest text-center font-semibold'>SPECIAL OFFER</h1>
         </div>
    </div>
  )
}
