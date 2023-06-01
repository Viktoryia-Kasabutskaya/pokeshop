import PropTypes from "prop-types";

import CustomButton from "components/CustomButton";
import CartItem from "../CartItem";
import EmptyCart from "../EmptyCart";
import DeleteIcon from "components/DeleteIcon";
import CustomDialog from "components/CustomDialog";
import Spinner from "components/Spinner";

import styles from "./styles.module.scss";
import CustomAlert from "components/CustomAlert";

const CartLayout = ({
  cartItems,
  totalPrice,
  // cartItemsQuantity,
  updateItemQuantity,
  handleDeleteItem,
  handleDeleteAllItems,
  open,
  handleOpen,
  handleClose,
  handleCreateOrder,
  isLoading,
  isOrderSuccessful,
}) => {
  return (
    <div>
      <h1>Shopping cart</h1>
      {cartItems?.length > 0 ? (
        <>
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
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
          ))}
          <div className={styles.controlArea}>
            <div className={styles.deleteBtn}>
              <div>Delete all products:</div>
              <DeleteIcon onClick={handleOpen} />
              <CustomDialog
                text="Are you sure you want to remove all Pokémon from your cart?"
                open={open}
                handleClose={handleClose}
                handleDelete={() => handleDeleteAllItems(cartItems)}
              />
            </div>
            <div className={styles.totalPrice}>
              <div>Total Price: {totalPrice}$</div>
              <CustomButton text="Order" onClick={handleCreateOrder} />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
      {isOrderSuccessful && (
        <CustomAlert
          timer={3000}
          severity="success"
          message="Your order has been successfully placed"
        />
      )}
      {isLoading && <Spinner />}
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
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  handleClose: PropTypes.func,
  isLoading: PropTypes.bool,
  isOrderSuccessful: PropTypes.bool,
};

export default CartLayout;
