import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 0
  }
};

class Header extends React.Component {
  state = {
    isMenuOpen: null
  };

  handleMenuOpen = event => {
    this.setState({ isMenuOpen: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ isMenuOpen: null });
  };

  render() {
    const { classes } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Список напоминаний
            </Typography>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-owns={isMenuOpen ? "burger-menu" : null}
              aria-haspopup="true"
              onClick={this.handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="burger-menu"
              anchorEl={isMenuOpen}
              open={Boolean(isMenuOpen)}
              onClose={this.handleMenuClose}
            >
              <MenuItem
                to="/settings"
                button
                component={Link}
                onClick={this.handleMenuClose}
              >
                Настройки
              </MenuItem>
              <MenuItem
                to="/"
                button
                component={Link}
                onClick={this.handleMenuClose}
              >
                Список напоминаний
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
