import React from 'react';
import navImg from '../../assets/logo.png'
import dollarImg from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div class="navbar max-w-[1200px] mx-auto">
            <div class="flex-1">
            <a class="btn btn-ghost text-xl"><img src={navImg} className='w-[60px] h-[60px]' alt="" />I</a>
            </div>
            <div class="flex gap-2 items-center">
            <span>600000000</span>
            <span>Coin</span>
            <img src={dollarImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;