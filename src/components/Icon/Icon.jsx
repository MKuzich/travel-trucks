import sprite from "../../assets/sprite.svg";

const Icon = ({ name, className = "" }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${sprite}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
