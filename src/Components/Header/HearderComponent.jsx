import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Notification from "./ActionTab/Notification";
import BlogPost from "../BodyComponent/StudentList";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import StudentList from "../BodyComponent/StudentList";
import SignUp from "../BodyComponent/Auth/Signup";
import SignIn from "../BodyComponent/Auth/SignIn";

export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    console.log("Jai siya ram");
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
    console.log("prem se bolo Jai siya ram");
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/details' render={() => <StudentList />} />
          <Route exact path='/signup' render={() => <SignUp />} />
          <Route exact path='/signin' render={() => <SignIn />} />
          <Route exact path='/notification' render={() => <Notification />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
