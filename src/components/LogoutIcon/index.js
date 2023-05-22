import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

const LogoutIcon = ({ onClick }) => {
  return (
    <IconButton aria-label="logout" onClick={onClick}>
      <ExitToAppOutlinedIcon />
    </IconButton>
  );
};

LogoutIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LogoutIcon;
