import capitalize from "lodash/capitalize";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useCart } from "hooks";

import Spinner from "components/Spinner";
import CustomButton from "components/CustomButton";
import ItemStats from "../ItemStats";
import ItemAbilities from "../ItemAbilities";
import { STAT_IMAGES } from "pages/PokemonDetails/config";

import styles from "./styles.module.scss";

const PokemonView = ({ data, isLoading, handleAddToCart }) => {
  const { id, name, image, price, stats, abilities } = data;
  const [isPokemonInCart, setIsPokemonInCart] = useState(false);
  const { cartItems } = useCart();

  const pokemonInCart = (pokemonId, pokemonsInCart) => {
    const pokemonInCard = pokemonsInCart.find(({ id }) => pokemonId === id);
    return pokemonId === pokemonInCard?.id;
  };

  useEffect(() => {
    setIsPokemonInCart(pokemonInCart(id, cartItems));
  }, [id, cartItems]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.items}>
            <img src={image} alt={name} className={styles.image} />
            <div>
              <h1 className={styles.nameText}>{capitalize(name)}</h1>
              <h2>{price}$</h2>
              <CustomButton
                disabled={isPokemonInCart}
                text="add to cart"
                onClick={() =>
                  handleAddToCart({ id, image, name, price, quantity: 1 })
                }
              />
              <h2>Stats</h2>
              <div className={styles.stats}>
                {stats.map(({ title, value }) => (
                  <ItemStats
                    key={title}
                    image={STAT_IMAGES[title]}
                    title={title}
                    value={value}
                  />
                ))}
              </div>
            </div>
          </div>
          <h2>Abilities</h2>
          <div className={styles.abilities}>
            {abilities.map(({ title, description }) => (
              <ItemAbilities
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

PokemonView.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  handleAddToCart: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default PokemonView;
