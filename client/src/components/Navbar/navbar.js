import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Avatar,
  Button,
  Paper,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import makeStyles from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../constants/actionType";

const Navbar = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("Authentication"))
  );

  const salary = localStorage.getItem("Salary");
  const cost = localStorage.getItem("Cost");

  const Profit = salary - cost;

  const Logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("Authentication")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h4"
          align="center"
        >
          Telexar Test App
        </Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </div>

      <Paper className={classes.paper} elevation={3}>
        {user?.result.name && <h4>Your Net profit is Rs.{Profit}</h4>}
      </Paper>

      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          {user?.result.name && (
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
          )}

          <Typography className={classes.userName} variant="h6">
            {user?.result.name}
          </Typography>
          {!user?.result.name ? (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          ) : (
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={Logout}
            >
              Log Out
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
