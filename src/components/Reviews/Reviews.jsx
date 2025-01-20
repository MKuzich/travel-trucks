import css from "./Reviews.module.css";
import Icon from "../Icon/Icon";

const Reviews = ({ data }) => {
  const getRating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={"star" + i}>
          <Icon
            name="star"
            className={i < rating ? css.starActive : css.star}
          />
        </li>
      );
    }
    return stars;
  };
  return (
    <ul className={css.list}>
      {data.map(({ reviewer_name, reviewer_rating, comment }, idx) => (
        <li key={"item" + idx} className={css.item}>
          <div className={css.row}>
            <span className={css.avatar}>{reviewer_name.slice(0, 1)}</span>
            <div>
              <h3 className={css.name}>{reviewer_name}</h3>
              <ul className={css.rating}>{getRating(reviewer_rating)}</ul>
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
