import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <header className='w-full h-14 bg-black text-white'>
                <Navbar />
            </header>
            <Footer />
        </>
    )
}

export default HomePage
