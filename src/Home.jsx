import { Typewriter } from 'react-simple-typewriter';
import bg from './assets/images/bg3.jpg'
import port from './assets/images/port.jpg'
import c from './assets/images/c.png'
import cp from './assets/images/cplus.png'
import react from './assets/images/react.png'
import about from './assets/images/about.jpg'
import port1 from './assets/images/port2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import ts from './assets/images/ts.png'
AOS.init();
const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <div className="w-[96%] mx-auto min-h-[90vh] mt-5 rounded-md" style={bannerStyle}>
                <div className='w-full h-[200px] flex
              items-end justify-center text-white'>
                    <h1 className='text-4xl 
                   font-medium '>Hi I AM SHAHADAT</h1>

                </div>
                <div className='App w-[340px] mx-auto '>
                    <h1 className="text-white text-3xl text-center font-semibold mt-10">
                        Life is simple <br /> {' '}
                        <span className='' style={{ color: 'orange', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Salah', 'Eat', 'code', 'Repeat!', 'Sleep']}
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
                <h1 style={{ color: 'orange' }} className='text-3xl font-medium
             text-center mt-10 mb-6'>
                    My Favourite Language and Framework</h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-[90%] mx-auto p-2 py-4'>
                    <div className='w-[285px] mx-auto h-[200px] p-[6px]
                 bg-white shadow-xl rounded-md opacity-70'>
                        <img src={ts} className='w-[48px] h-[45px] mx-auto my-2' alt="" srcset="" />
                        <p className='text-center font-medium text-[14px]'> TypeScript is a powerful, strongly typed superset of JavaScript that compiles to plain JavaScript. It brings static typing to JavaScript, which helps developers catch potential errors early, improving code reliability and maintainability.
                        </p>
                    </div>
                    <div className='w-[285px] mx-auto h-[200px]
                 bg-white shadow-xl rounded-md p-[6px] opacity-70'>
                        <img src={c} className='w-[48px] h-[45px] mx-auto my-1' alt="" srcset="" />
                        <p className='text-center font-medium text-[14px]'> I have
                            start my programming life with c. But many thing in c are rigorous or
                            harsh for me because there are no built in library like STL.
                            And was involved in compititive programming with c++.
                        </p>
                    </div>

                    <div className='w-[285px] mx-auto h-[200px] p-[6px]
                 bg-white shadow-xl rounded-md opacity-70'>
                        <img src={react} className='w-[48px] h-[45px] mx-auto my-2' alt="" srcset="" />
                        <p className='text-center font-medium text-[14px]'> I have start react
                            only 6 month ago.But it have place in my favourite js library.
                            i was done 4 project with react.With React design made very easy for me
                            But i have gain more knowledge of react
                        </p>
                    </div>
                </div>
            </div>
            <h1 className='text-4xl font-medium text-center my-20 co'>About Me</h1>
            <div className='flex justify-center gap-4 lg:flex-row flex-col items-center'>
                <div data-aos="zoom-in" className='mt-3 w-[360px] md:w-[500px] h-[320px]'>
                    <img src={about} className='w-full h-[300px] rounded-md' alt="" srcset="" />
                </div>
                <div data-aos="zoom-in-up" className='w-[360px] p-2 text-white md:w-[500px]
            border-2 rounded-md'>
                    <p className='text-[15px] font-medium'>
                        I'm Shahadat Hossen Nayem, a 2nd-year
                        CSE student and junior front-end developer
                        with 7 months of experience. My main focus
                        is on JavaScript and React, Type-script, Next.js along with HTML,
                        CSS, and basic MongoDB CRUD. I’m currently
                        working on team project, a hospital management platform
                        for patient, which has given me hands-on
                        experience. I'm eager to learn Next.js,
                        MySQL, and am open to adapting to any tech,
                        with an interest in exploring DevOps as I grow in web development.
                        I aim to bring fresh ideas, collaborate effectively, and contribute
                        meaningfully to innovative projects in the tech industry.
                    </p>
                </div>
            </div>

            <div className='my-10'>
                <h1 style={{ color: 'orange' }} className='text-3xl text-center font-medium'>Some Picture of my Project</h1>
            </div>
            <div>
                <h1 className='text-3xl font-medium co text-center my-16'>
                    Contact Or Connect With Me</h1>

                <div className='w-[95%] p-2 py-4 mb-8 mx-auto border-2
              rounded-md flex items-center
              justify-center md:flex-row flex-col gap-4'>
                    <div>
                        <img src={port1} className='w-[200px] h-[280px] rounded-[50%]' alt="" srcset="" />
                    </div>
                    <div className='w-[98%] md:w-[52%] lg:w-[36%]'>
                        <h1 className='text-center co text-3xl font-medium'>Social Media Link</h1>
                        <div className='w-[300px] mt-5 mx-auto flex justify-evenly'>
                            <a
                                href="https://www.facebook.com/shahadat.hossaen.71?mibextid=ZbWKwL">
                                <FaFacebook className='co text-5xl'></FaFacebook></a>
                            <a href="https://www.linkedin.com/in/shahadat-nayem-6458b4238">
                                <FaLinkedin className='co text-5xl'></FaLinkedin></a>
                        </div>
                        <h1 className='co text-3xl mt-5 text-center'>Contact</h1>
                        <div className='w-[310px] mx-auto'>
                            <h1 className='co mt-2 text-[17px] font-medium text-center'>
                                01842281884 or 01319037012(WhatAapp)</h1>
                            <h1 className='co mt-2 text-[17px] font-medium text-center'>
                                Email:nayemshahadat581@gmail.com</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home