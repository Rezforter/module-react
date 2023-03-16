import { useSelector } from 'react-redux';
import { BasketProducts } from '../basket-main/basket-product';
import style from './basket-footer.module.css'

function BasketFooter() {

  let price = BasketProducts.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  
  const productsBasket = useSelector(state => state.products.basketProducts)
  const totalPrice = useSelector(state => state.products.allPriceProductsBasket)

  return (
  <footer className={style['basket__footer']}>
    <div className={style['basket__container']}>
      <p className={style['basket__order-price']}>
        {/* Заказ на сумму: <span>{totalPrice.toLocaleString()} ₽</span> */}
        Заказ на сумму: <span>{price.toLocaleString()} ₽</span>
      </p>
      <button className={style['basket__button']}>
        Оформить заказ
      </button>
    </div>
  </footer>
  )
}

export default BasketFooter;