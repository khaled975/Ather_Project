import React from "react";
import "./Header.css";
import images from "../../assets";
import { RiLeafLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";
export const Header = () => {
  return (
    <div className="app__header app__wrapper" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">
          <span className="app__header-h1_f">ATHAR</span>{" "}
          <span className="app__header-h1_s">Charities</span>
        </h1>
        <p className="app__header-p">
          Empowering Hope, Inspiring Change Uniting Charities for a Better World
          Join us in making a difference today!
        </p>
        <div className="app__header-buttons">
          <button className="explore btn">
            <a className="explore-p" href="#about">Explore more</a>
            <RiLeafLine size={22} color="white"/>
            </button>
          <button className="watch btn">
            <a className="watch-a" href="#video">Watch Video</a>
            <AiOutlinePlayCircle size={22} color="var(--main-color)"/>
          </button>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.home} alt="home_image" />
      </div>
    </div>
  );
};
