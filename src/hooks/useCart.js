import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
  cartItemsQuantitySelector,
  cartItemsSelector,
  totalPriceSelector,
} from "pages/Cart/selectors";
import { getItemsThunk } from "pages/Cart/api/thunks/getItems";
import { addItemThunk } from "pages/Cart/api/thunks/addItem";
import { updateItemQuantityThunk } from "pages/Cart/api/thunks/updateItemQuantity";
import { deleteItemThunk } from "pages/Cart/api/thunks/deleteItem";
import { deleteAllItemsThunk } from "pages/Cart/api/thunks/deleteAllItems";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);

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

  const deleteAllItems = useCallback(
    (items) => {
      const deletedItems = items.map(({ id }) => dispatch(deleteItemThunk(id)));
      dispatch(deleteAllItemsThunk(deletedItems));
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
    deleteAllItems,
  };
};

export default useCart;
