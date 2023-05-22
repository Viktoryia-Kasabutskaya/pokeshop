import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";

const UserIcon = ({ onClick }) => {
  return (
    <IconButton aria-label="user" onClick={onClick}>
      <PersonOutlineOutlinedIcon />
    </IconButton>
  );
};

UserIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default UserIcon;
