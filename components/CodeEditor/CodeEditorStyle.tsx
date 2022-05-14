import { StyleSheet } from "react-native";
import { CALLBACK_TYPE } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#252526",
    borderRadius: 10,
    width: "100%",
    height: "60%",
    flexGrow: 0,
    overflow: "hidden",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    shadowColor: "#000",
    borderColor: "#333333",
    borderWidth: 1,
  },

  scrollContent: {
    flex: 0,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    minHeight: "60%",
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
    zIndex: 100,
  },
  input: {
    width: "100%",
    height: "100%",
    padding: 20,
    paddingLeft: 22,
    paddingTop: 20,
    color: "transparent",
    lineHeight: 16,
    fontSize: 14,
    fontFamily: "Hack",
    textAlignVertical: "top",
    zIndex: 2,
  },
});


export default styles;