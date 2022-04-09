import React from 'react'
import './Bank.css'
import Side_Logo from '../assets/images/Side_Logo.png'

const Bank = () => {
  return (
    <div className='banksection'>
     <div className='leftSection'>
     <h1>Bank-grade <br/>enterprise security</h1>
    <div className='paraSec'><p>Primarily, we are a GST Suvidha Provider or GSP. We were awarded a GSP license after rigorous scrutiny of our technological and financial capabilities to serve our clients. A GSP connects directly with the GST system via secure GST System APIs. With this, we are able to cater to the needs of the customers much better than a standalone ASP.
  </p>
  <p className='reqbtn'><a href='#'>Request a demo →</a></p>
  </div>
     </div>
     <div className='headLogo'>
       <img src={Side_Logo} alt="headlogo" />
     </div>
    </div>
    
  )
}

export default Bank