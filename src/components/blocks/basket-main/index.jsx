import style from './basket-main.module.css'
import BasketCard from '../../elements/basket-card';
import { BasketProducts } from './basket-product';

function BasketMain() {
  return (
  <main className={style['basket__main']}>
    <div className={style['basket__container']}>
      {BasketProducts.map(item => {
          return (
            <BasketCard 
              key={item.id}
              url={item.url}
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