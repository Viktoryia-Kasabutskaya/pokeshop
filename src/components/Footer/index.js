import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "routes/routeNames";
import logo from "static/images/logo-header.png";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <Link to={ROUTE_NAMES.POKEMONS}>
          <img src={logo} alt="logo" width={50} />
        </Link>
        <Link to={ROUTE_NAMES.POKEMONS} className={styles.navLink}>
          Pokemons
        </Link>
      </div>
      <p>&copy;2023 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
