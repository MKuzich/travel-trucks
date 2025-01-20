import css from "./VehicleDetails.module.css";

const attrs = ["length", "width", "height", "tank"];

const VehicleDetails = ({ data }) => {
  const splitValue = (value) => {
    return value.replace(/(\d+\.?\d*)([a-zA-Z]+)/g, "$1 $2");
  };
  return (
    <>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.attr}>Form</span>
          <span className={css.attr}>{data.form}</span>
        </li>
        {attrs.map((attr) => (
          <li key={attr} className={css.item}>
            <span className={css.attr}>{attr}</span>
            <span className={css.value}>{splitValue(data[attr])}</span>
          </li>
        ))}
        <li className={css.item}>
          <span className={css.attr}>Consumption</span>
          <span className={css.value}>{data.consumption}</span>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
