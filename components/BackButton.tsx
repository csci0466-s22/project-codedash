
import { TouchableOpacity, StyleSheet, View } from "react-native";
import NativeIconicIcon from "./NativeIconicIcon";


function BackButton({ onPress }: { onPress: () => void }) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconOutline}>
        <NativeIconicIcon name="arrow-back-outline" size={26} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  iconOutline: {
    width: 80,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default BackButton;


