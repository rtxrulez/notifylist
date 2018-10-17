import React from "react";
import { withStyles } from "@material-ui/core/styles";

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

class Settings extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Settings
      </div>
    );
  }
}


export default withStyles(styles)(Settings);
