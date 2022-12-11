import React, {useState} from 'react';
import {data} from '../data/data.js';

const Foods = () => {
    const [foods, setFoods] = useState(data);

    // {filter category}
    const filterCategory = (category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-center font-bold text-4xl text-sky-600'>Our Menu</h1>
        <div className='flex justify-center'>
            <div>
                <p className='text-gray-700 font-bold my-4 text-center'>Filter Category</p>
                <div className='flex justify-between flex-wrap gap-4 mb-4'>
                    <button onClick={()=> setFoods(data)} className='border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>All</button>
                    <button onClick={()=> filterCategory('appetizer')} className='border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Appetizer</button>
                    <button onClick={()=> filterCategory('main-course')} className='border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Main Course</button>
                    <button onClick={()=> filterCategory('dessert')} className='border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white'>Dessert</button>
                </div>
            </div>
        </div>

        {/* {display food} */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 pt-4 gap-4'>
            {foods.map((item, index)=>(
                <div className='border shadow-md hover:scale-110 duration-300 rounded-xl' key={index}>
                    <img src={item.image} alt={item.name} className='w-full h-[140px] sm:h-[160px] lg:h-[200px] object-cover rounded-t-xl' />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold text-gray-700 '>{item.name}</p>
                        <p><span className=' bg-sky-400 p-[7px] rounded-full text-sm text-white'>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods