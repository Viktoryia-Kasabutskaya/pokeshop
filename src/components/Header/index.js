import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "hooks";
import { logOut } from "utils";
import { ROUTE_NAMES } from "routes/routeNames";
import LogoutIcon from "components/LogoutIcon";
import UserIcon from "components/UserIcon";
import CustomBadge from "components/CustomBadge";

import logo from "static/images/logo-header.png";

import styles from "./styles.module.scss";

const Header = () => {
  const { cartItemsQuantity } = useCart();

  const navigate = useNavigate();

  const handleGetCart = () => {
    navigate(ROUTE_NAMES.CART);
  };

  const handleProfileData = () => {
    navigate(ROUTE_NAMES.PROFILE);
  };

  return (
    <div className={styles.wrapper}>
      <Link to={ROUTE_NAMES.POKEMONS}>
        <img src={logo} alt="logo" width={50} />
      </Link>
      <Link to={ROUTE_NAMES.POKEMONS} className={styles.navLink}>
        Pokemons
      </Link>
      <div>
        <UserIcon onClick={handleProfileData} />
        <CustomBadge count={cartItemsQuantity} onClick={handleGetCart} />
        <LogoutIcon onClick={logOut} />
      </div>
    </div>
  );
};

export default Header;
