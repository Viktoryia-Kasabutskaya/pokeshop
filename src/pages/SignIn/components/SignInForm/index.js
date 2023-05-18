import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";

import styles from "./styles.module.scss";

const SignInForm = ({ form, handleSubmit, handleChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.wrapper}>
        <CustomInput
          label="Email"
          name="email"
          type="text"
          value={form.email}
          onChange={handleChange}
        />
        <CustomInput
          label="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <CustomButton
          text="Login"
          type="submit"
          size="medium"
          onClick={handleSubmit}
        />
      </form>
    </>
  );
};

SignInForm.propTypes = {
  form: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default SignInForm;
