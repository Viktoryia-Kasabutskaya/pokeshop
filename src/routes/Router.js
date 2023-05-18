import { Route, Routes } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import SignUpContainer from "pages/SignUp/containers/SignUpContainer";
import SignInContainer from "pages/SignIn/containers/SignInContainer";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
      <Route path="*" element={<h2>Error 404, page not found</h2>} />
    </Routes>
  );
};

export default Router;
