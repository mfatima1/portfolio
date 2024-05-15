import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';
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
    <div>
        <h2>Education</h2>
        <div className='ed-contain'>
            <Box1 className='box1'>
                <p>University of California, Riverside</p>
                <p>Bachelors in Computer Science with Business Applicaitons</p>
                <p>September 2022 - June 2024</p>
                <p>GPA: 3.8</p>
            </Box1>
            <Box2 className='box2'>
                <p>Riverside City College</p>
                <p>Associates in Computer Science</p>
                <p>August 2019 - June 2022</p>
                <p>GPA: 3.8</p>
            </Box2>
        </div>
    </div>
  );
};
