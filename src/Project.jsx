import React from "react";
import { FaFacebook, FaHandPointRight } from "react-icons/fa";
import { FaSection } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Project = () => {
  const fa = <FaSection></FaSection>
  return (
    <div className="mt-14">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'orange', color: '#fff' }}
          icon={fa}
        >
          <h3 className="vertical-timeline-element-title font-medium">Website Name: Lifeline (Team Project)</h3>
          <div className="flex space-x-2 items-center">
            <FaHandPointRight></FaHandPointRight>
            <a href="https://hospital-management-4e9fc.web.app" className="">Live Site of Project</a> <br />
          </div>
          <div className="flex space-x-2 items-center">
            <FaHandPointRight></FaHandPointRight>
            <a className="my-2" href="https://github.com/md-nahiduzzaman/lifeline">Repository Link</a> <br />
          </div>

          <p>
            Creative Design, Responsive, and Interactive
            This is a hospital management team project.
            My tasks included developing the admin panel dashboard, implementing the messaging system, and setting up the authentication system. We used TypeScript, though without strict mode, as well as React Router DOM for navigation and MongoDB for CRUD operations.
            Additionally, I incorporated NodeMailer to automate email notifications.


          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'orange', color: '#fff' }}
          icon={fa}
        >
          <h3 className="vertical-timeline-element-title">Website Name:Catro-Forum</h3>
          <div className="flex space-x-2 items-center">
            <FaHandPointRight></FaHandPointRight>
            <a  href="https://cat-website-c0880.web.app">Live Site Of Project</a> <br />
          </div>
          <div className="flex space-x-2 items-center my-2">
            <FaHandPointRight></FaHandPointRight>
            <a  href="https://github.com/robs360/catro-forum">Front-end Repository</a> <br />
          </div>

          <div className="flex space-x-2 items-center">
            <FaHandPointRight></FaHandPointRight>
            <a href="https://github.com/robs360/Catro-forum-server">Back-end Repository</a>
          </div>
          <p>
            Creative Design,Responsive and interactive. It's a Pet adopting site like,
            dog,cat,rabbit and fish. I used here react,tailwind,fireabase,react-router-dom,
            and some animation like react aos.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          iconStyle={{ background: 'orange', color: '#fff' }}
          icon={fa}
        >
          <h3 className="vertical-timeline-element-title">Website Name:Job-hunting</h3>
          <div className="flex space-x-2 items-center">

            <FaHandPointRight></FaHandPointRight>
            <a href="https://job-hunter-3fec4.web.app">Live Site</a>
          </div>
          <div className="flex space-x-2 items-center my-2">
          <FaHandPointRight></FaHandPointRight>
          <a className="my-2" href="https://github.com/robs360/Job-hunting">Front-end Repository</a>
            </div> 
          <div className="flex space-x-2 items-center">
          <FaHandPointRight></FaHandPointRight>
          <a href="https://github.com/robs360/Job-hunting-server">Back-end Repository</a>
          </div>
          <p>
            Creative Design,Responsive and interactive. It's a Job hunting website.Here
            anyone can post job and bid in posted job and mongodb crud operation.
            I used here react,tailwind,fireabase,react-router-dom and some animation

          </p>
        </VerticalTimelineElement>
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
      </VerticalTimeline>
    </div>
  )
}
export default Project