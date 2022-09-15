import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "contents",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 30,
    },
  },
  previewBox: {
    width: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    cursor: "pointer",
  },
  tagsBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 24,
  },
  tagText: {
    padding: "6px 10px",
    marginRight: "8px",
    fontSize: "10px",
    fontWeight: 700,
    lineHeight: "12px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "white",
    marginBottom: 8,
  },
  titleName: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "23px",
    textAlign: "left",
    wordBreak: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    maxHeight: "68px",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical"
  },
  green: {
    backgroundColor: "#A1AD95",
  },
  button: {
    width: "300px",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "22px",
    textAlign: "center",
    backgroundColor: "#1e3a3a",
    color: "white",
    borderRadius: "0px",
    textDecoration: "none",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#1e3a3a",
    },
  },
  limitText: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "23px",
    textAlign: "center",
    marginTop: "16px",
    marginBottom: "160px",
    color: "#AEA691",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "32px",
    },
  },
  productBox: {
    display: "flex",
    paddingBottom: 10,
    position: "relative",
  },
  productBoxFirst :{
    paddingLeft: 0,
  },
  ordinalsBox: {
    top: "0",
    left: "12px",
    width: "32px",
    height: "40px",
    position: "absolute",
    backgroundColor: "#000000",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: "22px",
      height: "27px",
      top: "8px",
      left: "16px",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "19px",
      textAlign: "center",
    },
  },
  commentText: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "14px",
    textAlign: "left",
  },
  rating: {
    fontSize: 15,
    alignItems: "center",
  },
  price: {
    fontSize: "18px",
    color: "#000000",
    lineHeight: "22px",
    fontWeight: 600,
  },
  discountPercent: {
    "& p": {
      fontSize: "18px",
      color: "#D20000",
      lineHeight: "22px",
      fontWeight: 600,
    },
    marginLeft: "auto",
  },
  salePrice: {
    marginLeft: "15px",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#7B7B7B",
    textDecoration: "line-through",
    textDecorationColor: "#7B7B7B",
  },
  priceBox: {
    flexDirection: "row",
    display: "flex",
    height: "38px",
    alignItems: "baseline",
    marginTop: "10px",
    marginBottom: "26px",
  },
}));