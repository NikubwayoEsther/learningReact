import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const HomeLayouts = () => {
    return (
        <div className='layouts'>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayouts