import css from "./CatalogPage.module.css";
import CampersList from "../../components/CampersList/CampersList";
import Filter from "../../components/Filter/Filter";

const CatalogPage = () => {
  return (
    <section className={css.section}>
      <div className={"container " + css.container}>
        <Filter />
        <CampersList />
      </div>
    </section>
  );
};

export default CatalogPage;
