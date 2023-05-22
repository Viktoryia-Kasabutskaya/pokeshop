import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PropTypes from "prop-types";

const CustomBadge = ({ count, onClick }) => {
  return (
    <IconButton aria-label="cart" onClick={onClick}>
      <Badge badgeContent={count} color="info">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};

CustomBadge.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func,
};

export default CustomBadge;
