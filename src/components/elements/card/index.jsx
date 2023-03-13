import './card.css' // импортирую css по разному для практики

function Card({id, url, title, description, price, weight, changeState}) {

  const handleClick = () => {
    changeState(price);
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
        {price} ₽ <span>/ {weight} г.</span>
        </p>
        <img className='card__add' src="./img/plus.svg" alt="plus" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Card;