import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart";

import styles from "./styles.module.scss";

const CartLayout = ({
  cartItems,
  totalPrice,
  // cartItemsQuantity,
  updateItemQuantity,
  handleDeleteItem,
  isEmptyCart,
}) => {
  return (
    <div>
      <h1>Shopping cart</h1>
      {isEmptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <div>
            <div className={styles.titles}>
              <h3>Product</h3>
              <h3>Price</h3>
              <h3>Quantity</h3>
              <h3>Total</h3>
              <h3>Delete</h3>
            </div>
            {cartItems.map(({ id, name, image, quantity, price }) => (
              <CartItem
                key={id}
                id={id}
                name={name}
                image={image}
                quantity={quantity}
                price={price}
                updateItemQuantity={updateItemQuantity}
                handleDeleteItem={handleDeleteItem}
              />
            ))}
            <div className={styles.totalPrice}>
              <h3>Total Price: </h3>
              <h3>{totalPrice}$</h3>
            </div>
            <CustomButton text="Order" onClick={() => {}} />
          </div>
        </>
      )}
    </div>
  );
};

CartLayout.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
    }).isRequired
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func,
  updateItemQuantity: PropTypes.func,
};

export default CartLayout;
