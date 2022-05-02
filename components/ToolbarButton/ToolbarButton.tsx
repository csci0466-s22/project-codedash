import { View, TouchableOpacity, Text } from "react-native";
import styles from "./ToolbarButtonStyle";


function ToolbarButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text>Tab</Text>
    </TouchableOpacity>);
}

export default ToolbarButton;
