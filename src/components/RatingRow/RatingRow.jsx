import css from "./RatingRow.module.css";
import Icon from "../Icon/Icon";

const RatingRow = ({ rating, reviews, location }) => {
  return (
    <div className={css.row}>
      <Icon name="star" className={`${css.ratingIcon} ${css.star}`} />
      <span className={css.reviews}>{`${rating} (${reviews} Review${
        reviews === 1 ? "" : "s"
      })`}</span>

      <Icon name="map" className={css.ratingIcon} />
      <span>{location}</span>
    </div>
  );
};

export default RatingRow;
