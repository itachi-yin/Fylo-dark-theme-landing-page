import React from "react";
// banner logo
import bannerLogo from "../assets/illustration-intro.png";
// Header Css
import "./Header.css";

function Header() {
  return (
    <header className="header-container p-[5rem]">
      <div className="headerDiv1 banner-logo">
        <img src={bannerLogo} alt="" className="inline-block p-16" />
      </div>
      <div className="headerDiv2 header-heading text-white text-6xl font-bold p-20">
        <h1>All Your Files In One Secure Location, <br /> Accessible Anywhere.</h1>
      </div>
      <div className="headerDiv3 header-para text-slate-400 text-3xl p-16 pb-6 border-t-2 border-cyan-300">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nisi in,
        quod aliquam <br /> odio tempora illo inventore laudantium atque 
        officiis, illum voluptatem <br />  voluptatibus nostrum quaerat.</p>
      </div>
      <div className="headerDiv4 header-btn text-white p-16">
        <button className="text-4xl border py-5 px-20 rounded-full bg-transparent hover:bg-cyan-300  transition-all duration-400 ease-in-out">
        Get Started</button>
      </div>
    </header>
  );
}

export default Header;
