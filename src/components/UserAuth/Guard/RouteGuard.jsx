import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

// props are recieved from rrd
const RouteGuard = ({ path, component }) => {
  const userToken = localStorage.getItem("userToken");

  try {
    const tokenDecoded = jwt_decode(userToken);
    console.log(tokenDecoded);
  } catch (error) {
    localStorage.clear();
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <Route path={path} component={component} />
    </Fragment>
  );
};

export default RouteGuard;
