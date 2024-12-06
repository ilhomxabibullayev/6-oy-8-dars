import React from 'react'
import './Card.css'
import { NavLink } from 'react-router';

const Card = ({product}) => {
  return (
    <div className='container card__container' data-aos='flip-left'>
      <h2>{product.name}</h2>
      <NavLink to={'products-details/' + product.id}>
      <div>
        <img className='image' src={product.image} alt="" />
      </div>
      </NavLink>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Card
