import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import PropTypes from "prop-types";

const CustomAlert = ({ message, timer, severity }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={timer}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string,
  timer: PropTypes.number,
  severity: PropTypes.string,
};

export default CustomAlert;
