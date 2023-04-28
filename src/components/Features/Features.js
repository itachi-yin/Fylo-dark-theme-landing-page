import React from 'react'
// css 
import './Features.css'
// Images
import securityLogo from '../assets/icon-security.svg'
import anyFileLogo from '../assets/icon-any-file.svg'
import collaborationLogo from '../assets/icon-collaboration.svg';
import accessAnywhereLogo from '../assets/icon-access-anywhere.svg';

function Features() {
  return (
    <div className='features-container'>
        <div className="f-box f-box1 text-white">
            <img src={accessAnywhereLogo} alt="" className='inline-block w-40 mb-10'/>
            <h2 className='text-4xl font-semibold mb-7'>Access Your Files Anywhere</h2>
            <p className='text-2xl font-light text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla minima quod voluptate quis  accusantium aliquid <br /> aspernatur numquam, soluta explicabo esse?</p>
        </div>
        <div className="f-box f-box2 text-white">
            <img src={securityLogo} alt="" className='inline-block w-28 mb-10'/>
            <h2 className='text-4xl font-semibold mb-7'>Security You Can Trust</h2>
            <p className='text-2xl font-light text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla minima quod voluptate quis  accusantium aliquid <br /> aspernatur numquam, soluta explicabo esse?</p>
        </div>
        <div className="f-box f-box3 text-white">
            <img src={collaborationLogo} alt="" className='inline-block w-40 mb-10'/>
            <h2 className='text-4xl font-semibold mb-7'>Real Time Collaboration</h2>
            <p className='text-2xl font-light text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla minima quod voluptate quis  accusantium aliquid <br /> aspernatur numquam, soluta explicabo esse?</p>
        </div>
        <div className="f-box f-box4 text-white">
            <img src={anyFileLogo} alt="" className='inline-block w-40 mb-10'/>
            <h2 className='text-4xl font-semibold mb-7'>Store Any Type Of File</h2>
            <p className='text-2xl font-light text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Nulla minima quod voluptate quis  accusantium aliquid <br /> aspernatur numquam, soluta explicabo esse?</p>
        </div>
    </div>
  )
}

export default Features