import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import Settings from "./Settings/Settings";

const styles = {
  cardList: {
    background: "green"
  },
  cardItem: {
    marginLeft: 0
  }
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cards" component={Cards} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
