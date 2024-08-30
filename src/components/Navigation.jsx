import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    return (
        <>
            <header className='header'>

                <div className='navBar container'>
                    <h1><Link to="/"> My Website</Link></h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    <span className='menu' onClick={handleClick}>
                        {isOpen ? <IoMdClose /> : <HiBars3BottomRight />}
                    </span>
                </div>

            </header>

            {
                isOpen &&
                <nav className='mobile-nav'>
                    <ul>
                        <li onClick={handleClick}><Link to="/">Home</Link></li>
                        <li onClick={handleClick}><Link to="/about">About</Link></li>
                        <li onClick={handleClick}><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            }
        </>
    )
}

export default Navigation