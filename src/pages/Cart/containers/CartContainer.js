import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useCart } from "hooks";
import { cartLoadingSelector } from "../selectors";
import CartLayout from "../components/CartLayout";
import { customerIdSelector } from "pages/SignIn/selectors";
import { addOrderThunk } from "pages/Profile/api/thunks/addOrder";

const CartContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [isOrderSuccessful, setOrderSuccessful] = useState(false);

  const isLoading = useSelector(cartLoadingSelector);
  const customerId = useSelector(customerIdSelector);

  const {
    getCartData,
    cartItems,
    cartItemsQuantity,
    totalPrice,
    updateItemQuantity,
    deleteItemById,
    deleteAllItems,
  } = useCart();

  useEffect(() => {
    getCartData();
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const createOrder = useCallback(() => {
    dispatch(addOrderThunk({ customerId, totalPrice, itemsList: cartItems }));
    setOrderSuccessful(true);
  }, [dispatch, customerId, totalPrice, cartItems]);

  return (
    <CartLayout
      cartItems={cartItems}
      cartItemsQuantity={cartItemsQuantity}
      totalPrice={totalPrice}
      updateItemQuantity={updateItemQuantity}
      handleDeleteItem={deleteItemById}
      isLoading={isLoading}
      handleDeleteAllItems={deleteAllItems}
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleCreateOrder={createOrder}
      isOrderSuccessful={isOrderSuccessful}
    />
  );
};

export default CartContainer;
