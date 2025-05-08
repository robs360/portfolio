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
                   font-medium '>HI I AM SHAHADAT</h1>
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
                        contentStyle={{ background: 'black', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="About Me"
                        iconStyle={{ background: 'black', color: 'white' }}
                        icon={fa3}
                    >
                        <div>
                            <p className='text-[15px]'>
                                I'm a passionate Full Stack Engineer with extensive
                                experience in building modern web applications. My goal is to
                                contribute meaningfully to the tech
                                industry by generating and refining innovative ideas.

                                My journey in software development has led me to work with
                                various technologies and architectures.
                                My skills in front-end are React,Next,TypeScript, Firebase, Tailwind etc,
                                And in back-end are c++, MongoDB, Express.js and jwt.

                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'black', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Front-End"
                        iconStyle={{ background: 'black', color: '#fff' }}
                        icon={fa1}
                    >

                        <div className='grid grid-cols-3 gap-y-4'>
                            <div>
                                <FaReact className='mx-auto text-4xl text-cyan-300'></FaReact>
                                <h1 className='text-cyan-300 font-medium text-center'>React</h1>
                            </div>
                            <div>
                                <SiRedux className='mx-auto text-4xl text-cyan-300'></SiRedux>
                                <h1 className='text-cyan-300 font-medium text-center'>Redux</h1>
                            </div>
                            <div>
                                <img src={typeS} className='mx-auto w-[40px] h-[40px]' alt="" srcset="" />
                                <h1 className='text-cyan-300 font-medium text-center'>TypeScript</h1>
                            </div>
                            <div>
                                <FaJsSquare className='mx-auto text-4xl text-cyan-300'></FaJsSquare>
                                <h1 className='text-cyan-300 font-medium text-center'>JavaScript</h1>
                            </div>
                            <div>
                                <img src={tailwind} className='mx-auto w-[40px] h-[40px]' alt="" srcset="" />
                                <h1 className='text-cyan-300 font-medium text-center'>Tailwind</h1>
                            </div>
                            <div>
                                <FaCss3 className='mx-auto text-4xl text-cyan-300'></FaCss3>
                                <h1 className='text-cyan-300 font-medium text-center'>CSS</h1>
                            </div>
                            <div>
                                <FaHtml5 className='mx-auto text-4xl text-orange-300'></FaHtml5>
                                <h1 className='text-cyan-300 font-medium text-center'>HTML5</h1>
                            </div>

                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'black', color: 'white' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Back-End"
                        iconStyle={{ background: 'black', color: '#fff' }}
                        icon={fa2}

                    >
                        <div className='grid grid-cols-4 gap-y-10 my-8 items-center'>
                            <img src={express} className='w-[40px] h-[40px]' alt="" srcset="" />
                            <img src={mongo} className='w-[40px] h-[40px]' alt="" srcset="" />
                            <img src={c_plus} className='w-[40px] h-[40px]' alt="" srcset="" />
                            <h1 className='font-medium'>JWT</h1>
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

            <div>
                <h1 className='text-3xl text-blue-600 font-medium  text-center my-16'>
                    Contact Or Connect With Me</h1>

                <div className='w-[95%] p-2 py-4 mb-8 mx-auto
              rounded-md flex items-center
              justify-center md:flex-row flex-col gap-4'>

                    <div className='w-[98%] text-white md:w-[52%] lg:w-[36%]'>
                        <h1 className='text-center text-3xl font-medium'>Social Media Link</h1>
                        <div className='w-[300px] mt-5 mx-auto flex justify-evenly'>
                            <a
                                href="https://www.facebook.com/shahadat.hossaen.71?mibextid=ZbWKwL">
                                <FaFacebook className='co text-5xl'></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/shahadat-nayem-6458b4238">
                                <FaLinkedin className='co text-5xl'></FaLinkedin></a>
                        </div>
                        <h1 className='text-3xl mt-5 text-center'>Contact</h1>
                        <div className='w-[310px] mx-auto'>
                            <h1 className='mt-2 text-[17px] font-medium text-center'>
                                01842281884 or 01319037012(WhatAapp)</h1>
                            <h1 className='mt-2 text-[17px] font-medium text-center'>
                                Email:nayemshahadat581@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home