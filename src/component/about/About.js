

import React from 'react';
import './about.css';
import bg from '../assets/broT.png';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';
import {RadioButton } from 'phosphor-react';
import Skills from '../skills/Skills';
import Footer from '../footer/Footer';
import Clients from '../clients/Clients';

const AboutPage = () => {
  return (
    <div>

      <Navbar/>
      
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className='introName'>Giddy</span><br />Website Desinger,</span>
          <p id='introPara'>I am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
          <Link to='/contact'><button className='btn'><RadioButton></RadioButton><img src='' alt=''/>Hire me</button></Link>
      </div>
      <img src={bg} alt='profile'className='bg'/>
      
      </section>
      <Skills />
       <Clients/> 
      <Footer/>
    </div>
  );
};

export default AboutPage;