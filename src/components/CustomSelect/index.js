import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

const CustomSelect = ({ name, value, onChange, onBlur }) => {
  return (
    <FormControl variant="filled" sx={{ textAlign: "start" }}>
      <InputLabel id="gender-label">Gender</InputLabel>
      <Select
        labelId="gender-label"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </FormControl>
  );
};

CustomSelect.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default CustomSelect;
