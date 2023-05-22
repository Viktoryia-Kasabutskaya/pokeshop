import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialPage) => {
  const [params, setParams] = useSearchParams({ page: initialPage, limit: 12 });

  const page = +Object.fromEntries(params).page;

  useEffect(() => {
    setParams({ page, limit: 12 });
  }, []);

  const handlePageChange = (_, page) => {
    setParams({ page, limit: 12 });
  };

  return [page, handlePageChange];
};

export default usePagination;
