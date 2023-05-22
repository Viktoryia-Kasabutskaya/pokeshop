import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const ItemStats = ({ image, title, value }) => {
  return (
    <div className={styles.wrapper}>
      <img src={image} alt={title} className={styles.image} />
      <p>
        {title}: <span className={styles.value}>{value}</span>
      </p>
    </div>
  );
};

ItemStats.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.number,
};

export default ItemStats;
