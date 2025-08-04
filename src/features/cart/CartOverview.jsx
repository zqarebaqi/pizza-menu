import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-stone-200 sticky bottom-0">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{totalCartPrice}$</span>
      </p>
      <Link to="/Cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
