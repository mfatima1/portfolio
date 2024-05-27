import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { LiaUniversitySolid } from "react-icons/lia";
import { FaChalkboardTeacher } from "react-icons/fa";
import './Experience.css'
export const Experience = () => {
  return (
    <div className='main-container'>
        <p className='title'> Experience</p>
       <div className='timeline'>
       <VerticalTimeline lineColor='white'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid  black' }}
    date="January 2023 - Present"
    iconStyle={{ background: 'linear-gradient(to bottom, #010109, #2f003d, #0E2954)', color: '#fff' }}
    icon={<FaChalkboardTeacher />}
  >
    <h4 className="vertical-timeline-element-title">Coding Instructor</h4>
    <p className="vertical-timeline-element-subtitle">Coding Minds Academy Irvine, CA (Remote)</p>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2021 - June 2022"
    contentStyle={{ background: 'black', color: '#fff' }}
    iconStyle={{ background: 'linear-gradient(to bottom, #010109, #2f003d, #0E2954)', color: '#fff' }}
    icon={<LiaUniversitySolid />}
  >
    <h4 className="vertical-timeline-element-title">Peer Mentor</h4>
    <p className="vertical-timeline-element-subtitle">Riverside City College, CA</p>

  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2021 - June 2022"
    contentStyle={{ background: 'black', color: '#fff' }}
    iconStyle={{ background: 'linear-gradient(to bottom, #010109, #2f003d, #0E2954)', color: '#fff' }}
    icon={<LiaUniversitySolid />}
  >
    <h4 className="vertical-timeline-element-title">Peer Instructor</h4>
    <p className="vertical-timeline-element-subtitle">Riverside City College, CA</p>
   
  </VerticalTimelineElement>
  </VerticalTimeline>
       </div>
    </div>
  )
}

export default  Experience;