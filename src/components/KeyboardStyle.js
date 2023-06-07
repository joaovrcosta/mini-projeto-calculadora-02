import { StyleSheet } from "react-native";

export default StyleSheet.create({
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "#8257e5",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 60,
    flex: 2,
  },
  buttonOther: {
    backgroundColor: "#996dff",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90,
    minHeight: 50,
    flex: 2,
  },
  textButton: {
    color: "#E34253",
    fontSize: 20,
  },
});
