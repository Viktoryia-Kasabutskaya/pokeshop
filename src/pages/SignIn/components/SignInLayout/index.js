import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import SignInForm from "../SignInForm";
import CustomAlert from "components/CustomAlert";

import styles from "./styles.module.scss";

const SignInLayout = ({
  form,
  handleSubmit,
  handleChange,
  isAuthenticated,
  error,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <h3>Please sign in to continue</h3>
      <SignInForm
        form={form}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      <p>
        Don't have an account?{" "}
        <Link to={ROUTE_NAMES.SIGN_UP} className={styles.navLink}>
          Sign Up
        </Link>
      </p>
      {isAuthenticated && (
        <CustomAlert
          timer={3000}
          severity="success"
          message="You successfully log in. Welcome to our community. We are happy to have you on board."
        />
      )}
      {error && <CustomAlert timer={3000} severity="error" message={error} />}
    </div>
  );
};

SignInLayout.propTypes = {
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  error: PropTypes.string,
};

export default SignInLayout;
