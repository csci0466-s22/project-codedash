import { Dimensions, StyleSheet } from "react-native";
import variables from "../../lib/styles/__variables";

const styles = StyleSheet.create({
 container: {
 },
 swipeCard: {
    position: "absolute",
    top: -240,
    left: -172,
  },
  redCue: {
    position: "absolute",
    top: -375,
    left: -900,
    width: 800,
    height: 800,
    borderRadius: 400,
    backgroundColor: "red",
    zIndex: 10,
  },
  greenCue: {
    position: "absolute",
    top: -375,
    left: 100,
    width: 800,
    height: 800,
    borderRadius: 400,
    backgroundColor: "green",
    zIndex: 10,
  },
  noPosts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    backgroundColor: variables.$backgroundColor
  },
  noPostsText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: variables.$primaryText,
  },
});


export default styles;