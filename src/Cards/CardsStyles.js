export const styles = theme => ({
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
    padding: "15px",
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
    position: "fixed",
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
  },
  msg: {
    padding: `0 ${theme.spacing.unit * 3}px`
  }
});
