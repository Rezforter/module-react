import ProductsHeader from "../../components/blocks/products-header";
import ProductsMain from "../../components/blocks/products-main";
import { activeUserDataKey } from "../authRegForm";
import NotAuth from "../NotAuth";

function Products () {
  if(localStorage.getItem(activeUserDataKey)) {
    return (
      <div className="page">
        <ProductsHeader />
        <ProductsMain />
      </div>
    )
  }
  return (
    <NotAuth />
  )

}

export default Products;