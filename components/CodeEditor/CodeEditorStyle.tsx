import { StyleSheet } from "react-native";
import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";

const styles = StyleSheet.create({
  container: {
    //backgroundColor: "red",
    flex: 0,
    //padding: 5,
    backgroundColor: "#252526",
    borderRadius: 10,
    width: "100%",
    //height: 520,
    height: "60%",
    flexGrow:0,
    overflow: "hidden",
  },

  scrollContent: {
    flex: 0,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    //backgroundColor: "#252526",
    borderRadius: 10,
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  input: {
    width: "100%",
    height: "100%",
    padding: 20,
    fontSize: 14,
    //color: "black",
    color: "transparent",
    lineHeight: 14, // value to align with overlay
    fontFamily: "Hack",
    textAlignVertical: "top",
  },
});

//I'd guess the problem is due to the row style in Code
///mkae all rows on same postion with abosulte, then translate down by row number*heigth


export default styles;