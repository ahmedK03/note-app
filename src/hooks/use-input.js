import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const ACTIONS = {
  INPUT_CHANGE_HANDLER: "change_handler",
  INPUT_BLUR_HANDLER: "blur_handler",
  INPUT_RESET: "reset_handler",
};

const inputStateReducer = (oldState, action) => {
  switch (action.type) {
    case ACTIONS.INPUT_CHANGE_HANDLER:
      return { value: action.value, isTouched: oldState.isTouched };
    case ACTIONS.INPUT_BLUR_HANDLER:
      return { isTouched: true, value: oldState.value };
    case ACTIONS.INPUT_RESET:
      return { value: "", isTouched: false };
    default:
      return initialInputState;
  }
};

const useInput = (validation) => {
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validation(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const isInValid = hasError ? "is-invalid" : "";

  const valueChangeHandler = (e) => {
    inputDispatch({
      type: ACTIONS.INPUT_CHANGE_HANDLER,
      value: e.target.value,
    });
  };

  const inputBlurHandler = () => {
    inputDispatch({ type: ACTIONS.INPUT_BLUR_HANDLER });
  };

  const reset = () => {
    inputDispatch({ type: ACTIONS.INPUT_RESET });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    isInValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
