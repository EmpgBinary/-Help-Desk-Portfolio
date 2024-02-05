
import React, { useRef, useState } from 'react';
import Navbar from "../navbar/Navbar";
import "./contact.css";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import Footer from '../footer/Footer';
// import emailjs from '@emailjs/browser';
// import nodemailer from 'nodemailer';

const Contact = () => {
  const form = useRef();
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const msg = {
      name, email, message
    }


    fetch('http://localhost:8080/new-message', {
      method: 'POST',
      contentType: 'application/json',
      body: msg
    }).then((res)=>{console.log(res, msg)}).catch((err)=>{console.log(err) })
    // emailjs.sendForm('service_q1bjv14', 'template_w0qpr3i', form.current, 'WMKcLH-LCCQk4LGAdB5GK')
    //   .then((result) => {
    //     console.log(result.text);
    //     e.target.reset();
    //     setIsEmailSent(true);
    //   })
    //   .catch((error) => {
    //     console.log(error.text);
    //   });

//      const transporter = nodemailer.createTransport({
// service: 'gmail',
//   auth: {
//     user: 'ezekielugweje3@gmail.com',
//     pass: 'Peculiar1'
//   }
// });
// const mailOptions = {
//   from: 'ezekielugweje3@gmail.com',
//   to: 'damisco005@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


      e.target.reset()
  };

  return (
    <div>
      <Navbar />
      <div className='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1> 
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}> 
          <input type='text' className='name' placeholder='Your Name' name='your_name' value={ name} onChange={(e)=> setName(e.target.value)} />
          <input type='email' className='email' placeholder='Your Email' name='your_email' value={ email} onChange={(e)=> setEmail(e.target.value)}/>
          <textarea className='msg' name='message' rows='5' placeholder='Your Message' value={ message} onChange={(e)=> setMessage(e.target.value)}></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          {isEmailSent && <p className='successMessage'>Email Sent!</p>}
          <div className='links'>
            <a href='https://www.instagram.com/empg_binary/'><InstagramLogo /></a>
            <a href='https://www.facebook.com/ezekiel-nkemakolam/'><FacebookLogo /></a>
            <a href='https://www.linkedin.com/in/ezekiel-ugweje-letsconnect/'><LinkedinLogo /></a>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
