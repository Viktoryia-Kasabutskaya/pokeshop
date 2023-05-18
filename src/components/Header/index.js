import { useSelector } from "react-redux";

import { isAuthenticatedSelector } from "pages/SignIn/selectors";
import { logOut } from "utils";

const Header = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  return (
    <div>{isAuthenticated && <button onClick={logOut}>Logout</button>}</div>
  );
};

export default Header;
