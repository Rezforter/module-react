import { useSelector } from 'react-redux';
import style from './basket-footer.module.css'

function OrderCheck(price) {
  if (price > 0) {
    console.log('Заказ оформлен');
  } else {
    console.log('Ошибка');
  }
}

function BasketFooter() {
  
  const productsBasket = useSelector(state => state.products.basketProducts)
  const totalPrice = useSelector(state => state.products.allPriceProductsBasket)

  return (
  <footer className={style['basket__footer']}>
    <div className={style['basket__container']}>
      <p className={style['basket__order-price']}>
        Заказ на сумму: <span>{totalPrice.toLocaleString()} ₽</span>
      </p>
      <button onClick={() => OrderCheck(totalPrice)} className={style['basket__button']}>
        Оформить заказ
      </button>
    </div>
  </footer>
  )
}

export default BasketFooter;