import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4  '>
        <div className='max-h-[500px] relative'>
            <div className='absolute flex flex-col justify-center w-full h-full text-gray-200 bg-black/60 max-h-[500px] rounded-[25px]'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-sky-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Indonesian <span className='text-sky-600'>Food</span></h1>
            </div>
            <img className='max-h-[500px] w-full object-cover rounded-[25px]' src="https://www.expatica.com/app/uploads/sites/3/2015/08/dutch-indonesian-food.jpg" alt="/" />     
        </div>
        
    </div>
  )
}

export default Hero