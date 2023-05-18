import { useState, useCallback } from "react";

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;

    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialForm);
  }, [initialForm]);

  return { form, handleChange, handleReset };
};

export default useForm;
