import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search for order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full text-sm py-2 px-4 focus:ring-2 focus:ring-yellow-500 focus:outline-none border border-stone-200 "
      />
    </form>
  );
};

export default SearchOrder;
