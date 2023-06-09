import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import CustomSelect from "components/CustomSelect";
import CustomInputAdornment from "components/CustomInputAdornment";

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
        <CustomInputAdornment
          textLabel="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
        {formik.touched.password && formik.errors.password && (
          <div className={styles.errorText}>{formik.errors.password}</div>
        )}
        {/* <CustomInput
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
        )} */}
        <CustomSelect
          name="gender"
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
          text="Submit"
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
