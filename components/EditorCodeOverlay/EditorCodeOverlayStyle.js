import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    //backgroundColor: "transparent",
    overflow: "hidden",
    borderWidth: 1,
    //borderColor: "white",
    borderColor: "transparent",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    position: "absolute",
    top: 3,
    height: 14,
    margin: 0,
    padding: 0,
  },
});

export default styles;