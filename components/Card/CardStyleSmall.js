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
    width: "90%",
    elevation: 4,
    shadowColor: "#000",
    height:150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333333",
    overflow: "hidden",
    marginBottom: 30,
    marginHorizontal: 20,
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
  AvatarBadge: {
    marginTop: 50,
  },
  CardHeaderRight: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  LikeCount: {
    marginTop: 10,
    marginRight: 20,
    color: '#ffffff',
  },
  CodeContainer: {
    padding: 20
  }

});


export default styles;