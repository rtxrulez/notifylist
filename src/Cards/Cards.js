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
    maxWidth: 500
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
    flexDirection: 'row-reverse'
  }
});

class Cards extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.cardList}>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="left" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <IconButton className={classes.button} aria-label="Delete">
              <EditIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
