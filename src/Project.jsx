
import { useEffect, useState } from "react"
import {  FaHandPointRight } from "react-icons/fa"


const Project = () => {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch('/Blog.json')
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [])
  console.log(info)
  return (
    <div className="mt-3 bg-white">
      {
        info?.map(arr => <div className="mt-4 flex w-full md:w-[96%] mx-auto gap-6
        border-[3px] border-gray-400 p-4 rounded-md flex-col md:flex-row">
          <img src={arr.image} className="w-full h-[320px] md:w-[420px]
                md:h-[340px]" alt="" srcset="" />
          <div>
            <h1 className="text-2xl font-medium my-2">{arr.name}</h1>
            <h1 className="text-[17px] font-sans"><span className="text-xl font-medium">Description: </span>{arr.description}</h1>
            <div className="flex space-x-2 items-center mt-4">
              <FaHandPointRight></FaHandPointRight>
              <a className="font-medium text-[17px]" href={`${arr.liveLink}`} target="_blank" rel="noopener noreferrer">Live Link</a>
            </div>
            {
              arr?.repoLink ? (
                <div className="flex space-x-2 items-center mt-2">
                <FaHandPointRight></FaHandPointRight>
                <a className="font-medium text-[17px]" href={`${arr.repoLink}`} target="_blank" rel="noopener noreferrer">Repository Link</a>
              </div>
                
              ) : (
               
                <></>
              )
            }
               {
              arr?.frontendrepo ? (
                <div className="flex space-x-2 items-center mt-2">
                <FaHandPointRight></FaHandPointRight>
                <a className="font-medium text-[17px]" href={`${arr.frontendrepo}`} target="_blank" rel="noopener noreferrer">Front End Repository</a>
              </div>
                
              ) : (
               
                <></>
              )
            }

{
              arr?.backendrepo ? (
                <div className="flex space-x-2 items-center mt-2">
                <FaHandPointRight></FaHandPointRight>
                <a className="font-medium text-[17px]" href={`${arr.backendrepo}`} target="_blank" rel="noopener noreferrer">Back End Repository</a>
              </div>
                
              ) : (
               
                <></>
              )
            }
          </div>
        </div>)
      }
    </div>
  )
}
export default Project

{/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'orange', color: '#fff' }}
          icon={fa}
        >
          <h3 className="vertical-timeline-element-title">Website Name:TvLearn</h3>
          <a href="https://tvlearn.web.app">Live Site:https://tvlearn.web.app</a> <br />
          <a className="my-2" href="https://github.com/robs360/Tv-learn">Front-end repo:https://github.com/robs360/Tv-learn</a> <br />
          <a href="https://github.com/robs360/Tv-learn-server">Back-end repo:https://github.com/robs360/Tv-learn-server</a> <br />
          <p>
            Creative Design,Responsive and interactive. It's a travell related website.Here
            anyone can add his liked place and select any place and mongodb crud operation.
            I used here react,tailwind,fireabase,react-router-dom and some animation.
           
          </p>
        </VerticalTimelineElement> */}