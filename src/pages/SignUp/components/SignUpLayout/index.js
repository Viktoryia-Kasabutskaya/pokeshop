import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ROUTE_NAMES } from "routes/routeNames";
import SignUpForm from "../SignUpForm";
import CustomAlert from "components/CustomAlert";

import styles from "./styles.module.scss";

const SignUpLayout = ({ data, errors, formik }) => {
  return (
    <div className={styles.wrapper}>
      <h1>Create an account</h1>
      <h3>Join the Pokémon lovers community</h3>
      {data?.data ? (
        <CustomAlert
          timer={3000}
          severity="success"
          message={data.data.message}
        />
      ) : (
        <>
          <SignUpForm formik={formik} />
          {errors && (
            <CustomAlert
              timer={3000}
              severity="error"
              message={errors.message}
            />
          )}
        </>
      )}
      <p>
        Already have an account?{" "}
        <Link to={ROUTE_NAMES.SIGN_IN} className={styles.navLink}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

SignUpLayout.propTypes = {
  data: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default SignUpLayout;
