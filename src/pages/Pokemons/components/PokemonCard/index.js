import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import capitalize from "lodash/capitalize";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import CustomButton from "components/CustomButton";
import { useCart } from "hooks";

const PokemonCard = ({
  id,
  price,
  image,
  name,
  handleAddToCart,
  handleLearnMore,
}) => {
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
    <Card sx={{ maxWidth: 360 }}>
      <CardMedia sx={{ height: 150 }} image={image} title={capitalize(name)} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {capitalize(name)}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <CustomButton
          disabled={isPokemonInCart}
          size="small"
          text="Add to Cart"
          onClick={() =>
            handleAddToCart({ id, image, name, price, quantity: 1 })
          }
        />
        <CustomButton
          size="small"
          onClick={() => handleLearnMore(id)}
          text="Learn More"
        />
      </CardActions>
    </Card>
  );
};

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleLearnMore: PropTypes.func.isRequired,
};

export default PokemonCard;
