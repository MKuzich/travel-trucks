import { Formik, Form, Field } from "formik";
import { useEffect, useId, useRef } from "react";
import equipment from "../../helpers/equipment";
import Icon from "../Icon/Icon";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { useSearchParams } from "react-router-dom";
import { clearCampers } from "../../redux/campersSlice";
import { selectFilter } from "../../redux/selectors";

const form = {
  alcove: "Alcove",
  fullyIntegrated: "Fully integrated",
  panelTruck: "Van",
};

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const locationId = useId();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialValues = useRef({
    location: searchParams.get("location") || "",
    equipment: searchParams.getAll("equipment") || [],
    type: searchParams.get("type") || "",
  });

  const onSubmit = (data) => {
    dispatch(clearCampers());
    dispatch(changeFilter(data));
    setSearchParams(data);
  };

  useEffect(() => {
    if (
      initialValues.current.location !== filter.location ||
      initialValues.current.type !== filter.type ||
      initialValues.current.equipment.some(
        (item) => !filter.equipment.includes(item)
      )
    ) {
      dispatch(clearCampers());
      dispatch(changeFilter({ ...initialValues.current, page: 1 }));
    }
  }, [dispatch, filter.equipment, filter.location, filter.type]);

  return (
    <Formik initialValues={initialValues.current} onSubmit={onSubmit}>
      <Form className={css.form}>
        <label htmlFor={locationId} className={css.inputLabel}>
          Location
        </label>
        <div className={css.inputWrap}>
          <Icon name="map" className={css.inputIcon} />
          <Field
            type="text"
            name="location"
            id={locationId}
            placeholder="City"
            className={css.input}
          />
        </div>
        <p className={css.middleLabel}>Filter</p>
        <p className={css.setLabel}>Vehicle equipment</p>
        <div className={css.set}>
          {equipment.map((item) => (
            <label key={item} className={css.label}>
              <Field
                type="checkbox"
                name="equipment"
                value={item}
                className="visually-hidden"
              />
              <Icon name={item} className={css.icon} />
              {item}
            </label>
          ))}
        </div>
        <p className={css.setLabel}>Vehicle type</p>
        <div className={css.set}>
          {Object.entries(form).map(([value, label]) => (
            <label key={value} className={css.label}>
              <Field
                type="radio"
                name="type"
                value={value}
                className="visually-hidden"
              />
              <Icon name={value} className={css.icon} />
              {label}
            </label>
          ))}
        </div>
        <button type="submit" className={"link " + css.btn}>
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filter;
