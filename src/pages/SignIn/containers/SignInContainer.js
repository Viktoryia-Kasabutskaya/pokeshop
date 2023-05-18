import { useForm } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { signInThunk } from "../api";
import { errorSelector, isAuthenticatedSelector } from "../selectors";
import { ROUTE_NAMES } from "routes/routeNames";
import SignInLayout from "../components/SignInLayout";

const SignInContainer = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const error = useSelector(errorSelector);

  const navigate = useNavigate();

  const { form, handleChange, handleReset } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signInThunk(form));
    handleReset();
  };

  useEffect(() => {
    if (isAuthenticated) {
      const timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.POKEMONS);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isAuthenticated, navigate]);

  return (
    <SignInLayout
      form={form}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isAuthenticated={isAuthenticated}
    />
  );
};

export default SignInContainer;
