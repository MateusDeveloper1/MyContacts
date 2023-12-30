import { useState, useCallback } from 'react';

export default function useErros() {
  const [erros, setErros] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const errorAlredyExists = erros.find((error) => error.field === field);

    if (errorAlredyExists) {
      return;
    }

    setErros((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [erros]);

  const removeError = useCallback((fieldName) => {
    setErros((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByName = useCallback((fieldName) => (
    erros.find((error) => error.field === fieldName)?.message
  ), [erros]);

  return {
    setError, removeError, getErrorMessageByName, erros,
  };
}
