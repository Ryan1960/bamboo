import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory, useLocation } from "react-router";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

NavBar.propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default function NavBar(props) {
  return (
    <Router>
      <NavBarContent {...props} />
    </Router>
  );
}

function NavBarContent(props) {
  const { tabs } = props;
  const classes = useStyles();
  const history = useHistory();

  const getSelectedTabIndexFromPath = (mess) => {
    console.log(mess);
    return tabs.findIndex((tab) => tab.path === history.location.pathname);
  };

  const [selectedTabIndex, setSelectedTabIndex] = useState(() =>
    getSelectedTabIndexFromPath("init")
  );

  history.listen(() =>
    setSelectedTabIndex(getSelectedTabIndexFromPath("url change"))
  );

  const handleChange = (_, newValue) => {
    history.push(tabs[newValue].path);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedTabIndex]);

  return (
    <div className={classes.root} className="navbar">
      <AppBar position="static">
        <Tabs
          value={selectedTabIndex}
          onChange={handleChange}
          aria-label="simple tabs example"
          centered
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} style={{ color: "white" }} />
          ))}
        </Tabs>
      </AppBar>

      <Switch>
        {tabs.map((tab, index) => (
          <Route key={index} exact path={tab.path}>
            <div style={{ margin: 20 }}> {tab.component}</div>
          </Route>
        ))}
      </Switch>
    </div>
  );
}
