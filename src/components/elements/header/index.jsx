import style from './header.module.css'
import { cardAdd } from '../card';

let productCount = 3;
let productPrice = 3500;


function Header() {
  return (
    <header className={style['header']}>
      <div className={style['container']}>
        <h1 className={style['header__title']}>НАША ПРОДУКЦИЯ</h1>
        <div className={style['header__cart']}>
          <div className={style['header__goods']}>
            <p className={style['header__number-of-goods']}>
              {productCount} товара
            </p>
            <p className={style['header__price']}>
              на сумму {productPrice} ₽
            </p>
          </div>

          <div className={style['header__img']}>
            <img src="./img/Group 71.svg" alt="photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;