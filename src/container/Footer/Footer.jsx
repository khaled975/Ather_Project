import React from 'react'
import "./Footer.css"
import images from '../../assets'
export const Footer = () => {
  return (
    <div className='app__footer' id='footer'>
      <div className="app__footer-copyright">
     <p> Copyright @ATHER2023. All Rights Reserved.</p>
      </div>
      <div className="app__footer-brands">
        <a href="#">
        <img src={images.footer1} alt="footerimages1" />
        </a>
        <a href="#">
        <img src={images.footer2} alt="footerimages2" />
        </a>
        <a href="#">
        <img src={images.footer3} alt="footerimages3" />
        </a>
      </div>
    </div>
  )
}
