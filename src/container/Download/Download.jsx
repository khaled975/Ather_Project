import React from "react";
import "./Download.css";
import images  from "../../assets";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import { Link } from "@mui/material";
export const Download = () => {
  return (
    <div className="app__download app__wrapper section-padding" id="download">
      <div className="app__wrapper_info">
        <h1 className="app__subheader"> Download Application</h1>
        <p className="app__subheader-p">
          Download our app and embark on a journey of compassion and impact.
          With our user-friendly interface, you can easily explore a diverse
          range of charities and their inspiring missions. Discover impactful
          projects, learn about the services they provide, and stay up-to-date
          with their latest campaigns and urgent needs. Our app empowers you to
          make a difference by supporting causes that resonate with your values.
          Whether it's a one-time donation or a recurring contribution, every
          act of generosity counts. Join our community of changemakers and
          together, let's create a brighter future for those in need. Download
          now and start making a positive impact today.
        </p>
        <div className="app__download-btns">
          <Link href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf" target="_blank" className="butn android_btn">
            <p className="android-link pp">
              download now
            </p>
            <AiFillAndroid color="white" size={24}/>
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.kiloo.subwaysurf" target="_blank" className="butn apple_btn">
            <p className="apple-link pp">
              download now
            </p>
            <AiFillApple color="var(--main-color)" size={24}/>
          </Link>
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.download} alt="download" />
      </div>
    </div>
  );
};
