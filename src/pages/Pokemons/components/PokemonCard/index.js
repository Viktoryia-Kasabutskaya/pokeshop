import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import capitalize from "lodash/capitalize";
import PropTypes from "prop-types";

const PokemonCard = ({
  id,
  price,
  image,
  name,
  handleAddToCart,
  handleLearnMore,
}) => {
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
        <Button
          size="small"
          onClick={() =>
            handleAddToCart({ id, image, name, price, quantity: 1 })
          }
        >
          Add to Cart
        </Button>
        <Button size="small" onClick={() => handleLearnMore(id)}>
          Learn More
        </Button>
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
