import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
  cartItemsQuantitySelector,
  cartItemsSelector,
  emptyCartSelector,
  totalPriceSelector,
} from "pages/Cart/selectors";
import { getItemsThunk } from "pages/Cart/api/thunk/getItems";
import { addItemThunk } from "pages/Cart/api/thunk/addItem";
import { updateItemQuantityThunk } from "pages/Cart/api/thunk/updateItemQuantity";
import { deleteItemThunk } from "pages/Cart/api/thunk/deleteItem";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);
  const isEmptyCart = useSelector(emptyCartSelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  const updateItemQuantity = useCallback(
    (payload) => {
      dispatch(updateItemQuantityThunk(payload));
    },
    [dispatch]
  );

  const deleteItemById = useCallback(
    (id) => {
      dispatch(deleteItemThunk(id));
    },
    [dispatch]
  );

  return {
    cartItems,
    cartItemsQuantity,
    totalPrice,
    getCartData,
    addItemToCart,
    updateItemQuantity,
    deleteItemById,
    isEmptyCart,
  };
};

export default useCart;
