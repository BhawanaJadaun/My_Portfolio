import React from 'react';
import './portfolio.css';
import freshmeal from '../../assets/freshm.png';
import { GoArrowUpRight } from "react-icons/go";
import Edustify from '../../assets/Edustify.png';
import hotstar from '../../assets/hotstar.jpeg';
import youtube_clone from '../../assets/youtube.jpeg';

const portfolio = () => {
  return (
    <>
      <div className='portfolio-heading'>
        <h2>~ PROJECTS</h2>
        <h1> <span>Recent</span> Completed works</h1>
      </div>
      <div className='portfolio-main'>
        <div className='portfolio-container'>
          <div className='portfolio-img'>
            <img src={freshmeal} alt="FreshMeal"/>
          </div>
          <div className='text'>
            <h1>FreshMeal Website <a href='https://github.com/BhawanaJadaun/FreshmealWebsite'>code</a></h1>
            <p>Collection of movies, personalized user watchlists, and an innovative OpenAI-powered search feature. Enjoy trailer playback and secure user authentication</p>
            <div className='icon'>
            <h4>View Project</h4>
           <a href='https://freshmealswebsite.netlify.app' ><GoArrowUpRight /></a>
            </div>
          </div>
        </div>
        <div className='portfolio-container'>
          <div className='portfolio-img'>
            <img src={Edustify} alt="Edustify"/>
          </div>
          <div className='text'>
            <h1>Edustify Website <a href='https://github.com/BhawanaJadaun/Edustify'>code</a></h1>
            <p>Education platform with a wide range of courses, personalized learning paths, and secure user authentication with a wide range of courses for students Edustudy is an e-learning platform where we provide live online interactive classes to the students of grade </p>
            <div className='icon'>
            <h4>View Project</h4>
            <a href='https://edustify.netlify.app' ><GoArrowUpRight /></a>
            </div>
          </div>
        </div>
       {/* Homyz */}
        <div className='portfolio-container'>
          <div className='portfolio-img'>
            <img src={homyz} alt="Homyz"/>
          </div>
          <div className='text'>
            <h1>Homyz website <a href='https://github.com/BhawanaJadaun/Homyz'>code</a></h1>
            <p>Homyz Real Estate template is also built with Webflow, a powerful web design platform. Easily create a professional-looking website without any coding knowledge.</p>
            <div className='icon'>
              <h4>View Project</h4>
              <a href='https://homyzweb.netlify.app'><GoArrowUpRight /></a>
            </div>
          </div>
        </div>
        <div className='portfolio-container'>
          <div className='portfolio-img'>
            <img src={youtube_clone} alt="Youtube Clone"/>
          </div>
          <div className='text'>
            <h1>Youtube Clone <a href=''>code</a></h1>
            <p>Streaming platform clone with live TV, movies, and sports content. Secure user authentication and personalized recommendations</p>
            <div className='icon'>
              <h4>View Project</h4>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default portfolio;
