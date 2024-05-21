import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css';
import snapImage from './snap.png';
import roseHack from './rose_hack_logo.jpeg';
import bearHack from './original.png';

export const Projects = () => {
  return (
    <div className='main-content'>
        <p className='title'> Projects</p>
        <div className='cards'>
            <div className='card1'>
      <Card className="card" style={{ width: '18rem' }}>
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
      <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={snapImage}  />
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
      <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={snapImage}  />
      <Card.Body>
        <Card.Title><strong>Medisearch</strong></Card.Title>
        <Card.Text>
          Track Your Fitness
        </Card.Text>
        <a href='https://medisearchapp.vercel.app/' target="_blank" rel="noopener noreferrer"><Button className="button1" variant="primary">Source Code</Button></a>
      </Card.Body>
    </Card>
            </div>
           
        </div>
        <p className='title2'> UCR Hackathons</p>
        <div className='hackathon'>
        <Card.Img className='rose' variant="top" src={roseHack} style={{ width: '100px', height: '100px' }} />
        <Card.Img className='bear' variant="top" src={bearHack} style={{ width: '100px', height: '100px' }} />
        </div>
    </div>
  )
}

export default Projects;
