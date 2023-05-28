import PropTypes from "prop-types";

import ProfileData from "../ProfileData";
import Order from "../Orders";

import styles from "./styles.module.scss";

const ProfileLayout = ({ profile }) => {
  return (
    <div className={styles.wrapper}>
      <ProfileData profile={profile} />
      <Order />
    </div>
  );
};

ProfileLayout.propTypes = {
  profile: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileLayout;
