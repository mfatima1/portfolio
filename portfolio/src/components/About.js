import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";

import { easeQuadInOut } from "d3-ease";
import "./About.css";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;


const Box1 = styled.div`
    animation: 1s ${fadeInLeftAnimation};
`;

const Box2 = styled.div`
    animation: 1s ${fadeInRightAnimation};
`;

export const About = () => {

      return (
        <div className='section2'>
            <h2>Education</h2>
            <div className='ed-contain'>
                <Box1 className='box1'>
                <strong><p>University of California, Riverside</p></strong>  
                    <p>Bachelors in Computer Science with Business Applications</p>
                    <p>September 2022 - June 2024</p>
                    <p>GPA: 3.8</p>
                </Box1>
                <Box2 className='box2'>
                <strong><p>Riverside City College</p></strong> 
                    <p>Associates in Computer Science</p>
                    <p>August 2019 - June 2022</p>
                    <p>GPA: 3.8</p>
                </Box2>
            </div>
       
                <div className='progress'>
                    <div className='progress-bar'>
    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={90}
        duration={0.6}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" ,  textColor: "#191970",
              backgroundColor: "#2f003d",
              pathColor: "#191970",
              trailColor: "white"})}
            />
          );
        }}
      </AnimatedProgressProvider>
      <p>Web Development</p>
                    </div>
                    
                    <div className='progress-bar'>
                    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={80}
        duration={0.6}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" ,  textColor: "#191970",
              backgroundColor: "#2f003d",
              pathColor: "#191970",
              trailColor: "white"})}
            />
          );
        }}
      </AnimatedProgressProvider>
                         <p>UI/UX</p>
                    </div>
                    <div className='progress-bar'>
                    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={70}
        duration={0.6}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              styles={buildStyles({ pathTransition: "none" ,  textColor: "#191970",
              backgroundColor: "#2f003d",
              pathColor: "#191970",
              trailColor: "white"})}
            />
          );
        }}
      </AnimatedProgressProvider>
                        <p>Database Management</p>
                    </div>
                
                </div>
           
        </div>
    );
};