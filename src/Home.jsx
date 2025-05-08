import { Typewriter } from 'react-simple-typewriter';
import bg from './assets/images/banner2.jpg'
import { motion } from "framer-motion";
import express from './assets/images/express.png'
import mongo from './assets/images/mongo.png'
import c_plus from './assets/images/c++.png'
import my_img from './assets/images/my_image.jpg'
import typeS from './assets/images/ts2.png'


import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCss3, FaFacebook, FaHtml5, FaJsSquare, FaReact, FaServer, FaUser } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';


import project2 from './assets/images/project.png'
import project3 from './assets/images/project_image3.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import tailwind from './assets/images/tailwind2.svg'
import { Link } from 'react-router-dom';
import { SiExpress, SiMongodb, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useEffect } from 'react';


AOS.init();
const Home = () => {
    const fa1 = <FaReact className='text-cyan-300'></FaReact>
    const fa2 = <FaServer className='text-cyan-300'></FaServer>
    const fa3 = <FaUser className='text-cyan-300'></FaUser>
    useEffect(() => {

        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            document.body.style.overflow = "auto";
        }, 2800);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div className="w-[98%] py-2 mx-auto min-h-[83vh] mt-1 rounded-md">

                <motion.div
                    initial={{ scale: 0.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }} className='w-[186px] h-[232px] mt-3 flex items-center justify-center mx-auto rounded-full border-4 border-blue-600'>
                    <img src={my_img} className='w-[170px] h-[220px] rounded-full' alt="" />
                </motion.div>
                <div className=''>
                    <div className='w-full  flex
              items-start justify-center text-white mt-4'>
                        <motion.div initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
                        >
                            <h1 className='text-4xl 
                   font-medium '><span className='text-gray-500'>HI I</span> AM SHAHADAT</h1>
                        </motion.div>

                    </div>
                    <div className='App  mx-auto mt-3'>
                        <motion.h1 initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1.5 }} className="text-white text-3xl text-center font-semibold">
                            I Am A {' '}
                            <span className='text-blue-600' style={{ color: 'text-blue-400', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['MERN Stack Engineer', 'Tech Enthusiast']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={70}
                                    delaySpeed={1000}

                                />
                            </span>
                        </motion.h1>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='text-gray-300 mt-4 text-center font-medium text-[17px] p-4 rounded-md whitespace-pre-line'>
                        <Typewriter
                            words={[
                                "I'm building scalable and robust web applications using JavaScript and its frameworks like React and Next.js.\nPassionate about creating meaningful digital experiences that make a difference.",
                            ]}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={30}
                            deleteSpeed={70}
                            delaySpeed={100}
                        />

                    </div>
                </div>

                <a href="#projects">
                    <motion.button initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 2 }} className='px-7 py-4  my-10 font-medium text-white mx-auto bg-blue-600 rounded-full flex items-center space-x-3'><span>View My Works</span> <FaArrowRight></FaArrowRight> </motion.button></a>

            </div>
            <h1 className='text-4xl font-medium text-center my-20 text-blue-600'>About Me And My Skills</h1>

            <div className='flex'>
                <VerticalTimeline className='my-10'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'black', color: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="About Me"
                        iconStyle={{ background: 'black', color: 'white' }}
                        icon={fa3}
                    >
                        <div>
                            <p className='text-[15px] leading-relaxed text-gray-200'>
                                I'm a passionate <span className="text-cyan-400 font-semibold">Full Stack Engineer</span> with extensive
                                experience in building modern web applications. My goal is to
                                contribute meaningfully to the tech
                                industry by generating and refining innovative ideas.<br /><br />
                                My journey in software development has led me to work with
                                various technologies and architectures.
                                My skills in front-end are <span className="text-blue-300">React, Next.js, TypeScript, Firebase, Tailwind</span> etc,
                                and in back-end: <span className="text-blue-300">C++, MongoDB, Express.js, JWT</span>.
                            </p>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'black', color: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Front-End"
                        iconStyle={{ background: 'black', color: '#fff' }}
                        icon={fa1}
                    >
                        <div className='grid grid-cols-3 gap-y-6 pt-2'>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <FaReact className='mx-auto text-4xl text-cyan-300' />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>React</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <SiRedux className='mx-auto text-4xl text-cyan-300' />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>Redux</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img src={typeS} className='mx-auto w-[40px] h-[40px]' alt="TypeScript" />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>TypeScript</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <FaJsSquare className='mx-auto text-4xl text-cyan-300' />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>JavaScript</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img src={tailwind} className='mx-auto w-[40px] h-[40px]' alt="Tailwind" />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>Tailwind</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <FaCss3 className='mx-auto text-4xl text-cyan-300' />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>CSS</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300 col-span-3 flex flex-col items-center">
                                <FaHtml5 className='text-4xl text-orange-300' />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>HTML5</h1>
                            </div>
                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'black', color: 'white', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Back-End"
                        iconStyle={{ background: 'black', color: '#fff' }}
                        icon={fa2}
                    >
                        <div className='grid grid-cols-4 gap-y-10 my-8 items-center'>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img src={express} className='w-[40px] h-[40px] mx-auto' alt="Express.js" />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>Express</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img src={mongo} className='w-[40px] h-[40px] mx-auto' alt="MongoDB" />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>MongoDB</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <img src={c_plus} className='w-[40px] h-[40px] mx-auto' alt="C++" />
                                <h1 className='text-cyan-300 font-medium text-center mt-1'>C++</h1>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                                <h1 className='text-cyan-300 font-medium text-center text-[15px]'>JWT</h1>
                            </div>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>

            <div className="mt-24">
                <h1 className="text-blue-600 text-4xl text-center mt-12 mb-12 font-semibold">
                    Some of my Projects
                </h1>

                <div id="projects" className="flex justify-evenly flex-wrap gap-8 px-4">
                    {/* Project 1 */}
                    <div className="relative w-[360px] md:w-[390px] border border-white/10 bg-white/5 p-5 rounded-2xl shadow-lg group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src={project3}
                            alt="Project"
                            className="w-full h-[280px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                        <button className="absolute text-white rounded-full h-[40px] bg-blue-600 font-medium p-2 px-4 opacity-0 left-1/2 -translate-x-1/2 -bottom-6 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[45%]">
                            <Link to="/project/1">Show Details</Link>
                        </button>

                        <p className="my-3 text-blue-600 font-semibold text-lg">LifeLine (Team Project)</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Lifeline is a hospital management project with a wide dashboard for users, doctors, and admins. Main features include doctor appointments and video consultations.
                        </p>

                        <div className="flex gap-4 mt-5 text-[24px]">
                            <FaReact className="text-blue-500" />
                            <SiTypescript className="text-orange-300" />
                            <SiTailwindcss className="text-cyan-400" />
                            <SiExpress className="text-green-700" />
                            <SiMongodb className="text-green-800" />
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="relative w-[360px] md:w-[390px] border border-white/10 bg-white/5 p-5 rounded-2xl shadow-lg group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src="https://i.ibb.co.com/6Jmch326/project3.png"
                            alt="Project"
                            className="w-full h-[280px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                        <button className="absolute text-white rounded-full h-[40px] bg-blue-600 font-medium p-2 px-4 opacity-0 left-1/2 -translate-x-1/2 -bottom-6 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[45%]">
                            <Link to="/project/2">Show Details</Link>
                        </button>

                        <p className="my-3 text-blue-600 font-semibold text-lg">E-Travel (In Progress)</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            A robust Next.js project addressing travel needs like guidance, hotel booking, and bus tickets. Built with Redux Toolkit, Redux Persist, and ShadCN UI using reusable components and DRY principles.
                        </p>

                        <div className="flex gap-4 mt-5 text-[22px]">
                            <SiNextdotjs className="text-blue-500" />
                            <SiTypescript className="text-orange-300" />
                            <SiTailwindcss className="text-cyan-400" />
                            <SiExpress className="text-green-700 text-[24px]" />
                            <SiMongodb className="text-green-800 text-[24px]" />
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="relative w-[360px] md:w-[390px] border border-white/10 bg-white/5 p-5 rounded-2xl shadow-lg group overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                        <img
                            src={project2}
                            alt="Project"
                            className="w-full h-[280px] object-cover rounded-xl"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                        <button className="absolute text-white rounded-full h-[40px] bg-blue-600 font-medium p-2 px-4 opacity-0 left-1/2 -translate-x-1/2 -bottom-6 transition-all duration-500 group-hover:opacity-100 group-hover:bottom-[45%]">
                            <Link to="/project/3">Show Details</Link>
                        </button>

                        <p className="my-3 text-blue-600 font-semibold text-lg">HCSF</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            HCSF is a student forum for Chittagong University with user and admin dashboards. Key features include blood management, tuition coordination, and blog posting.
                        </p>

                        <div className="flex gap-4 mt-5 text-[24px]">
                            <FaReact className="text-blue-500" />
                            <SiTypescript className="text-orange-300" />
                            <SiTailwindcss className="text-cyan-400" />
                            <SiExpress className="text-green-700" />
                            <SiMongodb className="text-green-800" />
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-12 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white pt-12 pb-8 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-4">📬 Contact</h2>
                        <p className="text-gray-300 mb-1">Phone: <span className="font-medium">01842281884 / 01319037012 (WhatsApp)</span></p>
                        <p className="text-gray-300 mb-1">Email:</p>
                        <p className="text-sm text-gray-400 italic">nayemshahadat581@gmail.com</p>
                    </div>

                    {/* Social Section */}
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-4">🔗 Connect With Me</h2>
                        <div className="flex justify-center gap-8 mt-2">
                            <a
                                href="https://www.facebook.com/shahadat.hossaen.71?mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform hover:scale-110 transition duration-300 text-blue-500"
                            >
                                <FaFacebook className="text-4xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shahadat-nayem-6458b4238"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform hover:scale-110 transition duration-300 text-blue-300"
                            >
                                <FaLinkedin className="text-4xl" />
                            </a>
                        </div>
                    </div>

                    {/* Developer Info */}
                    <div className="text-center md:text-right">
                        <h2 className="text-2xl font-semibold text-blue-400 mb-4">👨‍💻 Developer</h2>
                        <p className="text-gray-300">Built with 💙 by <span className="font-bold text-white">Shahadat Hossen</span></p>
                        <p className="text-sm text-gray-500 mt-1">MERN Stack Developer | CSE Student</p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10"></div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-500 text-sm mt-6">
                    © {new Date().getFullYear()} Shahadat Hossen. All Rights Reserved.
                </div>
            </footer>


        </div>
    )
}
export default Home