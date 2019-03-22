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
// import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmAdd from "@material-ui/icons/AlarmAdd";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addAlarm, alarmAddList } from "../alarm";

// import { addComment } from "../redux/actions/commentsActions";
import {
  addNotify,
  deleteNotify,
  editNotify,
  timerAdd
} from "../redux/actions/notifyActions";
import store from "../redux/store";
import { styles } from "./CardsStyles";

function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    taskList: this.props.taskList,
    editId: null
  };

  // getList() {
  //   fetch(`http://localhost:3000/data/data.json`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(json => {
  //       this.setState({
  //         taskList: json
  //       });
  //     });
  // }

  closeEdit() {
    const { editNotify } = this.props;

    this.setState({
      editId: null
    });

    editNotify(this.state.taskList);
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
    let { deleteNotify } = this.props;
    let d = deleteNotify(parseInt(key));
    console.log("d", immutableDelete(this.state.taskList, key));
    this.setState({
      taskList: [...immutableDelete(this.state.taskList, key)]
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

  timerAdd(key) {
    const { timerAdd } = this.props
    const { taskList } = this.state;
    taskList[key].started = true;
    this.setState(
      {
        taskList: taskList
      },
      () => {
        timerAdd(this.state.taskList);
        addAlarm(taskList[key].time)
      }
    );
  }

  componentDidMount() {
    // запуск будильников при старте страницы
    alarmAddList(this.props.taskList);
    if (
      localStorage.getItem(
        "taskList"
      ) !== null &&
      localStorage.getItem("taskList")
        .length
    ) {
      console.log(
        "Есть локальный список"
      );
      let taskList = JSON.parse(
        localStorage.getItem(
          "taskList"
        )
      );
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
    // localStorage.setItem("taskList", JSON.stringify(nextState.taskList));
  }

  addNewItem() {
    const { taskList } = this.state;

    let date = new Date();

    let hour = new Date().getHours();
    let minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    const newItem = {
      desc: "Таймер",
      time: `${hour}:${minute}`,
      isDone: false
    };

    // console.log("newItem", taskList.push(newItem));

    this.setState({
      taskList: [...taskList, newItem]
    });
    // addMyNotify(newItem);
    this.editItem(taskList.length);
  }

  render() {
    const { classes } = this.props;
    const { editId, taskList } = this.state;

    console.log("Object.keys(taskList).length", Object.keys(taskList).length);
    let listDom = (
      <div className={classes.msg}>
        <h1> Список пуст </h1>
      </div>
    );

    if (Object.keys(taskList).length !== 0) {
      listDom = (
        <div className={classes.cardList}>
          {taskList.map((item, key) => {
            let isEdit = key === editId;
            const { started } = item;
            return (
              <Card
                className={classNames(
                  isEdit
                    ? [classes.card, classes.card2].join(" ")
                    : classes.card,
                  started ? classes.cardStarted : ""
                )}
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

                {!started ? (
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
                    <IconButton
                      className={classes.timerAdd}
                      onClick={() => this.timerAdd(key)}
                    >
                      <AlarmAdd />
                    </IconButton>
                  </CardActions>
                ) : null}
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
          className={classes.fab}
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
    taskList: state.notify
  };
}

const mapDispatchToProps = {
  addMyNotify: addNotify,
  deleteNotify: deleteNotify,
  editNotify: editNotify,
  timerAdd: timerAdd
};

const CardWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Cards));

export default CardWithRedux;

// export default withStyles(styles)(Cards);
