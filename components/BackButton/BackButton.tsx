
import { TouchableOpacity, View } from "react-native";
import NativeIconicIcon from "../NativeIconicIcon";
import styles from "./BackButtonStyle";


function BackButton({ onPress }: { onPress: () => void }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconOutline}>
        <NativeIconicIcon name="arrow-back-outline" size={26} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}


export default BackButton;


