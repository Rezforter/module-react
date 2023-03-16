import './card.css' // импортирую css по разному для практики

import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { useState } from 'react';


function Card({id, url, title, description, price, weight, changeState}) {

  const dispatch = useDispatch()
  const handleClick = () => {
    changeState(price);
  }

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuid(),
      title: title,
      url: url,
      price: price
    }
    dispatch(addProductsBasket(item))
  }

	return (
		<div className="card">
      <div className="card__main">
        <img className='card__picture' src={url} alt="picture" />
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__bottom">
        <p className="card__price-weight">
        {price.toLocaleString()} ₽ <span>/ {weight} г.</span>
        </p>
        <img className='card__add' src="./img/plus.svg" alt="plus" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Card;