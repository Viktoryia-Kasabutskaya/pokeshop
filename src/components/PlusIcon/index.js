import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const PlusIcon = ({ onClick }) => {
  return (
    <IconButton aria-label="plus" onClick={onClick}>
      <AddCircleOutlineOutlinedIcon />
    </IconButton>
  );
};

PlusIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlusIcon;
