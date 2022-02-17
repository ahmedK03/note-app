import useInput from '../../hooks/use-input'; // custom hook
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './AddUser.css';

const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;

/*
const emailReducer = ( oldState, action ) => {
    switch (action.type) {
        case 'EMAIL_INPUT_CHANGE' :
            return { value: action.value, isValid: action.value.includes('@') };
        case 'EMAIL_INPUT_BLUR' :
            return { value:oldState.value, isValid: oldState.value.includes('@')};
        default: 
            return {value: '', isValid: false};
    }
}

const passwordReducer = ( oldState, action ) => {

}
*/
const AddUser = () => {

    /*

    const [emailState, emailDispatch] = useReducer(emailReducer, {value:'',isValid:''});
    const [passwordState, passwordDispatch] = useReducer(passwordReducer, {value:'', isValid:''});
    const userFirstName = useRef();
    const userLastName = useRef();
    const userEmail = useRef();
    const userPassword = useRef();
    
    
    const emailChangeHandler = ({ target }) => {
        emailDispatch({type:'EMAIL_INPUT_CHANGE', value:target.value});
    }

    const validateEmailHandler = () => {
        emailDispatch({type:'EMAIL_INPUT_BLUR'})
    }
    */

    const {
        value: enteredFname, 
        isValid: enteredFnameIsValid,
        hasError: fNameHasError,
        valueChangeHandler: fNameChangeHandler,
        inputBlurHandler: fNameBlurHandler,
        reset: resetFname,
        isInValid: fNameisInValid
    } = useInput((value) => value.trim().length >= 3);

    const {
        value:enteredLname,
        isValid: enteredLnameIsValid,
        hasError: lNameHasError,
        valueChangeHandler: lNameChangeHandler,
        inputBlurHandler: lNameBlurHandler,
        reset: resetLname,
        isInValid: lNameisInValid
    } = useInput((value) => value.trim().length >= 3)

    const {
        value:enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: resetEmail,
        isInValid: emailisInValid
    } = useInput( (value) => value.includes('@'))

    let formIsValid = false;

    if(enteredFnameIsValid && enteredLnameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const submitHandler =  (e) => {
        e.preventDefault();
        
        if(!enteredFnameIsValid || !enteredLnameIsValid || !enteredEmailIsValid ) {
            return;
        }

        const userInfo = {
            first_name: enteredFname,
            last_name: enteredLname,
            email: enteredEmail,
            password: ''
        }
        console.log(userInfo);


        resetFname();
        resetLname();
        resetEmail();
        /*
        const userInfo = {
            first_name: userFirstName.current.value,
            last_name: userLastName.current.value,
            email: userEmail.current.value,
            password: userPassword.current.value
        }
        let { data } = await axios.post(`${endPoint}/signup`,userInfo );
        */
    }

    

    return(
        <section id="registerForm" className="d-flex justify-content-center align-items-center">
            <Container>
                    <Col md={6} className="mx-auto">
                        <Form onSubmit={submitHandler}>

                            <Form.Group className="mb-3" controlId="userFirstName">
                                <Form.Label>Enter your first name</Form.Label>
                                <Form.Control 
                                type="text"
                                onChange={fNameChangeHandler}
                                onBlur={fNameBlurHandler}
                                value={enteredFname}
                                className={fNameisInValid}
                                placeholder="First name" 
                                name="first_name"/>
                                {fNameHasError && <p className="text-danger">Name must be >= 3 letters</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userLastName">
                                <Form.Label>Enter your last name</Form.Label>
                                <Form.Control 
                                type="text"
                                onChange={lNameChangeHandler}
                                onBlur={lNameBlurHandler}
                                value={enteredLname}
                                className={lNameisInValid}
                                name="last_name"
                                placeholder="Last Name" />
                                {lNameHasError && <p className="text-danger">Name must be >= 3 letters</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userEmail1">
                                <Form.Label>Enter Your Email Address</Form.Label>
                                <Form.Control 
                                name="email"
                                value={enteredEmail}
                                className={emailisInValid}
                                onChange={emailInputChangeHandler}
                                onBlur={emailInputBlurHandler}
                                placeholder="example@email.net"
                                />
                                {emailHasError && <p className="text-danger">Email is invalid</p>}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                
                                type="password"
                                name="password"/>
                            </Form.Group>

                            <Button type="submit" disabled={!formIsValid} variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
            </Container>
        </section>
    );
}

export default AddUser;