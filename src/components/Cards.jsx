import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12 mx-auto grid md:grid-cols-3 gap-6 '>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <h1 className='font-bold text-2xl px-2 pt-4'>Appetizer</h1>
                <p className='px-2'>Delightful Traditional Taste</p>
                <button className='border-white text-black bg-white mx-2 absolute bottom-4 hover:bg-sky-600 hover:text-white hover:border-sky-600'>Order Now</button>
            </div>
            <img className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover' src="https://asset.kompas.com/crops/Atp1STR6jMcegrNX0anTx5eN7xY=/0x0:1000x667/780x390/data/photo/2021/05/23/60aa371ed27a5.jpg" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <h1 className='font-bold text-2xl px-2 pt-4'>Main Course</h1>
                <p className='px-2'>Delightful Traditional Taste</p>
                <button className='border-white text-black bg-white mx-2 absolute bottom-4 hover:bg-sky-600 hover:text-white hover:border-sky-600'>Order Now</button>
            </div>
            <img className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover' src="https://t-2.tstatic.net/medan/foto/bank/images/Resep-Sate-Ayam-Madura-Menu-Lezat-Khas-Indonesia-yang-Mendunia.jpg" alt="/" />
        </div>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <h1 className='font-bold text-2xl px-2 pt-4'>Dessert</h1>
                <p className='px-2'>Delightful Traditional Taste</p>
                <button className='border-white text-black bg-white mx-2 absolute bottom-4 hover:bg-sky-600 hover:text-white hover:border-sky-600'>Order Now</button>
            </div>
            <img className='rounded-xl w-full max-h-[160px] md:max-h-[200px] object-cover' src="https://www.unileverfoodsolutions.co.id/dam/global-ufs/mcos/SEA/calcmenu/recipes/ID-recipes/appetisers/klepon/main-header.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Cards