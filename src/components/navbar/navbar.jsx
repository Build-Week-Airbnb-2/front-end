import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import "./navbar.styles.css";
import { Link, useHistory } from "react-router-dom";
import {logOut, checkLogIn} from '../../store/actions/actions'
const NavBar = () => {
  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch()
  const history = useHistory()

  //checks if the user is logged in
    useEffect(()=>{
        dispatch(checkLogIn())
    },[])


  return (
    <AppBar position="static" id="app-bar" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" id="icon">
          <Link className="nav-link" to="/">
            Airbnb Optimal Price
          </Link>
        </IconButton>
        {loggedIn ? (
          <div id="nav-links">
            <Button color="inherit" position="end">
              <Link className="nav-link" to="/add-property">
                Add Property
              </Link>
            </Button>
            <Button color="inherit" onClick={()=> dispatch(logOut(history))}>
                Log Out
            </Button>
          </div>
        ) : (
          <div id="nav-links">
            <Button color="inherit" position="end">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
