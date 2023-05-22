import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PokemonsLayout from "../components/PokemonsLayout";
import {
  PokemonsErrorsSelector,
  PokemonsListSelector,
  PokemonsLoadingSelector,
} from "../selectors";
import { getPokemonsThunk } from "../api";
import { useCart, usePagination } from "hooks";
import { ROUTE_NAMES } from "routes/routeNames";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { addItemToCart } = useCart();

  const [page, handlePageChange] = usePagination(1);

  const pokemons = useSelector(PokemonsListSelector);
  const errors = useSelector(PokemonsErrorsSelector);
  const isLoading = useSelector(PokemonsLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonsThunk({ page, limit: 12 }));
  }, [page, dispatch]);

  const handleLearnMore = (id) => {
    navigate(`${ROUTE_NAMES.POKEMONS}/${id}`);
  };

  return (
    <PokemonsLayout
      pokemons={pokemons}
      errors={errors}
      isLoading={isLoading}
      handlePageChange={handlePageChange}
      handleLearnMore={handleLearnMore}
      handleAddToCart={addItemToCart}
    />
  );
};

export default PokemonsContainer;
