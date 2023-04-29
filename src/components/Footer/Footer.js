import React from 'react'
import './Footer.css'
import fylo from '../assets/logo.svg'
import tLogo from '../assets/twitter.png'
import fLogo from '../assets/facebook.png'
import iLogo from '../assets/instagram.png'
import contactLogo from '../assets/icon-phone.svg'
import locationLogo from '../assets/icon-location.svg'
import gmailLogo from '../assets/icon-email.svg'
// Footer Email Box
import FooterEmailBox from './FooterEmailBox'


function Footer() {
  return (
    
    <footer className='footer-container text-white pt-[30rem] pb-36 relative'>
        <FooterEmailBox/>
        <div className="fylo-logo">
            <img src={fylo} alt="" />
        </div>
        <div className="footer-items text-xl">
            <div className="location-div">
                <img src={locationLogo} alt="" className='w-7 h-10 inline-block mr-8'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing  elit. Iusto possimus <br /> dolores officiis quis consectetur fugiat harum exercitationem error vero neque.</p>
            </div>
            <div className="contact-div">
                <div className='flex mb-9'>
                    <img src={contactLogo} alt="" className='inline-block mr-7'/>
                    <p>92+ 70000 01010</p>
                </div>
                <div className='flex'>
                    <img src={gmailLogo} alt="" className='inline-block mr-7'/>
                    <p>yoriichi@yoriichiyin.com</p>
                </div>
            </div>
            <div className="about-div text-2xl">
                <ul>
                    <li className='mb-7 text-slate-400
                    hover:text-white transition-all duration-150 ease-in-out'><a href="#">About Us</a></li>
                    <li className='mb-7 text-slate-400
                    hover:text-white transition-all duration-150 ease-in-out'><a href="#">Jobs</a></li>
                    <li className='mb-7 text-slate-400
                    hover:text-white transition-all duration-150 ease-in-out'><a href="#">Press</a></li>
                    <li className='text-slate-400 hover:text-white transition-all duration-150 ease-in-out'><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="contact-div text-2xl">
                <ul>
                    <li className='mb-7 text-slate-400  hover:text-white transition-all duration-150 ease-in-out'><a href="#">Contact Us</a></li>
                    <li className='mb-7 text-slate-400  hover:text-white transition-all duration-150 ease-in-out'><a href="#">Terms</a></li>
                    <li className='mb-7 text-slate-400  hover:text-white transition-all duration-150 ease-in-out'><a href="#">Privacy</a></li>
                </ul>
            </div>
            <div className="social-links">
                <ul>
                    <li>
                        <a href="#">
                        <img src={tLogo} alt="" className='bg-white rounded-full w-16 mr-7 hover:bg-cyan-300 transition-all duration-150 ease-in-out'/>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                        <img src={iLogo} alt="" className='bg-white rounded-full w-16 mr-7 hover:bg-cyan-300 transition-all duration-150 ease-in-out'/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <img src={fLogo} alt="" className='bg-white rounded-full w-16 mr-7 hover:bg-cyan-300 transition-all duration-150 ease-in-out'/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </footer>
  )
}

export default Footer