import React from "react";
import logo from'./assets/logo.svg';

function Navbar() {
  return (
  <div className="navbar-container flex justify-between items-center w-[90%] m-auto pt-14">
    <div className="navbar-logo">
      <img src={logo} alt=""/>
    </div>
    <div className="navbar-btns w-1/2 flex justify-end">
      <a href="#" className="p-2 text-3xl ml-20 border-b-[0.1rem] border-transparent hover:border-b-[0.1rem] hover:border-white transition-all ease-in-out duration-200  text-slate-400 hover:text-white">Features</a>
      <a href="#" className="p-2 text-3xl ml-20 border-b-[0.1rem] border-transparent hover:border-b-[0.1rem] hover:border-white transition-all ease-in-out duration-200  text-slate-400 hover:text-white">Team</a>
      <a href="#" className="p-2 text-3xl ml-20 border-b-[0.1rem] border-transparent  hover:border-b-[0.1rem] hover:border-white transition-all ease-in-out duration-200  text-slate-400 hover:text-white">Sign In</a>
    </div>
  </div>
  );
}

export default Navbar;
