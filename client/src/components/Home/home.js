import React from "react";
import {
  Container,
  Grow,
  Grid,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import makeStyles from "./styles";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Person3Icon from "@mui/icons-material/Person3";
import EmailIcon from "@mui/icons-material/Email";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import Divider from "@mui/material/Divider";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import moment from "moment";

const home = () => {
  const user = JSON.parse(localStorage.getItem("Authentication"));
  const classes = makeStyles();

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          <div style={{ color: "red" }}>
            Please Login to the system to see your Profile
          </div>
        </Typography>
      </Paper>
    );
  }
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h3" align="center">
        My Profile
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <InsertEmoticonIcon />
        </Avatar>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person3Icon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Full Name"
              secondary={user?.result.name ? user?.result.name : "-"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Email"
              secondary={user?.result.email ? user?.result.email : "-"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <DataUsageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Age"
              secondary={user?.result.age ? user?.result.age : "-"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Address"
              secondary={user?.result.address ? user?.result.address : "-"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CakeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Birth Day"
              secondary={
                user?.result.dateOfBirth ? moment(user?.result.dateOfBirth).format("MMMM Do YYYY") : "-"
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocationCityIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="City"
              secondary={user?.result.city ? user?.result.city : "-"}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PublicIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Country"
              secondary={user?.result.country ? user?.result.country : "-"}
            />
          </ListItem>
        </List>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          component={Link}
          to="/expenses"
          className={classes.submit}
        >
          Create Expenses
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/mysalary"
          className={classes.submit}
        >
          Your Salary
        </Button>
      </Paper>
    </Container>
  );
};

export default home;
