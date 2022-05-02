
import { TouchableOpacity, View } from "react-native";
import NativeIconicIcon from "../NativeIconicIcon";
import styles from "./PostButtonStyle";


function PostButton({ onPress }: { onPress: () => void }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconOutline}>
        <NativeIconicIcon name="send" size={26} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}


export default PostButton;


