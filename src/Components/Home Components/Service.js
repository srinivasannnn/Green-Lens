import React from 'react'
import c1 from '../Assets/c1.jpg'
import c2 from '../Assets/c2.jpg'
import c3 from '../Assets/c3.jpg'
import c4 from '../Assets/c4.jpg'
import c5 from '../Assets/c5.jpg'
import c6 from '../Assets/c6.jpg'


export default function Service() {
  return (
    <div className='service'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={c1} className="d-block w-100 c-img" alt="" />
          </div>
          <div className="carousel-item c-item">
            <img src={c2} className="d-block w-100 c-img" alt="" />
          </div>
          <div className="carousel-item c-item">
            <img src={c3} className="d-block w-100 c-img" alt="" />
          </div>
          <div className="carousel-item c-item">
            <img src={c4} className="d-block w-100 c-img" alt="" />
          </div>
          <div className="carousel-item c-item">
            <img src={c5} className="d-block w-100 c-img" alt="" />
          </div>
          <div className="carousel-item c-item">
            <img src={c6} className="d-block w-100 c-img" alt="" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>

      <div className="s-head">
        <span className='service-head'>AGRO SERVICE</span>
        <span className='service-head h2'>GREEN LENS</span>
      </div>
    </div>
  )
}
