import React from "react";
import "./Services.css";
import images from "../../assets";

export const Services = () => {
  return (
    <div className="app__services section-padding" id="services">
      <h1 className="app__subheader">our services</h1>
      <div className="app__services-boxes">
        <div className="app__services_box">
          <div className="app__services_box-icon">
            <img src={images.service1} alt="service1" />
          </div>
          <div className="app__services_box-info">
            <h2 className="box__header">Explore Charities</h2>
            <p className="box__info">
              Discover and explore a wide range of charitable associations,
              their missions, and impactful projects, inspiring you to support
              causes that align with your passion and values.
            </p>
          </div>
        </div>
        <div className="app__services_box">
          <div className="app__services_box-icon">
            <img src={images.service2} alt="service2" />
          </div>
          <div className="app__services_box-info">
            <h2 className="box__header">Learn About Services</h2>
            <p className="box__info">
              Dive deeper into the services offered by charitable associations,
              gaining insights into their programs, initiatives, and the
              positive impact they create in communities around the world.
            </p>
          </div>
        </div>
        <div className="app__services_box">
          <div className="app__services_box-icon">
            <img src={images.service3} alt="service3" />
          </div>
          <div className="app__services_box-info">
            <h2 className="box__header">Stay Informed</h2>
            <p className="box__info">
              Receive timely notices directly from charitable associations,
              staying connected with their latest campaigns, urgent needs, and
              opportunities to make a difference through donations and
              volunteering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
