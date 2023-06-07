import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "#121214",
  },
  resultText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    padding: 12,
    textAlign: "right",
    right: 32,
    fontSize: 42,
  },
  historyText: {
    color: "#FFF",
    fontSize: 20,
    marginRight: 10,
    alignSelf: "flex-end",
    right: 32,
  },
});
