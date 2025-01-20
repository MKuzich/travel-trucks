import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className={css.section}>
      <div className={"container " + css.container}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>
          You can find everything you want in our catalog
        </p>
        <Link to="/campers" className="link">
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
