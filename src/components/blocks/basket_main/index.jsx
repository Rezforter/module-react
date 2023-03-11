import style from './basket_main.module.css'
import Basket_card from '../../elements/basket_card';
import { basket_products } from './basket_product';

function Basket_main() {
  return (
  <main className={style['basket__main']}>
    <div className={style['basket__container']}>
      {basket_products.map(item => {
          return (
            <Basket_card 
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

export default Basket_main;