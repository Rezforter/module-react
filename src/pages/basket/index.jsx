import Basket_header from "../../components/blocks/basket_header";
import Basket_main from "../../components/blocks/basket_main";
import Basket_footer from "../../components/blocks/basket_footer";

function Basket() {
  return (
    <div className="basket">
      <Basket_header />
      <Basket_main />
      <Basket_footer />
    </div>
  )
}

export default Basket