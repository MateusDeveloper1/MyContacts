import { useState } from 'react';

export default function useErros() {
  const [erros, setErros] = useState([]);

  function setError({ field, message }) {
    const errorAlredyExists = erros.find((error) => error.field === field);

    if (errorAlredyExists) {
      return;
    }

    setErros((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }

  function removeError(fieldName) {
    setErros((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }

  function getErrorMessageByName(fieldName) {
    return erros.find((error) => error.field === fieldName)?.message;
  }

  return { setError, removeError, getErrorMessageByName };
}
