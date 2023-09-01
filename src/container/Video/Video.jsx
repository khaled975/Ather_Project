import React, { useState } from "react";
import "./Video.css";
import images from "../../assets";
import YoutubeModal from "../../component/YoutubeModal/YoutubeModal";

export const Video = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal =()=>{
    setModalIsOpen(true)
  }
  const closeModal =()=>{
    setModalIsOpen(false)
  }
  return (
    <div className="app__video app__wrapper section-padding" id="video">
      <div className="app__wrapper_info">
        <h1 className="app__subheader"> Introductory video</h1>
        <p className="app__subheader-p">
          This app is a platform for showcasing charities and making it easy for
          people to donate. We believe that everyone has the power to make a
          difference, and we want to make it as simple as possible for people to
          support the causes they care about.
        </p>
      </div>
      <div className="app__wrapper_img icon__image-container">
        <img src={images.video} alt="video" />
        <div className="icon__image">
          <button onClick={openModal} style={{border:"none",backgroundColor:"transparent"}}>
          <img src={images.play} alt="play_image" />
          </button>
          <YoutubeModal isOpen={modalIsOpen} onClose={closeModal}/>
        </div>
      </div>
    </div>
  );
};
