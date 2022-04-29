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
    height:150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333333",
    overflow: "hidden",
  },
  CardHeader: {
    flex: 0,
    flexDirection: "row",
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    alignContent: "center",
    justifyContent: "space-between",
  },
  LikeCount: {
    marginTop: 10,
    marginRight: 20,
    color: '#ffffff',
  }

});


export default styles;