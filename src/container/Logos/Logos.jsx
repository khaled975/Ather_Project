import React from 'react'
import images from '../../assets'
import './Logos.css'
export const Logos = () => {
  let imageArr=[images.logo1, images.logo2, images.logo3, images.logo4, images.logo5, images.logo6, images.logo7, images.logo8,images.logo1,images.logo2]
  return (
    <div className='app__logos section-padding'>
      {imageArr.map((image,index)=>(
      <div key={index} className="logo-image">
        <img src={image} alt={`logos-${index}`} />
      </div>
      ))}
    </div>
  )
}
