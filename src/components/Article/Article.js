import React from 'react'
// css
import './Article.css'
// button
import buttonImg from '../assets/favicon-32x32.png'
// article image
import articleImg from '../assets/illustration-stay-productive.png';

function Article() {
  return (
    <article className='article-container py-44'>
        <div className='article-banner flex justify-end pr-9'>
            <img src={articleImg} alt="" className='inline-block w-[65rem]'/>
        </div>
        <div className='article-content flex flex-col justify-center items-start pl-9'>
            <h1 className='text-6xl mb-10 font-bold'>Stay Productive, <br /> Wherever You Are</h1>
            <p className='text-3xl mb-10 font-light'>Never Let Location Be An Issue When Accessing Your Files. Fylo Has You <br /> Covered For All Of You Life Storage Needs.</p>
            <p className='text-3xl mb-10 font-light'>Securely Share Files With Friends , Family And Collegues For Live <br /> Collaboration. No Email Attachments Required.</p>
            <button className='text-3xl flex justify-center items-center border-2 border-transparent hover:border-b-white hover:border-b-2 pb-2 transition-all duration-150 ease-in-out'>
                See How Fylo Works <img src={buttonImg} alt=""  className='w-7 h-7 ml-3'/>
            </button>
        </div>
    </article>
  )
}

export default Article