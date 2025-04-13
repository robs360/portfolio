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
import { SiExpress, SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';
import { useEffect } from 'react';


AOS.init();
const Home = () => {
    const fa1 = <FaReact className='text-cyan-300'></FaReact>
    const fa2 = <FaServer className='text-cyan-300'></FaServer>
    const fa3 = <FaUser className='text-cyan-300'></FaUser>
    const bannerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    useEffect(() => {
       
        document.body.style.overflow = "hidden";
    
        const timer = setTimeout(() => {
          document.body.style.overflow = "auto";
        }, 2800);
    
        return () => clearTimeout(timer);
      }, []);
    return (
        <div>
            <div className="w-[98%] py-2 mx-auto min-h-[83vh] mt-1 rounded-md" style={bannerStyle}>

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
                            transition={{ duration: 0.5, ease: "easeOut", delay:1 }}
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
                    <h1 className='text-white mt-4 text-center font-medium text-[17px] p-4 rounded-md bg-black'>
                        <Typewriter words={["I'm building scalable web applications with modern technologies. Passionate about creating meaningful digital experiences that make a difference."]}
                            loop={1}
                            cursor
                            cursorStyle='|'
                            typeSpeed={30}
                            deleteSpeed={70}
                            delaySpeed={100} />

                    </h1>
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
                                I am Shahadat Hossen Nayem, a student at
                                the International Islamic University,
                                Chittagong. I currently reside in
                                Chittagong and aspire to become a
                                full-stack MERN developer, building
                                on my front-end skills. My goal is to
                                contribute meaningfully to the tech
                                industry by generating and refining innovative ideas.

                                In my free time, I enjoy traveling and
                                reading, which fuel my creativity and broaden my perspective.
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

                        <div className='grid grid-cols-3 gap-y-10 my-8'>
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
            <div className='mt-24'>
                <h1 className='text-blue-600 text-4xl text-center mt-12 mb-12 font-medium'>Some of my Project</h1>
                <div id='projects' className='flex justify-evenly flex-wrap gap-5'>
                    <div className="relative w-[360px] md:w-[390px] border border-[rgba(255,255,255,0.05)] bg-[#0000001a] p-5 rounded-lg group overflow-hidden">

                        <img
                            src={project3}
                            className="w-full h-[280px] object-cover"
                            alt="Project"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                        <button className="absolute text-white rounded-full h-[40px] bg-blue-600 font-medium p-2 px-4 opacity-0 left-[35%] -bottom-6 transition-all duration-600 group-hover:opacity-100 group-hover:bottom-[45%]">
                            <Link to={'/project/1'}>Show Details</Link>
                        </button>
                        <p className='my-2 text-blue-600 font-medium text-[17px]'>LifeLine (Team Project)</p>
                        <p className='text-gray-400'>Lifeline is a hospital management project with a wide dashboard
                            user, doctor and admin. Main Features is dr appointment and vedio conversation with doctor.
                        </p>
                        <div className='flex gap-x-5 mt-5'>
                            <FaReact className='text-blue-500 text-[22px]'></FaReact>
                            <SiTailwindcss className='text-cyan-400 text-[24px]'></SiTailwindcss>
                            <SiExpress className='text-green-700 text-[24px]'></SiExpress>
                            <SiMongodb className='text-green-800 text-[24px]'></SiMongodb>
                        </div>
                    </div>

                    <div className="relative w-[360px] md:w-[390px] border border-[rgba(255,255,255,0.05)] bg-[#0000001a] p-5 rounded-lg shadow-md group overflow-hidden">

                        <img
                            src={project2}
                            className="w-full h-[280px]"
                            alt="Project"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                        <button className="absolute text-white rounded-full h-[40px] bg-blue-600 font-medium p-2 px-4 opacity-0 left-[35%] -bottom-6 transition-all duration-600 group-hover:opacity-100 group-hover:bottom-[45%]">
                            <Link to={'/project/2'}>Show Details</Link>
                        </button>

                        <p className='font-medium text-[17px] text-blue-600 mt-2'>HCSF</p>
                        <p className='text-gray-400 mt-3'>HCSF is student forum website of Chittagong University with user and admin dashboard.
                            The main features are managing blood, tution and blog post
                        </p>

                        <div className='flex gap-x-5 mt-5'>
                            <FaReact className='text-blue-500 text-[22px]'></FaReact>
                            <SiTailwindcss className='text-cyan-400 text-[24px]'></SiTailwindcss>
                            <SiExpress className='text-green-700 text-[24px]'></SiExpress>
                            <SiMongodb className='text-green-800 text-[24px]'></SiMongodb>
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