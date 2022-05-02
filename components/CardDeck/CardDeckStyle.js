 import { StyleSheet } from "react-native";


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
  }
});


export default styles;