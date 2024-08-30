import React from 'react'
import pc from "../assets/pc.jpg"
const About = () => {
  return (
    <div className='container about'>

      <div className="imsgeContainer">
        <img src={pc} alt="Computer" />
      </div>

      <div className="aboutDetails">
        <h1>
          We Believe that
          Interior beautifies the
        </h1>
        <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that.</p>
        <button>Hire Me Now</button>
      </div>
      
    </div>
  )
}

export default About