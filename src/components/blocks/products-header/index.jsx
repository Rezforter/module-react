import { Link } from 'react-router-dom';
import style from './header.module.css';

function ProductsHeader({productCount = 0, productPrice = 0}) {
 
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
          <Link className={style['header__img-container']} to={'/basket'}>
            <img className={style['header__img']} src="./img/Group 71.svg" alt="photo" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default ProductsHeader;