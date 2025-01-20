import css from "./Price.module.css";

const Price = ({ price }) => {
  return <span className={css.price}>€{`${price}.00`}</span>;
};

export default Price;
