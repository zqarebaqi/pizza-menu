import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="hidden text-sm font-semibold md:block">
      {username}
    </div>
  );
};

export default Username;
