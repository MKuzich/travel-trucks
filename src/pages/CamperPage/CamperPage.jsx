import { useParams } from "react-router-dom";
import css from "./CamperPage.module.css";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../redux/campersOps";
import Loader from "../../components/Loader/Loader";
import RatingRow from "../../components/RatingRow/RatingRow";
import Price from "../../components/Price/Price";
import CamperAttributes from "../../components/CamperAttributes/CamperAttributes";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails";
import { Formik, Form, Field } from "formik";
import toast from "react-hot-toast";
import Reviews from "../../components/Reviews/Reviews";

const initialValues = { name: "", mail: "", date: "", comment: "" };

const CamperPage = () => {
  const { camperId } = useParams();
  const [camper, setCamper] = useState(null);
  const [isFeatures, setIsFeatures] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCamper(camperId);

      setCamper(data);
    };

    fetch();
  }, [camperId]);

  const onSubmit = (data, { resetForm }) => {
    toast.success(
      `${data.name}, your request for ${data.date} has been sent successfully! We will contact you soon via your mail ${data.mail}.`
    );

    resetForm();
  };

  return (
    <section className={css.section}>
      <div className="container">
        {!camper && <Loader />}
        {camper && (
          <>
            <h1 className={css.title}>{camper.name}</h1>
            <RatingRow
              rating={camper.rating}
              reviews={camper.reviews.length}
              location={camper.location}
            />
            <div className={css.priceWrap}>
              <Price price={camper.price} />
            </div>
            <ul className={css.gallery}>
              {camper.gallery.map((item) => (
                <li key={item.thumb} className={css.gallerryItem}>
                  <img src={item.thumb} alt={camper.name} className={css.img} />
                </li>
              ))}
            </ul>
            <p className={css.description}>{camper.description}</p>
            <ul className={css.btns}>
              <li>
                <button
                  onClick={() => setIsFeatures(true)}
                  className={`${css.btn}${isFeatures ? " " + css.active : ""}`}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsFeatures(false)}
                  className={`${css.btn}${!isFeatures ? " " + css.active : ""}`}
                >
                  Reviews
                </button>
              </li>
            </ul>
            <div className={css.details}>
              {isFeatures ? (
                <div className={`${css.detailsItem} ${css.dark}`}>
                  <CamperAttributes data={camper} />
                  <VehicleDetails data={camper} />
                </div>
              ) : (
                <Reviews data={camper.reviews} />
              )}
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form className={css.detailsItem}>
                  <h2 className={css.formTitle}>Book your campervan now</h2>
                  <p className={css.paragraph}>
                    Stay connected! We are alwa ys ready to help you.
                  </p>
                  <div className={css.inputs}>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className={css.input}
                      required
                    />
                    <Field
                      type="email"
                      name="mail"
                      placeholder="Email*"
                      className={css.input}
                      required
                    />
                    <Field
                      type="text"
                      name="date"
                      placeholder="Booking date*"
                      className={css.input}
                      required
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => (e.target.type = "text")}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <Field
                      name="comment"
                      as="textarea"
                      placeholder="Comment"
                      className={css.input}
                      rows="3"
                    />
                  </div>
                  <button type="submit" className={"link " + css.submit}>
                    Send
                  </button>
                </Form>
              </Formik>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CamperPage;
