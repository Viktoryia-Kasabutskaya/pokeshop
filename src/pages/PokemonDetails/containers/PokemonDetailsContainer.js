import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { PokemonLoadingSelector, pokemonSelector } from "../selectors";
import { getPokemonByNameThunk } from "../api";
import PokemonView from "../components/PokemonView";
import { useCart } from "hooks";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();

  const { addItemToCart } = useCart();
  const data = useSelector(pokemonSelector);
  const isLoading = useSelector(PokemonLoadingSelector);

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(getPokemonByNameThunk(pokemonName));
  }, [dispatch, pokemonName]);

  return (
    <PokemonView
      data={data}
      isLoading={isLoading}
      handleAddToCart={addItemToCart}
    />
  );
};

export default PokemonDetailsContainer;
