 import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
 CardContainer: {
    flex: 0,
    backgroundColor: "#252526",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    shadowColor: "#000",
    width: "90%",
    height: 520,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333333",
    overflow: "hidden",
  },
  CardHeader: {
    flex: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#38383B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    shadowColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  LikeCount: {
    color: 'white'
  },
});


export default styles;