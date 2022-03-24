# Notes App for React

this is a notes app from Route Academy Playlist.

The main theme is available in a separate folder

## Used Liberaries

- [React-Bootstrap](https://react-bootstrap.gi)
- [font awesome](https://fontawesome.com/v5/docs/web/use-with/react)
```
    yarn add @fortawesome/fontawesome-free
```
- [Superhero bootstrap theme@v5.1.3](https://bootswatch.com/superhero/)

- React Router Dom
```
    npm i react-router-dom@5.2.0
```
- axios **to new user data to back end**

```js
    npm i axios
```
- added .env file.
---

### Routing Steps:

1. import BrowserRouter in index.js file.

```jsx
    <BrowserRouter>
            <App/>
    </BrowserRouter>
```
2. import Route, Switch & Redirect in App.jsx file.

```jsx

        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/register" component={AddUser} />
          <Route path="/login" component={UserLogin} />
          <Route path="*"  component={NotFound}/>
        </Switch>
```
3. import NavLink in NavBar.jsx file. to be able to add the links
```
    <NavLink to="/home">Home</NavLink>
```
4. when adding a Route to component, it passes a props named 'history', we can use it to redirect to another component 
```
    props.history.replace('/component')
```
---
### Authentication

Created a custom hook to handle the form validaion.

the custom hook is using `useReducer()` 

After the Form is being Validated - in a separate component- we pass the final data to the register/ login component to send them to the end point


---

### Send Data Using axios

1. import axios
```js
    import axios from 'axios';
```

2. using async & await function

```js

    const userInfo = {
      first_name: enteredFname,
      last_name: enteredLname,
      email: enteredEmail,
      password: enteredPassword,
    };

    async function sendData () {
        let { data } = await axios.post(`${endPoint}/signup`, userInfo );
    }
```
---

## Adding a protected route

#### Steps to Add Protected Roure:

1. Create a new component
2. In the `App.jsx` add the new component, then adjust the default route.
3. In the Component itself
    ```jsx

    import {Route} from 'react-router-dom';


    <!-- the props from the react router dom -->
    function Guard (props) {
        <!-- get the token from the local storage here -->
        return <Route  {...props}/>
    } 
    ```

---

### Jwt decode

We use it to decode the token recieved from the api.

The token contain the user info.


##### How to install
`npm i jwt-decode`


##### How to use it
refer to the link https://www.npmjs.com/package/jwt-decode

add the decode function in a try and catch scheme - in case of error, clear the local storage

---

## Logout

to log out we used the `useLocation()` from `react-router-dom` 

created a conditional rendering to assign which nav-links to display in case a token exists or not

---

## AddNotes

A problem occurs while it's adding the prevState note instead of the newly note!

--- 

## Delete & Update 

- Was Able to pass a func from child to parent to call the useEffect Dependency again.

- Another Idea is to create a modal for the delete and the update

- I'm thinking about makes a separate component for the modal to re-use it in case of update or adding a new note