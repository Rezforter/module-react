import BasketHeader from "../../components/blocks/basket-header";
import BasketMain from "../../components/blocks/basket-main";
import BasketFooter from "../../components/blocks/basket-footer";

function Basket() {
  return (
    <div className="basket">
      <BasketHeader />
      <BasketMain />
      <BasketFooter />
    </div>
  )
}

export default Basket;