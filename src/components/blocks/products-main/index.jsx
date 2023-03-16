/* import Card from './components/elements/card' */
import { useSelector } from 'react-redux';
import Card from '../../elements/card'
import style from './products.module.css'
/* import { products } from './products.js'; */


function ProductsMain({handleState}) {

  const products = useSelector(state => state.products.products)
  
  const changeState = (price) => {
    handleState(prevcount => prevcount + 1, prevprice => prevprice + price);
  }


  return (
    <main className={style['main']}>
      <div className={style['container']}>
        {products.map(item => {
          return (
            <Card 
              key={item.id}
              id={item.id}
              url={item.url}
              title={item.title}
              description={item.description}
              price={item.price}
              weight={item.weight}
              changeState={changeState}
            />
          )
        })}
      </div>
    </main>
  )
}

export default ProductsMain;