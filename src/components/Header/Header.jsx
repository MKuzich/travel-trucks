import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={"container " + css.container}>
        <Link to="/" className={css.logo}>
          <Icon name="logo" className={css.icon} />
        </Link>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/campers">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
