import PropTypes from "prop-types";

import ProfileData from "../ProfileData";
import Order from "../Orders";
import Spinner from "components/Spinner";

import styles from "./styles.module.scss";

const ProfileLayout = ({ profile, orders, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <ProfileData profile={profile} />
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <h3>Orders</h3>
            <div className={styles.textTitle}>
              <h4>Created at</h4>
              <h4>Order id</h4>
              <h4>Total price</h4>
            </div>

            <div className={styles.areaOrders}>
              {orders.map(({ totalPrice, itemsList, createdAt, _id }) => (
                <Order
                  createdAt={createdAt}
                  totalPrice={totalPrice}
                  key={_id}
                  id={_id}
                  ordersList={itemsList}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ProfileLayout.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default ProfileLayout;
