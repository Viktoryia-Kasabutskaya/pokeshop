import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ItemAbilities = ({ title, description }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
    </div>
  );
};

ItemAbilities.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ItemAbilities;
