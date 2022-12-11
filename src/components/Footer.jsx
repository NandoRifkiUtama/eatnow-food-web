import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <footer className='flex justify-center'>
            <div className='border-sky-600 bg-sky-600 p-2 rounded-full text-white'>
                <p><CopyrightIcon/> Created by Nando @2022 </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer