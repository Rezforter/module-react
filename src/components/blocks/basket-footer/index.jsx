import { BasketProducts } from '../basket-main/basket-product';
import style from './basket-footer.module.css'

let price = BasketProducts.reduce((acc, item) => {
  return acc + item.price;
}, 0);
function BasketFooter() {
  return (
  <footer className={style['basket__footer']}>
    <div className={style['basket__container']}>
      <p className={style['basket__order-price']}>
        Заказ на сумму: <span>{price} ₽</span>
      </p>
      <button className={style['basket__button']}>
        Оформить заказ
      </button>
    </div>
  </footer>
  )
}

export default BasketFooter;