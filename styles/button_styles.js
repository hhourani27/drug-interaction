import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    padding: 20,
  },
  buttonPressed: {
    backgroundColor: "#F6E7E5",
  },
  iconPart: {
    flex: 1 / 3,
    flexDirection: "row",
  },
  icon: {
    padding: 2,
    color: "#A09DAE",
  },
  textPart: {
    flex: 2 / 3,
  },
  text: {
    color: "#343047",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
  },
});
