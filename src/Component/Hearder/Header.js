import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid'

import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='h-eader'>

            <div className=' bg-[coral] md:hidden mb-0'>
                <MenuIcon onClick={() => setOpen(!open)} className='w-8'></MenuIcon>
            </div>
            <div className='flex items-center justify-center bg-[coral] md:text-xl mb-10'>
                <ul className={` md:flex justify-center   duration-500 bg-[coral] w-full p-6 ease-in m-0 absolute ${open ? 'top-7'  : 'm-0 top-[-150px] mb[-300px] md:top-0'}`}>
                    <hr />
                    <li className='ml-5'> <Link to={'/'}>Home</Link> </li>
                    <li className='ml-5 '> <Link to={'/order'}>Order</Link> </li>
                    <li className='ml-5 '> <Link to={'/about'}>About</Link> </li>
                    <li className='ml-5 '> <Link to={'/singin'}>Sing IN</Link> </li>
                    <li className='ml-5 mr-20 '> <Link to={'/login'}>Log IN</Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;