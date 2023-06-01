import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { profileSelector } from "pages/SignIn/selectors";
import ProfileLayout from "../components/ProfileLayout";
import { isLoadingSelector, ordersSelector } from "../selectors";
import { getOrdersThunk } from "../api/thunks/getOrders";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const profile = useSelector(profileSelector);
  const orders = useSelector(ordersSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  return (
    <ProfileLayout profile={profile} orders={orders} isLoading={isLoading} />
  );
};

export default ProfileContainer;
