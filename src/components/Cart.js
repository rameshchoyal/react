import { useDispatch, useSelector } from "react-redux";
import CatogeryItem from "./CatogeryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center  p-4 m-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className=" w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-lg p-1 m-1"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cardItems.length === 0 && (
          <h1>Cart is empty, add items to the card</h1>
        )}
        <CatogeryItem items={cardItems} />
      </div>
    </div>
  );
};
export default Cart;
