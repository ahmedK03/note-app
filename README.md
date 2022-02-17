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
- axios *to new user data to back end*
```
    npm i axios
```
- added .env file.
---

### Routing Steps:

1. import BrowserRouter in index.js file.
```
    <BrowserRouter>
            <App/>
    </BrowserRouter>
```
2. import Route, Switch & Redirect in App.jsx file.
```
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

### Send Data Using axios

1. import axios
```
    import axios from 'axios';
```

2. using async & await function 
```
    async function sendData () {
        let { data } = await axios.post(`${endPoint}/signup`, userInfo );
    }
```
