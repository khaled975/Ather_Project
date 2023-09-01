import React from "react";
import "./Testimonials.css";
import images from "../../assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper/modules";
export const Testimonials = () => {
  
  return (
    <div className="app__testimonials section-padding" id="testimonials">
      <h1 className="app__subheader"> Testimonials</h1>
      <Swiper
        effect={"cube"}
        grabCursor={true} 
        loop={true}
        loopedSlides={true}
        navigation={true} 
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        
          <SwiperSlide>
          <div className="swiper-cube">
              <div className="swiper_image">
                <img src={images.testimonial1} alt="testimonial1" />
              </div>
              <div className="swiper_info">
                <div className="swiper_info-image" >
                <img src={images.quotes} alt="quotes" />
                </div>
                <p className="swiper_info-bio">
                  "Using this app has been a game-changer for me. It's opened my
                  eyes to incredible charities and causes I never knew existed.
                  I feel empowered knowing that my donations are making a
                  tangible impact. The app's user-friendly interface and
                  real-time updates keep me engaged and connected to the causes
                  I care about. Highly recommended for anyone who wants to make
                  a difference!"
                </p>
                <h1 className="swiper_info-title">
                Amr Atef
                </h1>
                <p className="swiper_info-subtitle">
                FrontEnd Developer
                </p>
              </div>
            </div>
          </SwiperSlide>
        
        <SwiperSlide>
        <div className="swiper-cube">
              <div className="swiper_image">
                <img src={images.testimonial2} alt="testimonial2"/>
              </div>
              <div className="swiper_info">
                <div className="swiper_info-image" >
                <img src={images.quotes} alt="quotes" />
                </div>
                <p className="swiper_info-bio">
                  "Using this app has been a game-changer for me. It's opened my
                  eyes to incredible charities and causes I never knew existed.
                  I feel empowered knowing that my donations are making a
                  tangible impact. The app's user-friendly interface and
                  real-time updates keep me engaged and connected to the causes
                  I care about. Highly recommended for anyone who wants to make
                  a difference!"
                </p>
                <h1 className="swiper_info-title">
                Ahmed Elgamal
                </h1>
                <p className="swiper_info-subtitle">
                Business Analyst
                </p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-cube">
              <div className="swiper_image">
                <img src={images.testimonial3} alt="testimonial3" />
              </div>
              <div className="swiper_info">
                <div className="swiper_info-image">
                <img src={images.quotes} alt="quotes" />
                </div>
                <p className="swiper_info-bio">
                  "Using this app has been a game-changer for me. It's opened my
                  eyes to incredible charities and causes I never knew existed.
                  I feel empowered knowing that my donations are making a
                  tangible impact. The app's user-friendly interface and
                  real-time updates keep me engaged and connected to the causes
                  I care about. Highly recommended for anyone who wants to make
                  a difference!"
                </p>
                <h1 className="swiper_info-title">
                Mohamed Elsherif
                </h1>
                <p className="swiper_info-subtitle">
                User Experience Designer
                </p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="swiper-cube">
              <div className="swiper_image">
                <img src={images.testimonial4} alt="testimonial4" />
              </div>
              <div className="swiper_info">
                <div className="swiper_info-image">
                <img src={images.quotes} alt="quotes" />
                </div>
                <p className="swiper_info-bio">
                  "Using this app has been a game-changer for me. It's opened my
                  eyes to incredible charities and causes I never knew existed.
                  I feel empowered knowing that my donations are making a
                  tangible impact. The app's user-friendly interface and
                  real-time updates keep me engaged and connected to the causes
                  I care about. Highly recommended for anyone who wants to make
                  a difference!"
                </p>
                <h1 className="swiper_info-title">
                Mohamed Fouad
                </h1>
                <p className="swiper_info-subtitle">
                Mobile Developer
                </p>
              </div>
            </div>
        </SwiperSlide>


      </Swiper>
    </div>
  );
};
