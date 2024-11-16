import React from "react";
import port from './assets/images/port.jpg'

import { Link } from "react-router-dom";
import { FaEnvelope, FaFile, FaGithub } from "react-icons/fa";
import 'font-awesome/css/font-awesome.min.css';
import { FaLinkedin } from "react-icons/fa6";

const Nav = () => {
    const bg = {
        backgroundColor: 'orange'
    };
    return (
        <div className="w-full mx-auto p-1 md:w-[550px]">
            <div className="w-[360px] md:w-[550px] py-3 rounded-l-[32px] rounded-r-[32px] flex border-2 border-blue-400 space-x-3 md:space-x-4 md:justify-center
             items-center px-2 z-50 text-white  mt-4 mx-auto" >
                <div className="ml-2 md:ml-0">

                    <Link to={'/'}><h1 className="text-[17px] font-medium">Home</h1></Link>
                </div>
                <div className="flex space-x-3  md:space-x-7 pr-1 w-[240px] md:w-[290px] items-center">
                    <Link to={'https://github.com/robs360'}> <div className="flex space-x-2 items-center">

                        <p className="font-medium">Github</p>
                        <FaGithub className="text-[17px] text-blue-200"></FaGithub>
                    </div> </Link>
                    <div className="flex space-x-2 items-center">
                        <a href="https://www.linkedin.com/in/shahadat-hossen-nayem" target="_blank" rel="noopener noreferrer" className="font-medium">Linkedin</a>
                        <FaLinkedin className="text-blue-200 text-[17px]"></FaLinkedin>
                    </div>


                    <div className="flex space-x-2 items-center">
                        <Link to={'/resume'}><p className="font-medium">Resume</p></Link>
                        <FaEnvelope className="text-blue-200 text-[17px] mt-[2px]"></FaEnvelope>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Nav