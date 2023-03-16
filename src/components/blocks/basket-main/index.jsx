import style from './basket-main.module.css'
import BasketCard from '../../elements/basket-card/';
import { BasketProducts } from './basket-product';
import { useSelector } from 'react-redux';
import Card from '../../elements/card';


function BasketMain() {
  const productsBasket = useSelector(state => state.products.basketProducts)
  return (
  <main className={style['basket__main']}>
    <div className={style['basket__container']}>
      {BasketProducts.map(item => {
          return (
            <BasketCard 
              key={item.idx}
              id={item.idx}
              urlImg={item.url}
              title={item.title}
              price={item.price}
            />
          )
      })}
    </div>
  </main>
  )
}

export default BasketMain;