import styles from "./KeyboardToolbarStyle";
import { View, Text, Keyboard, KeyboardAvoidingView, ViewPagerAndroidBase } from 'react-native';
import { useState, useEffect } from 'react';


function KeyboardMenu() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  let barContent = null
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow', () => {
        setKeyboardVisible(true);

      });
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide', () => {
        setKeyboardVisible(false);
      });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    }
  }, []);

  if (keyboardVisible) {
    barContent = <View style={styles.bar}>
      <Text>tab</Text>
    </View>;
  } else {
    barContent = null;
  }

  return <KeyboardAvoidingView style={styles.avoidView}
    behavior='position'
  >
    {barContent}
  </KeyboardAvoidingView>;
}


export default KeyboardMenu;