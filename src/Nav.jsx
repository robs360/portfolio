import React from "react";
import port from './assets/images/port.jpg'

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
const Nav=()=>{
    const bg = {
        backgroundColor: 'orange'
    };
    return(
        <div className="w-[360px] mx-auto p-1 md:w-[550px]">
            <div className="py-2 rounded-l-[32px] rounded-r-[32px] opacity-80 flex border-2 border-blue-400 justify-between
            w-[360px] md:w-[550px] items-center px-6 fixed z-50 text-white space-x-6 mt-10" >
                 <div className="flex space-x-2 md:space-x-3 items-center">
                    <img src={port} className="w-[50px] h-[50px] rounded-[50%]" alt="" srcset="" />
                    <Link to={'/'}><h1 className="text-[17px] font-medium">Home</h1></Link>
                 </div>
                 <div className="flex space-x-3 md:space-x-6 w-[240px] md:w-[290px] items-center">
                    <Link to={'https://github.com/robs360'}> <div className="flex space-x-2 items-center">
                        
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