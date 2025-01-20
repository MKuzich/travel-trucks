import Error from "../../components/Error/Error";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <div className={`container ${css.container}`}>
        <Error message="404. Page not found" />
      </div>
    </section>
  );
};

export default NotFoundPage;
