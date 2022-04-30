import React from 'react'
import JobCard from './JobCard'
import './Cards.css'

function cards() {
    return (
        <div className='cards'>
            <h1> Check out these jobs!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <JobCard 
                        text1="Front-end Developer"
                        text2="Google"
                        //label="Office"
                        path='/fulltime'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <JobCard 
                        text1="Back-end Developer"
                        text2="Facebook"
                        //label="Office"
                        path='/fulltime'
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default cards
