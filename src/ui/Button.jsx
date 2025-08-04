import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "rounded-full border bg-yellow-400  text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300  focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3 ",


    round: base + " py-1 px-2.5 md:py-2 md:px-3.5 text-sm",


    small: base + " py-2 px-4 md:py-2.5 md:px-5 text-xs",
    secoundary:
      "rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 text-sm ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
