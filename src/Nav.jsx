import React from "react";
import port from './assets/images/port.jpg'

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Nav=()=>{
    const bg = {
        backgroundColor: 'orange'
    };
    return(
        <div className="w-[98%] md:w-[96%] mx-auto p-1">
            <div className="w-full p-1 rounded-md bg-orange-500 opacity-80 flex 
            justify-between items-center pl-3 fixed z-50 text-white" >
                 <div className="flex space-x-2 md:space-x-3 items-center">
                    <img src={port} className="w-[55px] h-[55px] 
                    rounded-[50%]" alt="" srcset="" />
                    <Link to={'/'}><h1 className="text-[17px] font-medium">Home</h1></Link>
                 </div>
                 <div className="flex space-x-3 md:space-x-6 w-[240px] md:w-[290px] items-center">
                    <Link to={'https://github.com/robs360'}> <div className="flex space-x-2 items-center">
                        <FaGithub className="text-4xl text-black hidden md:flex"></FaGithub>
                        <p className="font-medium">Github</p>
                    </div> </Link>               
                    <Link to={'/project'}><p className="font-medium">Project</p></Link>
                    <Link to={'/resume'}><p className="font-medium">Resume</p></Link>

                 </div>
            </div>
        </div>
    )
}
export default Nav