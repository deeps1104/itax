import React from 'react'
import './Header.css'
import listIcon from '../assets/images/listIcon.svg'
const Header = () => {
  return (
    <div className='headsec'>
    <div className='headingcontent'>
        <h1>Claim 100% tax <br/> credits, everytime</h1>
        <ul>
            <li><img src={listIcon} alt="listicon" width={25} height={25}/> 2-7% tax savings with smart reconciliation and reports</li>
            <li><img src={listIcon} alt="listicon" width={25} height={25}/> G1 to G9C, all returns made at least 3x faster</li>
            <li><img src={listIcon} alt="listicon" width={25} height={25}/> 100% accurate, designed by 60+ inhouse tax experts</li>

        </ul>
        <button className='btn1' >Start free trial</button>
        <button className='btn2'>Request a demo</button>
    </div>
    </div>
  )
}

export default Header