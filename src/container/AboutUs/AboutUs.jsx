import React from "react";
import "./AboutUs.css";
import images from "../../assets";

export const AboutUs = () => {
  return (
    <div className="app__aboutUs app__wrapper section-padding" id="about">
      <div className="app__wrapper_info">
        <h1 className="app__subheader"> about us</h1>
        <p className="app__subheader-p">
          Welcome to our app, where we believe in the power of compassion and
          generosity to transform lives. Our mission is to showcase a diverse
          range of charities, providing a platform for you to discover and
          support causes that resonate with your values. With a user-friendly
          interface and compelling content, we aim to inspire and educate,
          highlighting the incredible work being done by charitable
          organizations worldwide. By connecting you directly to these
          initiatives, we strive to create a global community of giving, where
          every donation, no matter how small, can make a meaningful impact.
          Join us in making a difference, one donation at a time. Together, we
          can change the world.
        </p>
      </div>
      <div className="app__wrapper_img">
        <img src={images.aboutUs} alt="aboutUs"/>
      </div>
    </div>
  );
};
