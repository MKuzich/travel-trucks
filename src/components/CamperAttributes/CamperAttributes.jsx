import Icon from "../Icon/Icon";
import css from "./CamperAttributes.module.css";
import attributes from "../../helpers/equipment";

const CamperAttributes = ({ data }) => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Icon name="transmission" className={css.icon} />
        <span className={css.value}>{data.transmission}</span>
      </li>
      <li className={css.item}>
        <Icon name="engine" className={css.icon} />
        <span className={css.value}>{data.engine}</span>
      </li>
      {attributes.map((attribute) =>
        data[attribute] ? (
          <li key={attribute} className={css.item}>
            <Icon name={attribute} className={css.icon} />
            <span className={css.value}>{attribute}</span>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default CamperAttributes;
