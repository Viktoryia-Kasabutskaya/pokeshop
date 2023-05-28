import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useCart } from "hooks";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import Header from "../Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  const { getCartData } = useCart();

  const location = useLocation();

  const isAuthenticated = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    if (isAuthenticated) {
      getCartData();
    }
  }, [isAuthenticated]);

  const showHeader =
    isAuthenticated &&
    location.pathname !== "/" &&
    location.pathname !== "/sign-up";

  return (
    <div className={styles.wrapper}>
      {showHeader && <Header />}
      {children}
    </div>
  );
};

export default MainLayout;
