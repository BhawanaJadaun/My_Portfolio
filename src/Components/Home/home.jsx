import React from 'react';
import './home.css';
import homeImage from '../../assets/MY.png';
import backgroundVideo from '../../assets/bg.mp4';
import hand_icon from '../../assets/hand.png'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
const Home = () => {
 
  return (
    <div className="home">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <div className="left">
          <div className="text">
            <h3>Hey <img src = {hand_icon} className='hand_icon'/> I 'm</h3>
            <h1>Bhawana <span className='text-cyan-600 py-10'>T</span>hakur</h1>
          
      <h2>
     

<Typewriter
  words={['MERN Stack Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer']}
  loop={0}  // 0 means infinite loop
  cursor
  cursorStyle='|'
  typeSpeed={100}  // Slower typing speed
  deleteSpeed={80}  // Slower deleting speed
  delaySpeed={1500}  // Delay before typing starts
/>

      </h2>
   
            <p>A <span className='text-cyan-600'>Frontend Developer</span> passionate about
             creating interactive applications and experiences on the web.</p>
           
             <Link to ='/about'><button className ='about-btn'>About me</button></Link>
             <Link to ='/portfolio'><button className ='work-btn'>My Works</button></Link>
           
          </div>
        </div>
        <div className="right">
          <img src={homeImage} alt="Bhawana Thakur" className="right-img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
