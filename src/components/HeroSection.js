import React from 'react'
import {Button} from './Button';
import './HeroSection.css';
// import '../App.css';
import Cards from './Cards';

function HeroSection(){
 return(
     <div className='hero-container'>
     <video src="/video/video-2.mp4" autoPlay loop muted />
     <h1>Welcome To My Portfollio</h1>
     <div className="ko">
     <p> I'm a Software Developer who specializes in both Front-end and Back-end Development</p>
     </div>
     <div className="hero-btns"> 
       {/* <Button className="btns" buttonStyle='btn--outline'
       buttonSize='btn--large'>GET STARTED</Button>
        <Button className="btns" buttonStyle='btn--primary'
       buttonSize='btn--large'>WATCH VIDEO <i className='far fa-play-circle' />
       </Button> */}
      
     </div>
       
     </div>

 )



}

export default HeroSection;