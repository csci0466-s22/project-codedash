import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';


const styles = EStyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "middle",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ffffff",
    height: 42,
    width: 180,
    overflox: "hidden",
  },
  avatar: {
    flex: 0,
    position: "relative",
    left: -1,
    display: "flex",
    justifyContent: "middle",
    alignItems: "left",
  },
  nameBadge: {
    flex: 1,
    justifyContent: 'center',
    position: "relative",
    left: 40,
    top: 8,
    height: 10,
    width: 130,
    paddingHorizontal: 0,
    fontSize: 16,
    color: "#ffffff",
    textOverflow: "ellipsis",
  },
});


EStyleSheet.build();
export default styles;