import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Login from "./Log";
import Register from "./Register";
import Welcome from "./Welcome";

export default () => {
  // 'database' for users and their passwords
  const [database, setdatabase] = useState([
    {
      email: "sameemadel@gmail.com",
      password: "hadiSA345318",
      Cpassword: "hadiSA345318",
    },
    {
      email: "samevfree@gmail.com",
      password: "hadiSA@345318",
      Cpassword: "hadiSA@345318",
    },
  ]);

  // method to add a new user to database (gets called inside Register component below as a prop)
  const addToData = (data) => {
    setdatabase([...database, data]);
  };

  // handling a login request

  const comparePassword = (data) => {
    const compare = database.some(
      (arr) => arr.email === data.email && arr.password === data.password
    );
    if (compare) {
      window.location.replace("http://localhost:3000/welcome");
    } else {
      alert("please try again");
    }
  };

  // rendering whole application
  return (
    <Router>
      <Switch>
        <Route
          path="/Login"
          render={(props) => (
            <Login
              {...props}
              comparePassword={(data) => comparePassword(data)}
            />
          )}
        />
        <Route path="/welcome" render={() => <Welcome />} />
        <Route
          exact
          path="/"
          render={(props) => (
            <Register {...props} addToData={(data) => addToData(data)} />
          )}
        />
      </Switch>
    </Router>
  );
};
