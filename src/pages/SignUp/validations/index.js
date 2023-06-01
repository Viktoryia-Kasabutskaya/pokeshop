import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "min 2 symbols")
    .max(25, "max 25 symbols"),
  lastName: Yup.string()
    .required("Last name is required")
    .min(2, "min 2 symbols")
    .max(25, "max 25 symbols"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  gender: Yup.string().required("Gender is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "min 8 symbols"),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Confirm password is required"),
  phone: Yup.string().required("Phone number is required").min(8).max(15),
});
