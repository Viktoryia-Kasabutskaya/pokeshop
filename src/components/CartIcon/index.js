import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const CartIcon = ({ onClick }) => {
  return (
    <IconButton
      aria-label="cart"
      onClick={onClick}
      //   sx={{ width: 40, height: 40, justifySelf: "center" }}
    >
      <AddShoppingCartOutlinedIcon />
    </IconButton>
  );
};

CartIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CartIcon;
