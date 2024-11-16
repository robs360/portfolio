import { Typewriter } from 'react-simple-typewriter';
import bg from './assets/images/banner2.jpg'
import c from './assets/images/c.png'
import express from './assets/images/express.png'
import mongo from './assets/images/mongo.png'
import c_plus from './assets/images/c++.png'
import react from './assets/images/react.png'
import typeS from './assets/images/ts2.png'
import port1 from './assets/images/port2.jpg'
import img from './assets/images/port.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCss3, FaFacebook, FaHtml5, FaJsSquare, FaReact, FaServer, FaUser } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import ts from './assets/images/ts.png'
import project1 from './assets/images/project_image1.png'
import project2 from './assets/images/project_image2.png'
import project3 from './assets/images/project_image3.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import tailwind from './assets/images/tailwind2.svg'
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
    return (
        <div>
            <div className="w-[98%] mx-auto min-h-[90vh] mt-1 rounded-md" style={bannerStyle}>
              
                
               <div className=''>
                    <div className='w-full h-[100px] md:h-[200px] flex
              items-end justify-center text-white'>
                        <h1 className='text-4xl 
                   font-medium '>Hi I AM SHAHADAT</h1>

                    </div>
                    <div className='App w-[340px] mx-auto '>
                        <h1 className="text-white text-3xl text-center font-semibold mt-8">
                            Life is simple <br /> {' '}
                            <span className='' style={{ color: 'text-blue-400', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Salah', 'Eat', 'code', 'Repeat', 'Sleep']}
                                    loop={true}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                // onLoopDone={handleDone}
                                // onType={handleType}
                                />
                            </span>
                        </h1>
                    </div>
                </div>
               
                <h1 style={{ color: 'white' }} className='text-3xl font-medium
             text-center mt-6 md:mt-14 mb-6'>
                    My Favourite Language and Framework</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-[90%] mx-auto p-2 py-4'>
                    <div className='w-[300px] mx-auto h-[200px] p-[6px]
                 bg-white shadow-xl rounded-md'>
                        <img src={ts} className='w-[48px] h-[45px] mx-auto my-2' alt="" srcset="" />
                        <p className='text-center font-medium text-[15px]'> TypeScript is a powerful, strongly typed superset of JavaScript that compiles to plain JavaScript. It brings static typing to JavaScript, which helps developers catch potential errors early, improving code reliability and maintainability.
                        </p>
                    </div>
                    <div className='w-[295px] mx-auto h-[200px]
                 bg-white shadow-xl rounded-md p-[6px]'>
                        <img src={c} className='w-[48px] h-[45px] mx-auto my-1' alt="" srcset="" />
                        <p className='text-center font-medium text-[15px]'> I have
                            start my programming life with c. But many thing in c are rigorous or
                            harsh for me because there are no built in library like STL.
                            And was involved in compititive programming with c++.
                        </p>
                    </div>

                    <div className='w-[295px] mx-auto h-[200px] p-[6px]
                 bg-white shadow-xl rounded-md'>
                        <img src={react} className='w-[48px] h-[45px] mx-auto my-2' alt="" srcset="" />
                        <p className='text-center font-medium text-[15px]'> I have start react
                            only 6 month ago.But it have place in my favourite js library.
                            i was done 4 project with react.With React design made very easy for me
                            But i have gain more knowledge of react
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-medium text-center my-20 text-white'>About Me And My Skills</h1>

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
                            <FaReact className='mx-auto text-4xl text-cyan-300'></FaReact>
                            <img src={typeS} className='mx-auto w-[40px] h-[40px]' alt="" srcset="" />
                            <FaJsSquare className='mx-auto text-4xl text-cyan-300'></FaJsSquare>
                            <img src={tailwind} className='mx-auto w-[40px] h-[40px]' alt="" srcset="" />
                            <FaCss3 className='mx-auto text-4xl text-cyan-300'></FaCss3>
                            <FaHtml5 className='mx-auto text-4xl text-orange-300'></FaHtml5>

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
                <h1 style={{ color: 'white' }} className='text-4xl text-center mt-12 mb-12 font-medium'>Some Picture of my Project</h1>
                <div className='flex justify-evenly flex-wrap gap-5'>
                    <div className="relative w-[360px] md:w-[390px] bg-black p-5 rounded-lg shadow-md group overflow-hidden">

                        <img
                            src={project3}
                            className="w-full h-[280px] object-cover"
                            alt="Project"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                        <button className="absolute h-[40px] bg-cyan-300 font-medium p-2 rounded-md opacity-0 left-[35%] -bottom-6 transition-all duration-600 group-hover:opacity-100 group-hover:bottom-[45%]">
                            Show Details
                        </button>
                        <p className='mt-2 text-white font-medium'>Project Name: LifeLine (Team Project)</p>
                    </div>

                    <div className="relative w-[360px] md:w-[390px] bg-black p-5 rounded-lg shadow-md group overflow-hidden">

                        <img
                            src={project2}
                            className="w-full h-[280px]"
                            alt="Project"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                        <button className="absolute h-[40px] bg-cyan-300 font-medium p-2 rounded-md opacity-0 left-[35%] -bottom-6 transition-all duration-600 group-hover:opacity-100 group-hover:bottom-[45%]">
                            Show Details
                        </button>

                        <p className='font-medium text-white mt-2'>Project Name: CatroForum</p>

                    </div>
                    <div className="relative w-[360px] md:w-[390px] bg-black p-5 rounded-lg shadow-md group overflow-hidden">

                        <img
                            src={project1}
                            className="w-full h-[280px] object-cover"
                            alt="Project"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>


                        <button className="absolute h-[40px] bg-cyan-300 font-medium p-2 rounded-md opacity-0 left-[35%] -bottom-6 transition-all duration-600 group-hover:opacity-100 group-hover:bottom-[45%]">
                            Show Details
                        </button>
                        <p className='mt-2 text-white font-medium'>Project Name: Job Hunting</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-3xl font-medium text-white text-center my-16'>
                    Contact Or Connect With Me</h1>

                <div className='w-[95%] p-2 py-4 mb-8 mx-auto border-2
              rounded-md flex items-center
              justify-center md:flex-row flex-col gap-4'>
                    <div>
                        <img src={port1} className='w-[200px] h-[280px] rounded-[50%]' alt="" srcset="" />
                    </div>
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