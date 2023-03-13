import { useState } from "react";
import ProductsHeader from "../../components/blocks/products-header";
import ProductsMain from "../../components/blocks/products-main";

function Products () {

  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  const handleSetValue = (count, price) => {
    setProductCount(count)
    setProductPrice(price)
  }

  return (
    <div className="page">
      <ProductsHeader 
        productCount={productCount} 
        productPrice={productPrice} 
      />
      <ProductsMain handleState={handleSetValue}/>
    </div>
  )
}

export default Products;