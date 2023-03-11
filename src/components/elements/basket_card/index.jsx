import './basket-card.css'

let price = 2000;

function Basket_card({id, url, title, price}) {
  console.log();
  return (
    <div className='basket__product'>
      <div className='basket__meal-name'>
        <div className='basket__product-img'>
          <img src={url} width='122px' alt="product" />
        </div>
        <p className='basket__description'>
          {title}
        </p>
      </div>
      <div className='basket__leftbar'>
        <div className='basket__price'>
          {price} ₽
        </div>
        <div className='basket__xmark'>
          <img src="./img/xMark.svg" alt="xmark" />
        </div>
      </div>
    </div>
  )
}

export default Basket_card;