import { Link } from 'react-router-dom';
import style from './basket_header.module.css'

function Basket_header() {
  return (
    <header className={style['basket__header']}>
      <div className={style['basket__container']}>
        <Link className={style['basket__back']} to={'/'}>
          <img className={style['basket__back-img']} src="./img/backArrow.svg" alt="" />
        </Link>
        <h1 className={style['basket__title']}>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
      </div>
    </header>
  )

}

export default Basket_header;