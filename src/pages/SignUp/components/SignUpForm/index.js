import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";

import styles from "./styles.module.scss";

const SignUpForm = ({ formik }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.wrapper}>
        <CustomInput
          label="First Name"
          name="firstName"
          type="text"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className={styles.errorText}>{formik.errors.firstName}</div>
        )}
        <CustomInput
          label="Last Name"
          name="lastName"
          type="text"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className={styles.errorText}>{formik.errors.lastName}</div>
        )}
        <CustomInput
          label="Email"
          name="email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className={styles.errorText}>{formik.errors.email}</div>
        )}
        <CustomInput
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <div className={styles.errorText}>{formik.errors.password}</div>
        )}
        <CustomInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className={styles.errorText}>
            {formik.errors.confirmPassword}
          </div>
        )}
        <CustomInput
          label="Gender"
          name="gender"
          type="text"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.gender && formik.errors.gender && (
          <div className={styles.errorText}>{formik.errors.gender}</div>
        )}
        <CustomInput
          label="Phone"
          name="phone"
          type="text"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className={styles.errorText}>{formik.errors.phone}</div>
        )}
        <CustomButton
          text="Login"
          type="submit"
          size="medium"
          onClick={formik.handleSubmit}
        />
      </form>
    </>
  );
};

SignUpForm.propTypes = {
  formik: PropTypes.object.isRequired,
};

export default SignUpForm;
