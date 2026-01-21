import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-full min-h-[22vh] bg-black text-[#D5FF3F] flex flex-col gap-10'>
                <h1 className='text-7xl text-center font-semibold'>DevSphere</h1>

                <div className='flex items-center justify-between px-12'>
                    <div>Terms and Conditions</div>
                    <ul className='flex gap-10'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Project</li>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                    <div>Privacy Policy</div>
                </div>
            </footer>
        </>
    )
}

export default Footer
