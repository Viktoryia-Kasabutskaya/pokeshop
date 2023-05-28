import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useCart } from "hooks";
import { cartLoadingSelector } from "../selectors";
import CartLayout from "../components/CartLayout";

const CartContainer = () => {
  const [open, setOpen] = useState(false);

  const isLoading = useSelector(cartLoadingSelector);

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
    />
  );
};

export default CartContainer;
