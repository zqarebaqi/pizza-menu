import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
const Header = () => {
  return (
    <header className="flex flex-col  items-center justify-between border-b border-stone-500 bg-yellow-400 px-4 py-6 uppercase md:flex-row">
      <Link to="/" className="mb-4 md:mb-0">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;


