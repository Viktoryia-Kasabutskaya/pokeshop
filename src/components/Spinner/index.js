import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/system/Box";

const Spinner = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
