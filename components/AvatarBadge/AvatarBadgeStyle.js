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
  nameBadge: {
    flex: 1, //needed to truncate text
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#ffffff",
  },
});


export default styles;