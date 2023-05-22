import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "routes/routeNames";
import cart from "static/images/cart.png";

import styles from "./styles.module.scss";

const EmptyCart = () => {
  return (
    <>
      <img src={cart} alt="cart" width={200} />
      <h3>Your cart is currently empty. Let's change that!</h3>
      <p>
        Before procced to checkout, you must add some products to your cart. You
        will find a lot of interesting products on{" "}
        <Link to={ROUTE_NAMES.POKEMONS} className={styles.navLink}>
          Pokemons.
        </Link>
      </p>
    </>
  );
};

export default EmptyCart;
