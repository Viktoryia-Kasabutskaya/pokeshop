import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCart } from "hooks";
import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import Header from "../Header";

import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  const { getCartData } = useCart();

  const isAuthenticated = useSelector(isAuthenticatedSelector);

  useEffect(() => {
    if (isAuthenticated) {
      getCartData();
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.wrapper}>
      {isAuthenticated && <Header />}
      {children}
    </div>
  );
};

export default MainLayout;
