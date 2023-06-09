import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomButton = ({ disabled = false, text, size, type, onClick, sx }) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      variant="contained"
      color="info"
      sx={sx}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  sx: PropTypes.string,
};

export default CustomButton;
