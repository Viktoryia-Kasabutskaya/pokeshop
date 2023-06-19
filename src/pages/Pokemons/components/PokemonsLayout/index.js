import PropTypes from "prop-types";

import CustomPagination from "components/CustomPagination";
import Spinner from "components/Spinner";
import PokemonCard from "../PokemonCard";

import banner from "static/images/pokemon.jpg";

import styles from "./styles.module.scss";

const PokemonsLayout = ({
  pokemons,
  isLoading,
  errors,
  page,
  handlePageChange,
  handleLearnMore,
  handleAddToCart,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={banner} alt="pokemons" className={styles.background} />
        <h2 className={styles.greeting}>Welcom to our Pokeshop</h2>
      </div>
      <h1>Products</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.wrapperCard}>
            {pokemons.map(({ name, id, image, price }) => (
              <PokemonCard
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                handleAddToCart={handleAddToCart}
                handleLearnMore={handleLearnMore}
              />
            ))}
          </div>
          <CustomPagination page={page} handlePageChange={handlePageChange} />
        </>
      )}
      {errors && <div style={{ color: "red" }}>{errors}</div>}
    </div>
  );
};

PokemonsLayout.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }).isRequired
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleLearnMore: PropTypes.func.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
};

export default PokemonsLayout;
