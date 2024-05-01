import React from 'react'
import './featured.css';
import banner from "../../images/banner.jpeg"

const Featured = () => {
  return (
    <div >
      <div className="img_cont card mt-2  text-center text-white" style={{border:'none',}}>
        <img className='imgman'  src={banner}  alt="..."/>
          <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center">
            <h1 className="card-title fw-bold" style={{fontSize:"6vw"}}>Blog Ideas</h1>
            <p className="card-title" style={{fontSize:"3vw"}}>Discover new stories and creative ideas.</p>
          </div>
      </div>
    </div>
  )
}

export default Featured