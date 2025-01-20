import css from "./Error.module.css";

const Error = ({ message }) => {
  return (
    <div className={css.wrapper}>
      <p className={css.error}>{message}</p>
    </div>
  );
};

export default Error;
