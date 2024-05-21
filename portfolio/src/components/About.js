import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight, bounce } from 'react-animations';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import { FaHtml5 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiVisualstudio } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { DiJsBadge } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";

import "./About.css";

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInRightAnimation = keyframes`${fadeInRight}`;
const bounceAnimation = keyframes`${bounce}`;

const Box1 = styled.div`
    animation: 1s ${fadeInLeftAnimation};
`;

const Box2 = styled.div`
    animation: 1s ${fadeInRightAnimation};
`;
const moveUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-15px);
  }
`;

const moveDown = keyframes`
  0% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.div`
display: inline-block;
transition: transform 0.3s;
animation: ${moveDown} 0.3s forwards;

&:hover {
  animation: ${moveUp} 0.3s forwards;
}

& > svg {
  border-radius: 50%;
  padding: 10px;
  background: linear-gradient(to right, #050525, #2f003d, #0e2954);
}
`;

export const About = () => {

      return (
        <div className='section2'>
            <p className='header1'>Education</p>
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
        <p className='subheading'>Tools/Frameworks/Language</p>
        <div className='icons'>
        <IconWrapper className="html-icon"><FaHtml5 /></IconWrapper>
        <IconWrapper className="css-icon"><DiCss3 /></IconWrapper>
        <IconWrapper className="github-icon"><FaGithub /></IconWrapper>
        <IconWrapper className="figma-icon"><FaFigma /></IconWrapper>
        <IconWrapper className="vscode-icon"><DiVisualstudio /></IconWrapper>
        <IconWrapper className="react-icon"><FaReact /></IconWrapper>
        <IconWrapper className="sql-icon"><TbFileTypeSql /></IconWrapper>
        <IconWrapper className="js-icon"><DiJsBadge /></IconWrapper>
        <IconWrapper className="bootstrap-icon"><DiBootstrap /></IconWrapper>
        </div>
        </div>
    );
};
