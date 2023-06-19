import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ProfileData = ({ profile }) => {
  const { email, phone, firstName, lastName, gender } = profile;

  return (
    <div className={styles.wrapper}>
      <h3>Profile</h3>
      <p>
        Name: {firstName} {lastName}
      </p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

ProfileData.propTypes = {
  profile: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileData;
