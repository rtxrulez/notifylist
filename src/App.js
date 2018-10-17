import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Cards from "./Cards/Cards";
import Settings from "./Settings/Settings";

const Home = () => <p>Home page</p>;
const About = () => <p>About page</p>;
const Topics = () => <p>Topics page</p>;

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
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <div className="App">
          {/* <Header /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
