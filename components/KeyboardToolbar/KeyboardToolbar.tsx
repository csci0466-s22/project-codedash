import styles from "./KeyboardToolbarStyle";
import { View, Text, Keyboard, Dimensions, KeyboardAvoidingView, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";

const windowHeight = Dimensions.get('window').height;
function KeyboardMenu({ callback }: { callback: (buttonContent: string) => void }) {
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

  const generateButton = (buttonContent: string, index: number) => {
    return (
      <View key={index} style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => callback(buttonContent)}
        >
          <Text style={styles.buttonText}>{buttonContent}</Text>
        </TouchableOpacity>
      </View>

    )
  };

  const buttonContents = [
    ':',
    '(',
    ')',
    '=',
    'def',
    'return',
    'for',
    'if',
    'else'
  ];

  if (keyboardHeight == 0) {
    barContent = null
  } else {
    barContent = <View style={[styles.bar, { top: windowHeight - keyboardHeight - 50 }]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => callback('    ')} >
          <Text style={styles.buttonText}>Tab</Text>
        </TouchableOpacity>
      </View>
      {buttonContents.map((buttonContent, index) => generateButton(buttonContent, index))}
    </View>
  }

  return <View style={styles.avoidView}>
    {barContent}
  </View>;
}


export default KeyboardMenu;