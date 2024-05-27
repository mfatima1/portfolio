import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import snapImage from './snapChef.png';
import fitness from './Group_12.png'
import roseHack from './rose_hack_logo.jpeg';
import bearHack from './original.png';
import medi from './medi.png'

export const Projects = () => {
  return (
    <div className='main-content'>
        <p className='title'> Projects</p>
        <div className='cards'>
            <div className='card1'>
      <Card className="card" style={{ width: '19rem' }}>
      <Card.Img variant="top" src={snapImage}  />
      <Card.Body>
        <Card.Title><strong>SnapChef</strong></Card.Title>
        <Card.Text>
        
          Food Social Media App
        </Card.Text>
        <a href='https://snapchef-eight.vercel.app/' target="_blank" rel="noopener noreferrer"> 
        <Button className="button1" variant="primary">Source Code</Button> </a>
      </Card.Body>
    </Card>
            </div>
            <div className='card2'>
      <Card className="card" style={{ width: '19rem' }}>
      <Card.Img variant="top" src={fitness}  />
      <Card.Body>
        <Card.Title><strong>Fitness Tracker</strong></Card.Title>
        <Card.Text>
          Track Your Fitness
        </Card.Text>
        
        <a href='https://github.com/ale18V/Fitcker' target="_blank" rel="noopener noreferrer"> 
        <Button className="button1" variant="primary">Source Code</Button> </a>
      </Card.Body>
    </Card>
            </div>
            <div className='card3'>
      <Card className="card" style={{ width: '19rem', }}>
      <Card.Img variant="top" src={medi} height={'189px'} width={'400px'}/>
      <Card.Body>
        <Card.Title><strong>Medisearch</strong></Card.Title>
        <Card.Text>
          Search for Medication
        </Card.Text>
        <a href='https://medisearchapp.vercel.app/' target="_blank" rel="noopener noreferrer"><Button className="button1" variant="primary">Source Code</Button></a>
      </Card.Body>
    </Card>
            </div>
           
        </div>
        <p className='title2'> UCR Hackathons</p>
        <div className='hackathon'>
        <a href='https://www.rosehack.com/' target="_blank" rel="noopener noreferrer">
          <Card.Img className='rose' variant="top" src={roseHack} style={{ width: '100px', height: '100px' }} />
        </a>
        <a href='https://bearhack.com/' target="_blank" rel="noopener noreferrer">
          <Card.Img className='bear' variant="top" src={bearHack} style={{ width: '100px', height: '100px' }} />
        </a>
        </div>
    </div>
  )
}

export default Projects;
