import { profileSelector } from "pages/SignIn/selectors";

import { useSelector } from "react-redux";
import ProfileLayout from "../components/ProfileLayout";

const ProfileContainer = () => {
  const profile = useSelector(profileSelector);

  return <ProfileLayout profile={profile} />;
};

export default ProfileContainer;
