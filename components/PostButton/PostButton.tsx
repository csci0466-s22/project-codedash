
import { TouchableOpacity, View } from "react-native";
import NativeIconicIcon from "../NativeIconicIcon";
import styles from "./PostButtonStyle";


function PostButton({ onPress, disabled }: { onPress: () => void, disabled: boolean }) {

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={styles.iconOutline}>
        <NativeIconicIcon name="send" size={26} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}


export default PostButton;


