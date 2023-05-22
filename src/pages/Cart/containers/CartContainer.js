import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useCart } from "hooks";
import { cartLoadingSelector } from "../selectors";
import CartLayout from "../components/CartLayout";

const CartContainer = () => {
  const isLoading = useSelector(cartLoadingSelector);

  const {
    getCartData,
    cartItems,
    cartItemsQuantity,
    totalPrice,
    updateItemQuantity,
    deleteItemById,
    isEmptyCart,
  } = useCart();

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <CartLayout
      cartItems={cartItems}
      cartItemsQuantity={cartItemsQuantity}
      totalPrice={totalPrice}
      updateItemQuantity={updateItemQuantity}
      handleDeleteItem={deleteItemById}
      isLoading={isLoading}
      isEmptyCart={isEmptyCart}
    />
  );
};

export default CartContainer;
