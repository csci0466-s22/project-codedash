import styles from "./KeyboardToolbarStyle";
import { View, Text, Keyboard, Dimensions, KeyboardAvoidingView } from 'react-native';
import { useState, useEffect } from 'react';

const windowHeight = Dimensions.get('window').height;
function KeyboardMenu() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  let barContent = null
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', (e) => {
        setKeyboardVisible(true);
        setKeyboardHeight(e.endCoordinates.height);
      });
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', () => {
        setKeyboardVisible(false);
        setKeyboardHeight(0);
      });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    }
  }, []);

  if (keyboardHeight == 0) {
    barContent = null
  } else {
    barContent = <View style={[styles.bar, {top: windowHeight - keyboardHeight-50}]}>
      <Text>tab</Text>
    </View>
  }

  return <View style={styles.avoidView}>
    {barContent}
  </View>;
}


export default KeyboardMenu;