import React from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    return (
        <>
            <nav className='w-full h-full flex items-center justify-between px-12'>
                <div className='text-xl'>
                    DevSphere
                </div>
                <div className='text-3xl'>
                    <HiOutlineMenuAlt3 />
                </div>
            </nav>
        </>
    )
}

export default Navbar
