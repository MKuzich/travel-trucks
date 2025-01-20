import css from "./Button.module.css";

const Button = ({ children, handler }) => {
  return (
    <button type="button" className={css.btn} onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
