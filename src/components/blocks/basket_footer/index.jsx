import style from './basket_footer.module.css'

let price = 1110;
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