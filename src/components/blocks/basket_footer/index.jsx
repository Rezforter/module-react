import { basket_products } from '../basket_main/basket_product';
import style from './basket_footer.module.css'

let price = basket_products.reduce((acc, item) => {
  return acc + item.price;
}, 0);
function Basket_footer() {
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

export default Basket_footer;