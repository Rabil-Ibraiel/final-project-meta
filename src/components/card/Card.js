import React from 'react'
import "./Card.css"

const Card = ({title, desc, price, img}) => {
  return (
    <div id='card'>
        <div className='card-img-container'>
            <img loading="lazy" className='card-img' src={img} alt='food'/>
        </div>

        <div className='card-text-container'>
          <div className='card-title-container'>
            <h2 className='card-title'>{title}</h2>
            <span className='card-price'>${price}</span>
          </div>
          <p className='card-desc'>{desc}</p>
          <div>
            <p className='card-order-del'>Order a delivery</p>
            <span>🚴</span>
          </div>
        </div>
    </div>
  )
}

export default Card