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
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    // Magic numbers (>_<)
    height: Platform.OS === "ios" ? 16 : 16.348,
    width: "100%",
    borderWidth: 1,
    position: "relative",
    top: Platform.OS === "ios" ? -1 : 0,
    left: -1,
    borderColor: "transparent",
  },
});

export default styles;