import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

const CustomInput = ({ value, type, name, label, onChange, onBlur }) => {
  return (
    <TextField
      value={value}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant="filled"
      autoComplete="off"
    />
  );
};

CustomInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default CustomInput;
