import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const MinusIcon = ({ onClick, disabled = false }) => {
  return (
    <IconButton aria-label="minus" onClick={onClick} disabled={disabled}>
      <RemoveCircleOutlineOutlinedIcon />
    </IconButton>
  );
};

MinusIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MinusIcon;
