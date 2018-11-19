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
  }
});

class Cards extends React.Component {
  state = {
    taskList: {}
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

  componentDidMount() {
    console.log("test");
    this.getList();
  }

  render() {
    const { classes } = this.props;
    const data = this.state.taskList;

    console.log("ddd", data);

    if (Object.keys(data).length !== 0) {
      return (
        <div className={classes.cardList}>
          {data.map((item, key) => {
            return (
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="left" component="p">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <IconButton className={classes.button} aria-label="Delete">
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
