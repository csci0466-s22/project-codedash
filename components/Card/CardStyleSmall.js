import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

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
    width: windowWidth * 0.88,
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
  CardHeaderLeft: {
    flex: 0,
    flexDirection: "row",
    alignItems: 'center',
  },
  userName: {
    fontSize: 15,
    color: "#ffffff",
    marginLeft: 10,
  },
  CardHeaderRight: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  LikeCount: {
    marginRight: 20,
    color: '#ffffff',
    justifyContent: 'flex-end'
  },
  LikeCountBold: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  CodeContainer: {
    padding: 20
  },
  bottomView: {
  },
  modalView: {
  },
  textStyle: {
  },
  textWrapper: {
  },
  doneButton: {
  },
  buttonWrapper: {
  },
  buttonStyle: {
  },
  buttonTextStyle: {
  },
  dismissView: {
  }
});


export default styles;