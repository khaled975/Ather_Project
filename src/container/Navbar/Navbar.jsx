import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css"
import images from "../../assets"
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false)

useEffect(() => {
  let anchors=document.getElementsByClassName("anchor")
  let anchorsArray = Array.from(anchors)
  anchorsArray.map(anchor => {
  anchor.addEventListener("click", (e) =>{
    anchorsArray.map(anchor => {
      anchor.classList.remove("active")
    })
    e.target.classList.add("active")
  })
})
return ()=>{
  anchorsArray.map(anchor => {
    anchor.removeEventListener("click",() =>{})
  })
}
},[])
  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
      <img src={images.athar} alt="athar_image" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__links">
          <a className='anchor' href="#home">Home</a>
        </li>
        <li className="p__links">
          <a className='anchor' href="#about">About Us</a>
        </li>
        <li className="p__links">
          <a className='anchor' href="#services">Services</a>
        </li>
        <li className="p__links">
          <a className='anchor' href="#download">Download</a>
        </li>
        <li className="p__links">
          <a className='anchor' href="#testimonials">Testimonials</a>
        </li>
        <li className="p__links">
          <a className='anchor' href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
          <button className='custom__button'>
            <NavLink  to="/auth/SignIn">Sign in</NavLink>
          </button>
          <div className="dash"></div>
          <NavLink  className="register" to="/auth/Register">Register</NavLink>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="var(--main-color)"
          fontSize={27}
          cursor="pointer"
          onClick={() => setToggleMenu(true)
          }
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              className="overlay__close"
              cursor="pointer"
              onClick={() => 
                setToggleMenu(false)
              }
              fontSize={23}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#about">About Us</a>
              </li>
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#services">Services</a>
              </li>
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#download">Download</a>
              </li>
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="p__opensans" onClick={() => 
                setToggleMenu(false)
              }>
                <a href="#contact">Contact</a>
              </li>
              <div className="app__navbar-smallscreen_links-login">
          <button className='custom__button'>
            <NavLink  to="/auth/SignIn">Sign in</NavLink>
          </button>
          <div className="dash"></div>
          <NavLink  className="register" to="/auth/Register">Register</NavLink>
      </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
