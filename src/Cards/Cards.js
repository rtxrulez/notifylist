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
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addComment } from "../redux/actions/commentsActions";


const styles = theme => ({
  fab: {
    display: 'block'
  },
  card: {
    width: 500,
    marginBottom: "15px"
  },
  card2: {
    backgroundColor: "#fff",
    borderBottom: "4px solid #3f51b5"
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
  hide: {
    display: "none"
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
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  listEmpty: {
    margin: theme.spacing.unit * 2
  },
  delete: {},
  timeInputEdit: {
    display: "block",
    textAlign: "left",
    marginTop: theme.spacing.unit * 2
  },
  timeText: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
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

  closeEdit() {
    this.setState({
      editId: null
    });
  }

  editItem(key) {
    console.log("k", key);
    // Если редактирование уже открыто
    if (this.state.editId !== null) {
      key = null;
    } else {
      key = parseInt(key);
    }
    this.setState({
      editId: key
    });
  }

  deleteItem(key) {
    key = parseInt(key);
    let { taskList } = this.state;
    taskList.splice(key, 1);
    this.setState({
      taskList: taskList
    });
  }

  _handleKeyPress(e) {
    if (e.key === "Enter") {
      this.closeEdit();
    }
  }

  handleChange(e) {
    let key = e.target.parentNode.dataset.key;
    let val = e.target.value;
    let { taskList } = this.state;

    taskList[key].desc = val;
    this.setState({
      taskList: taskList
    });
  }

  handleChangeTime(e) {
    let key = e.target.parentNode.parentNode.dataset.key;
    let val = e.target.value;
    let { taskList } = this.state;

    taskList[key].time = val;
    this.setState({
      taskList: taskList
    });
  }

  handleBlur(e) {
    this.closeEdit();
  }

  componentDidMount() {
    if (
      localStorage.getItem("taskList") !== null &&
      localStorage.getItem("taskList").length
    ) {
      console.log("Есть локальный список");
      let taskList = JSON.parse(localStorage.getItem("taskList"));
      this.setState({
        taskList: taskList
      });
    } else {
      console.log("нет списка");
      // json загрузка списка
      this.getList();
    }

  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("taskList", JSON.stringify(nextState.taskList));
  }

  addNewItem() {
    let { taskList } = this.state;
    let date = new Date()

    let hour = new Date().getHours();
    let minute = (date.getMinutes()<10?'0':'') + date.getMinutes()

    taskList.push({
      desc: "Таймер",
      time: `${hour}:${minute}`,
      isDone: false
    });
    this.setState({
      taskList: taskList
    });

    this.editItem(this.state.taskList.length - 1);
  }

  render() {
    const { classes } = this.props;
    const { taskList, editId } = this.state;
    console.log('props', this.props.count)

    let listDom = <h1> Список пуст </h1>;

    if (Object.keys(taskList).length !== 0) {
      listDom = (
        <div className={classes.cardList}>
          {taskList.map((item, key) => {
            let isEdit = key === editId;
            return (
              <Card
                className={
                  isEdit ? [classes.card, classes.card2].join(' ') : classes.card
                }
                key={key}
              >
                <CardContent>
                  <Typography
                    className={isEdit ? classes.descHide : classes.descGreen}
                    align="left"
                    component="p"
                  >
                    {item.desc}
                  </Typography>
                  <Input
                    defaultValue={item.desc}
                    className={isEdit ? classes.inputShow : classes.input}
                    inputProps={{
                      "aria-label": "Description"
                    }}
                    data-key={key}
                    onKeyPress={e => this._handleKeyPress(e)}
                    onBlur={e => this.handleBlur(e)}
                    onChange={e => this.handleChange(e)}
                  />

                  <Typography
                    className={isEdit ? classes.hide : classes.timeText}
                    align="left"
                    component="p"
                  >
                    {item.time}
                  </Typography>
                  <TextField
                    type="time"
                    defaultValue={item.time}
                    className={isEdit ? classes.timeInputEdit : classes.hide}
                    InputLabelProps={{
                      shrink: true
                    }}
                    inputProps={{
                      step: 300 // 5 min
                    }}
                    data-key={key}
                    onKeyPress={e => this._handleKeyPress(e)}
                    onBlur={e => this.handleBlur(e)}
                    onChange={e => this.handleChangeTime(e)}
                  />
                </CardContent>

                <CardActions className={classes.cardActions}>
                  <IconButton
                    className={classes.button}
                    onClick={() => this.editItem(key)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    className={classes.delete}
                    onClick={() => this.deleteItem(key)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            );
          })}
        </div>
      );
    }
    return (
      <div>
        {listDom}
        <Button
          variant="fab"
          className={styles.fab}
          color="primary"
          onClick={e => {
            this.addNewItem(e);
          }}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

// Берет данные из глобального стейта и помещает в локальный
function mapStateToProps(state) {
  return {
   count: state.comments.count
  };
}

const mapDispatchToProps = {
  addComment
};

const CardWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Cards))

export default withStyles(styles)(Cards);
