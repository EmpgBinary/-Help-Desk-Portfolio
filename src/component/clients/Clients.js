import React from 'react';
import './clients.css';
import Walmart from '../../component/assets/walmart.png'
import Facebook from '../../component/assets/facebook.png'
import Adobe from '../../component/assets/adobe.png'
import Microsoft from '../../component/assets/microsoft.png'

const Clients = () => {
  return (
      <section id='contactPage'>
          <div id='clients'>
              <h1 className='contactPageTitle'>My Clients</h1>
              <p className='clientDesc'>
                  I have had the oppurtinity to work with a diverse group of companies.
                  Some of the noatable companies I have worked with includes
              </p>
              <div className='clientImgs'>
                  <img src={Walmart} alt='Client' className='clientImg'/>
                  <img src={Microsoft} alt='Client' className='clientImg'/>
                  <img src={Adobe} alt='Client' className='clientImg'/>
                  <img src={Facebook} alt='Client' className='clientImg'/>
              </div>
        </div>
    </section>
  )
}

export default Clients