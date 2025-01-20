import css from "./CampersItem.module.css";
import Icon from "../Icon/Icon";
import CamperAttributes from "../CamperAttributes/CamperAttributes";
import { Link, useLocation } from "react-router-dom";
import RatingRow from "../RatingRow/RatingRow";
import Price from "../Price/Price";
import { addFav, removeFav } from "../../redux/favoritesSlice";
import { useSelector, useDispatch } from "react-redux";

const CampersItem = ({ data }) => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const loc = useLocation();
  const { gallery, name, price, description, rating, reviews, location } = data;

  const handleFav = () => {
    if (favorites.includes(data.id)) {
      dispatch(removeFav(data.id));
    } else {
      dispatch(addFav(data.id));
    }
  };

  return (
    <div className={css.card}>
      <div className={css.wrapper}>
        <img src={gallery[0].thumb} alt={name} className={css.image} />
      </div>
      <div className="">
        <div className={css.heading}>
          <h3 className={css.title}>{name}</h3>
          <div className={css.priceWrap}>
            <Price price={price} />
            <button type="button" className={css.likeBtn} onClick={handleFav}>
              <Icon
                name="heart"
                className={
                  favorites.includes(data.id) ? css.likeActive : css.like
                }
              />
            </button>
          </div>
        </div>
        <RatingRow
          rating={rating}
          reviews={reviews.length}
          location={location}
        />
        <p className={css.description}>{description}</p>
        <CamperAttributes data={data} />
        <Link to={`/campers/${data.id}`} className="link" state={loc}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CampersItem;
