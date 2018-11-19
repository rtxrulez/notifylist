import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const styles = theme => ({
  card: {
    width: 500,
    marginBottom: "15px"
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: "cover"
  },
  cardList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  cardActions: {
    flexDirection: "row-reverse"
  },
  input: {
    display: "none",
    fontSize: "20px"
  },
  inputShow: {
    display: "block"
  },
  descHide: {
    display: "none"
  },
  descGreen: {
    color: "black"
  }
});

class Cards extends React.Component {
  state = {
    taskList: {},
    editId: null
  };

  getList() {
    fetch(`http://localhost:3000/data/data.json`)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          taskList: json
        });
      });
  }

  editItem(id) {
    console.log("id", id);
    this.setState({
      editId: id
    });
  }

  _handleKeyPress(e) {
    if (e.key === "Enter") {
      console.log('e', e.target.value)
      console.log('k', e.target.dataset.key)
    }
  }

  componentDidMount() {
    console.log("test");
    this.getList();
  }

  render() {
    const { classes } = this.props;
    const { taskList, editId } = this.state;

    console.log("ddd", taskList);

    if (Object.keys(taskList).length !== 0) {
      return (
        <div className={classes.cardList}>
          {taskList.map((item, key) => {
            return (
              <Card className={classes.card} key={key}>
                <CardContent>
                  <Typography
                    className={
                      key === editId ? classes.descHide : classes.descGreen
                    }
                    align="left"
                    component="p"
                  >
                    {item.desc}
                  </Typography>
                  <Input
                    defaultValue={item.desc}
                    className={
                      key === editId ? classes.inputShow : classes.input
                    }
                    inputProps={{
                      "aria-label": "Description"
                    }}
                    data-key={key}
                    onKeyPress={this._handleKeyPress}
                  />
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <IconButton
                    className={classes.button}
                    aria-label="Delete"
                    onClick={() => this.editItem(key)}
                  >
                    <EditIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </div>
      );
    } else {
      return <div> Список пуст </div>;
    }
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
