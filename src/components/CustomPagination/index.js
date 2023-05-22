import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";

const CustomPagination = ({ page, handlePageChange }) => {
  return (
    <Pagination
      page={page}
      onChange={handlePageChange}
      count={15}
      shape="rounded"
      sx={{ display: "flex", justifyContent: "center" }}
    />
  );
};

CustomPagination.propTypes = {
  page: PropTypes.number,
  handlePageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
