import React from "react";
import Modal from "react-modal";
import './YoutubeModal.css'
import { AiFillCloseCircle } from "react-icons/ai";

const YoutubeModal = ({ isOpen, onClose }) => {
  return (
    <Modal
    style={{
      overlay:{
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor:"rgb(0 0 0 / 85%)",
        zIndex:99,
      },
      content:{
        position:"relative",
        zIndex:100,
      }
    }}
    className="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="YouTube Video"
    >
      {/* Embed the YouTube video iframe here */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xa2iafnxi9U?si=QJDeK6oU6CGeuFfH?rel=0&showinfo=0&autohide=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <AiFillCloseCircle  size={50} color="var(--main-color)" className="modal-close" onClick={onClose}/>
    </Modal>
  );
};

export default YoutubeModal;
