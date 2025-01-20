import { useSelector, useDispatch } from "react-redux";
import CampersItem from "../CampersItem/CampersItem";
import css from "./CampersList.module.css";
import Loader from "../Loader/Loader";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";
import Error from "../Error/Error";

const CampersList = () => {
  const campers = useSelector((state) => state.campers);

  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const loadMore = () => {
    dispatch(changeFilter({ page: filter.page + 1 }));
  };

  return (
    <>
      {campers.loading && <Loader />}
      {campers.error && <Error message={campers.error} />}
      <div>
        {!campers.error && campers.items.length && (
          <ul className={css.list}>
            {campers.items.map((camper) => (
              <li key={camper.id}>
                <CampersItem data={camper} />
              </li>
            ))}
          </ul>
        )}
        {campers.total > campers.items.length && (
          <button type="button" className={css.btn} onClick={loadMore}>
            Load more
          </button>
        )}
      </div>
    </>
  );
};

export default CampersList;
