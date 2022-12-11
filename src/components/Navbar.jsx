import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarIcon from '@mui/icons-material/Star';
import WalletIcon from '@mui/icons-material/Wallet';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const Navbar = () => {
    const [nav, setNav] = React.useState(false);
  return (
    <div className='max-w-[1640px] flex justify-between items-center p-4'>
        {/* {Left Side} */}
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer mr-4'>
                <MenuIcon className='hover:scale-150 duration-300' />
            </div>
            <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 lg:mr-4 text-sky-600'>
                    Eat <span className='font-bold text-sky-600'>Now</span>
                </h1>
            </div>
            <div className='hidden md:flex items-center bg-gray-200 rounded-full text-[14px] p-1  '>
                <p className='bg-sky-600 text-white rounded-full p-2'>Delivery</p>
                <p className='p-2 rounded-full'>Pickup</p>
            </div>
        </div>
        {/* {right side} */}
        <div className='bg-gray-200 flex items-center w-[200px] rounded-full px-2 sm:w-[400px] lg:w-[500px]'>
            <SearchIcon className='cursor-pointer'/>
            <input className='bg-transparent p-2 w-full focus:outline-none ' type="text" placeholder='search food'/>
        </div>
        {/* {cart} */}
        <button className='hidden md:flex items-center border-sky-600 bg-sky-600 text-white rounded-full py-2 hover:bg-sky-500 hover:border-sky-500'>
           <ShoppingCartIcon className='mr-2'/>Cart
        </button>

        {/* {mobile phone} */}
        {/* {overlay} */}
        {nav ? <div className='bg-black/80 w-full h-screen fixed z-10 top-0 left-0 '></div> : null}
        
        {/* {side menu} */}
        <div className={nav ? 'fixed bg-white w-[300px] z-10 h-screen top-0 left-0 duration-300' : 'fixed bg-white w-[300px] z-10 h-screen top-0 left-[-100%] duration-300' }>
            <CloseIcon onClick={()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer hover:scale-150 duration-300'/>
            <h1 className='text-2xl p-4 text-sky-600'>Eat <span className='font-bold'>Now</span>
            </h1>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800 '>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100 '><ShoppingBagIcon className='mr-4'/>Orders</li>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100'><StarIcon className='mr-4'/>Favorites</li>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100'><WalletIcon className='mr-4'/>Wallet</li>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100'><AddBusinessIcon className='mr-4'/>Promotions</li>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100'><PersonAddIcon className='mr-4'/>Invite Friends</li>
                    <li className='text-xl flex py-4 px-4 rounded-full cursor-pointer hover:bg-sky-100'><QuestionMarkIcon className='mr-4'/>Help</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar