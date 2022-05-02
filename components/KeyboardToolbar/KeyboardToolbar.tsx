import styles from "./KeyboardToolbarStyle";
import { View, Text, Keyboard, Dimensions, KeyboardAvoidingView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import useKeyboardOpen from "../../lib/hooks/useKeyboardOpen";
import useKeyboardHeight from "../../lib/hooks/useKeyboardHeight";
import Highlight from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";


//TODO: add coloring for the buttons



const windowHeight = Dimensions.get('window').height;
function KeyboardMenu({ callback }: { callback: (buttonContent: string) => void }) {
  const keyboardVisible = useKeyboardOpen();
  const keyboardHeight = useKeyboardHeight();



  //let's grab the highlight color


  const generateButton = (buttonContent: string, index: number) => {
    return (
      <TouchableOpacity 
          key={index}
          style={styles.button}
          onPress={() => {
            console.log(buttonContent);
            callback(buttonContent);
          }}
        >
          <Text style={styles.buttonText}>{buttonContent}</Text>
      </TouchableOpacity>
    );
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
    'else',
    'lambda(x)',
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
  ];

  //const height = (!keyboardVisible) ? 50 : 0;
  const top = (!keyboardVisible) ? 0 : windowHeight - keyboardHeight - 50;


  const barContent = (
    <ScrollView
      pointerEvents="box-none"
      keyboardShouldPersistTaps="handled"
      style={[styles.bar, { top: top}]}
      contentContainerStyle={styles.barContent}
      horizontal={true}
      alwaysBounceHorizontal
    >
      {buttonContents.map((buttonContent, index) =>
        generateButton(buttonContent, index)
      )}
    </ScrollView>
  );

  return(
    <>
      {(keyboardVisible) ? barContent : null}
    </>
  );
}


export default KeyboardMenu;