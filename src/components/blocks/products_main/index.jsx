/* import Card from './components/elements/card' */
import Card from '../../elements/card'
import style from './products.module.css'
import { products } from './products.js';

function Products() {
  return (
    <main className={style['main']}>
      <div className={style['container']}>
        {products.map(item => {
          return (
            <Card 
              key={item.id}
              url={item.url}
              title={item.title}
              description={item.description}
              price={item.price}
              weight={item.weight}
            />
          )
        })}
      </div>
    </main>
  )
}

export default Products;