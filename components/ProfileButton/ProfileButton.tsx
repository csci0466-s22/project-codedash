
import { TouchableOpacity, View, Text } from "react-native";
import NativeIconicIcon from "../NativeIconicIcon";
import styles from "./ProfileButtonStyle";


function ProfileButton({ onPress }: { onPress: () => void }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.iconOutline}>
        <Text>Profile</Text>
      </View>
    </TouchableOpacity>
  );
}


export default ProfileButton;


