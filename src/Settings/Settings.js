import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Switch from "@material-ui/core/Switch";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 0
  },
  settingsPage: {
    marginTop: theme.spacing.unit * 2
  },
  legend: {
    textAlign: "left",
    color: "black"
  }
});

class Settings extends React.Component {
  state = {
    Settings: {
      msgNotify: null,
      playSound: null
    }
  };

  handleChange(name) {
    console.log("name: ", name);
  }

  render() {
    const { classes } = this.props;
    const { popupNotify, playSound } = this.state.Settings;

    console.log("s", this.state.Settings);
    return (
      <div className={classes.settingsPage}>
        <FormControl component="fieldset">
          <FormLabel className={classes.legend} component="legend">
            Настройка уведомлений
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  name="playSound"
                  checked={playSound}
                  onChange={this.handleChange("playSound")}
                  value="playSound"
                />
              }
              label="Уведомлять звуковым сообщением"
            />
            <FormControlLabel
              control={
                <Switch
                  name="popupNotify"
                  checked={popupNotify}
                  onChange={this.handleChange("popupNotify")}
                  value="popupNotify"
                />
              }
              label="Уведомлять всплывающим сообщением"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Settings);
