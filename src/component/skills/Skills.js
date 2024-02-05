import React from 'react';
import './skills.css';
import UIDesign from '../assets/p4.jpg'
import UXDesign from '../assets/p2.jpg' 
import AppDesign from '../assets/p1.jpg'


const Skills = () => {
  return (
      <section id='skills'>
          <span className='skillsTitle'> What I Do </span>
          <span className='skillDesc'>I am a skilled and passionate web designer with experience in HTML, CsS, JavaScript, React, Next.js, Node.js, A.I and Robotics as well as design softwares such as Adobe Photoshop and Illustrator </span>
          <div className='skillBars'>
              <div className='skillBar'>
                  <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                  <div className='skillBarText'>
                      <h2 id='design'> UI Design</h2>
                      <p id= 'coding'>Visual Desgin: Take control of your visual aesthetics of your digital product.</p>
                  </div>
              </div>
              <div className='skillBar'>
                  <img src={UXDesign} alt='WebDesign' className='skillBarImg' />
                  <div className='skillBarText'>
                      <h2 id='design'> UX Design</h2>
                      <p id='coding'> Extensive reasearch involving interviews, surveys and studying analytics data.</p>
                  </div>
              </div>
              <div className='skillBar'>
                  <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                  <div className='skillBarText'>
                      <h2 id='designs'> App Design</h2> 
                      <p id='coding'> Coding implementation of features and functionalities.</p>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Skills