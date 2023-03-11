import { useState } from "react";
import Header from "../../components/blocks/products_header";
import Products from "../../components/blocks/products_main";

function Pageproducts () {

  const [productCount, setProductCount] = useState(0);
  const [productPrice, setProductPrice] = useState(0);

  const handleSetValue = (count, price) => {
    setProductCount(count)
    setProductPrice(price)
  }

  return (
    <div className="page">
      <Header 
        productCount={productCount} 
        productPrice={productPrice} 
      />
      <Products handleState={handleSetValue}/>
    </div>
  )
}

export default Pageproducts;