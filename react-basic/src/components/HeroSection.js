import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" 
            autoPlay loop muted />
            <h1>LOOKING FOR JOB?</h1>
            <div className='hero-btns'>
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Post a Job
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
