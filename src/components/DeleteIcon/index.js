import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const DeleteIcon = ({ onClick }) => {
  return (
    <IconButton
      aria-label="delete"
      onClick={onClick}
      sx={{ width: 40, height: 40, justifySelf: "center" }}
    >
      <DeleteForeverOutlinedIcon />
    </IconButton>
  );
};

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteIcon;
