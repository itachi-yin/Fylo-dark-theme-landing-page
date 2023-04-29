import React from 'react'
import './FooterEmailBox.css'

function FooterEmailBox() {
  return (
    <div className='emailBox flex flex-col justify-center items-center bg-col1'>
        <div className="emailBox-heading">
            <h1  className='text-4xl font-semibold mb-7'>Get Early Access Today</h1>
        </div>
        <div className="emailBox-para">
            <p  className='text-2xl mb-8'>It Only Takes A Minute To Sign Up And Our Free Starter Tier Is Extremely Generous. If You Have Any Questions, Our Support Team Would Be Happy To Help You.</p>
        </div>
        <div className="emailBox-in text-3xl flex justify-center items-center">
            <div className="emailBox-email mr-28">
                <input type="email" className='px-8 py-4 rounded-full'/>
                <h2></h2>
            </div>
            <div className="email-btn">
                <button className='border text-2xl px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-150 ease-in-out'>
                    Get Started For Free
                </button>
            </div>
        </div>
    </div>
  )
}

export default FooterEmailBox