import React from 'react'
// css
import './Review.css'
// images
import megumi from '../assets/❒〢megumi hazl_x.jpeg'
import eren from '../assets/ᴇʀᴇɴ ᴊᴇᴀɢᴇʀ ɪᴄᴏɴ.jpeg'
import yoriichi from '../assets/☀️[Yoriichi tsuguikuni]☀️.jpeg'
import quote from '../assets/bg-quotes.png'

function Review() {
  return (
    <div className="review-full-width w-[100vw] bg-col3">

    
    <section className='review-container'>

        <div className="rev-box rev-box1 bg-col4">
            <div className="quote absolute -z-10">
                <img src={quote} alt="" className='inline-block'/>
            </div>
            <p className='text-2xl font-semibold mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus earum placeat possimus accusamus magni beatae, <br /> sequi sed eos assumenda quae.</p>
            <div className="rev-people">
                <img src={eren} alt="" className='w-24 rounded-full'/>
                <div>
                <h2 className='font-bold text-xl pb-1'>Vedant Lamba</h2>
                <p>Web Developer</p>
                </div>
                
            </div>
        </div>
        <div className="rev-box rev-box2 bg-col4">
            <p className='text-2xl font-semibold mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus earum placeat possimus accusamus magni beatae, <br /> sequi sed eos assumenda quae.</p>
            <div className="rev-people">
                <img src={megumi} alt="" className='w-24 rounded-full'/>
                <div>
                <h2 className='font-bold text-xl pb-1'>Itachi Yin</h2>
                <p>Professional Day Dreamer</p>
                </div>
                
            </div>
        </div>
        <div className="rev-box rev-box3 bg-col4">
            <p className='text-2xl font-semibold mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Necessitatibus earum placeat possimus accusamus magni beatae, <br /> sequi sed eos assumenda quae.</p>
            <div className="rev-people">
                <img src={yoriichi} alt="" className='w-24 rounded-full'/>
                <div>
                <h2 className='font-bold text-xl pb-1'>Yoriichi Yin</h2>
                <p>Business Man</p>
                </div>
                
            </div>
        </div>

    </section>
    </div>
  )
}

export default Review