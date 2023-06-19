import capitalize from "lodash/capitalize";
import PropTypes from "prop-types";

import DeleteIcon from "components/DeleteIcon";
import PlusIcon from "components/PlusIcon";
import MinusIcon from "components/MinusIcon";

import styles from "./styles.module.scss";

const CartItem = ({
  id,
  name,
  image,
  quantity,
  price,
  handleDeleteItem,
  updateItemQuantity,
}) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt={name} />
        <p>{capitalize(name)}</p>
      </div>
      <p>{price}$</p>
      <div className={styles.controlButton}>
        <MinusIcon
          disabled={quantity === 1}
          onClick={() => updateItemQuantity({ id, quantity: quantity - 1 })}
        />
        <p>{quantity}</p>
        <PlusIcon
          onClick={() => updateItemQuantity({ id, quantity: quantity + 1 })}
        />
      </div>
      <p>{price * quantity}$</p>
      <DeleteIcon onClick={() => handleDeleteItem(id)} />
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleDeleteItem: PropTypes.func,
  updateItemQuantity: PropTypes.func,
};

export default CartItem;
