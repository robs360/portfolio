import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import 'font-awesome/css/font-awesome.min.css';

const Nav = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full mx-auto p-1 md:w-[550px]"
        >
            <div className="w-[360px] md:w-[550px] py-3 rounded-l-[32px] rounded-r-[32px] border-2 border-blue-400 bg-gradient-to-r from-[#0f172a] to-[#1e293b] shadow-lg text-white flex items-center justify-center px-2 space-x-3 md:space-x-4 mt-4 mx-auto z-50 backdrop-blur-md">
                <div className="ml-2 md:ml-0 transition-transform duration-300 hover:scale-105">
                    <Link to={'/'}>
                        <h1 className="text-[17px] font-semibold tracking-wide hover:text-blue-300 transition-colors">Home</h1>
                    </Link>
                </div>
                <div className="flex space-x-3 md:space-x-6 pr-1 w-[240px] md:w-[290px] items-center">
                    <Link to={'https://github.com/robs360'}>
                        <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-105">
                            <p className="font-medium hover:text-blue-300 transition-colors">Github</p>
                            <FaGithub className="text-[17px] text-blue-200" />
                        </div>
                    </Link>
                    <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-105">
                        <a href="https://www.linkedin.com/in/shahadat-hossen-nayem" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-300 transition-colors">
                            Linkedin
                        </a>
                        <FaLinkedin className="text-blue-200 text-[17px]" />
                    </div>
                    <div className="flex space-x-2 items-center transition-transform duration-300 hover:scale-105">
                        <Link to={'/resume'}>
                            <p className="font-medium hover:text-blue-300 transition-colors">Resume</p>
                        </Link>
                        <FaEnvelope className="text-blue-200 text-[17px] mt-[2px]" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Nav;
