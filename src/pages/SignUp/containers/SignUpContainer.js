import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import omit from "lodash/omit";

import { useFetching } from "hooks";
import { ROUTE_NAMES } from "routes/routeNames";

import { signUp } from "../api";
import { signUpValidationSchema } from "../validations";
import SignUpLayout from "../components/SignUpLayout";

const SignUpContainer = () => {
  const { data, errors, handleDataLoad } = useFetching(signUp);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
    },

    validationSchema: signUpValidationSchema,
    onSubmit: (values, { resetForm }) => {
      handleDataLoad(omit(values, "confirmPassword"));
      resetForm();
    },
  });

  useEffect(() => {
    if (data?.data.success) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [data, navigate]);

  return <SignUpLayout data={data} errors={errors} formik={formik} />;
};

export default SignUpContainer;
