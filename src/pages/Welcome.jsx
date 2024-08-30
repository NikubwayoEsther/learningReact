import React from 'react'
import pic from "../assets/dev.jpg"
const Welcome = () => {
    return (
        <div className='welcome'>
            <div className="imgContainer">
                <img src={pic} alt="Bgimage" />
            </div>
            <div className="welcomeContent">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab molestiae sint. Ea, natus atque sint doloribus quisquam temporibus quo, nulla laboriosam quasi deserunt explicabo consectetur, accusamus esse reprehenderit cum.</p>
            </div>
        </div>
    )
}

export default Welcome