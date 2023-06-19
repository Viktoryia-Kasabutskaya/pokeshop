import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useCart } from "hooks";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import Header from "../Header";
import Footer from "components/Footer";

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

  const showHeaderAndFooter =
    isAuthenticated &&
    location.pathname !== "/" &&
    location.pathname !== "/sign-up";

  return (
    <div className={styles.wrapper}>
      {showHeaderAndFooter && <Header />}
      <div className={styles.main}>{children}</div>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
