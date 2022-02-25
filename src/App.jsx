import {Fragment} from 'react';
import NavBar from './components/Main/NavBar';
import Home from './components/Main/Home';
import AddUser from './components/UserAuth/Register/AddUser';
import RouteGuard from './components/UserAuth/Guard/RouteGuard';
import UserLogin from './components/UserAuth/Login/UserLogin';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {


  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <RouteGuard path="/home" component={Home} />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/register" component={AddUser} />
          <Route path="/login" component={UserLogin} />
          <Route path="*"  component={NotFound}/>
        </Switch>
    </Fragment>
  );
}

export default App;
