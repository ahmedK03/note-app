import { useState } from 'react';


const useInput = (validation) => {

    const [ enteredValue, setEnteredValue ] = useState('');
    const [ inputIsTouched, setInputIsTouched ] = useState(false);

    const valueIsValid = validation(enteredValue);
    const hasError = !valueIsValid && inputIsTouched;

    const isInValid = hasError ? 'is-invalid' : '';

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = () => {
        setInputIsTouched(true);
    }

    const reset = ( ) => {
        setEnteredValue('');
        setInputIsTouched(false);
    }


    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        isInValid,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;