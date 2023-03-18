import './card.css' // импортирую css по разному для практики

import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';


function Card({id, url, title, description, price, weight}) {

  const dispatch = useDispatch()

  const addProduct = (elem) => {
    elem.stopPropagation()
    const item = {
      id: id,
      idx: uuid(),
      title: title,
      url: url,
      price: price
    }
    dispatch(addProductsBasket(item))
  }

  const linkProductDescription = () => {
    console.log('12321');
  } 

	return (
		<div className="card" onClick={linkProductDescription}>
      <div className="card__main">
        <img className='card__picture' src={url} alt="picture" />
        <h1 className="card__title">{title}</h1>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__bottom">
        <p className="card__price-weight">
        {price.toLocaleString()} ₽ <span>/ {weight} г.</span>
        </p>
        <img className='card__add' src="./img/plus.svg" alt="plus" onClick={addProduct} />
      </div>
    </div>
  )
}

export default Card;