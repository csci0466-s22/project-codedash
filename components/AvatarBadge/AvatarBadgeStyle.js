import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ffffff",
    height: 42,
    width: 180,
    overflow: "hidden",
  },
  avatar: {
    position: "relative",
    left: -2,
    display: "flex",
    alignItems: "flex-start",
  },
  nameBadge: {
    flex: 1, //needed to truncate text
    paddingHorizontal: 0,
    paddingRight: 4,
    fontSize: 16,
    color: "#ffffff",
  },
});


export default styles;