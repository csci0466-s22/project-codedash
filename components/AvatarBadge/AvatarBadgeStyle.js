import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    borderRadius: 30,
    borderColor: "#ffffff",
    height: 42,
    width: 180,
    overflow: "hidden",
  },
  avatar: {
    position: "relative",
    left: 0,
    display: "flex",
    alignItems: "flex-start",
  },
  nameBadge1: { // name first
    flex: 1, //needed to truncate text
    paddingHorizontal: 6,
    fontSize: 16,
    color: "#ffffff",
    alignItems: "flex-end",
    paddingTop: 5,
  },
  nameBadge2: { // badge first
    flex: 1, //needed to truncate text
    paddingHorizontal: 6,
    fontSize: 16,
    color: "#ffffff",
    alignItems: "flex-start",
    paddingTop: 5,
  },
});


export default styles;