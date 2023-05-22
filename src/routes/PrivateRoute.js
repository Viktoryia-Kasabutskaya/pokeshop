import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { ROUTE_NAMES } from "./routeNames";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.SIGN_IN} replace />;
  }

  return children;
};

export default PrivateRoute;
