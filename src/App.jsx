import {Fragment} from 'react';
import NavBar from './components/Main/NavBar';
import Home from './components/Main/Home';
import AddUser from './components/UserAuth/AddUser';
import UserLogin from './components/UserAuth/UserLogin';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {


  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/register" component={AddUser} />
          <Route path="/login" component={UserLogin} />
          <Route path="*"  component={NotFound}/>
        </Switch>
      {/* <Home /> <br />
      <SingleNote />
      <AddUser /> <br />
      <UserLogin /> <br /> */}
    </Fragment>
  );
}

export default App;
