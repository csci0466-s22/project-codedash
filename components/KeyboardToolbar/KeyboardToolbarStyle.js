import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avoidView: {},
  bar: {
    backgroundColor: "#1C1C17",
    opacity: 0.9,
    position: "absolute",
    width: "100%",
    height: 60,
    paddingLeft: 10,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    flex: 0,
    elevation: 5,
    overflow: "hidden",
    zIndex: 10,
  },
  barContent: {
    paddingLeft: 5,
    paddingRight: 25,
    flex: 0,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  button: {
    height: "70%",
    borderWidth: 1,
    borderColor: "#333333",
    backgroundColor: "#38383B",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginVertical: 5,
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    shadowColor: "#000",
  },
  buttonText: {
    marginHorizontal: 5,
    fontSize: 15,
    marginHorizontal: 5,
    fontWeight: "bold",
    color: "#fafafa",
  },
});

export default styles;