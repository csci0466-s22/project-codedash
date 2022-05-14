import styles from "./KeyboardToolbarStyle";
import { View, Text, Keyboard, Dimensions, KeyboardAvoidingView, Button, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import useKeyboardOpen from "../../lib/hooks/useKeyboardOpen";
import useKeyboardHeight from "../../lib/hooks/useKeyboardHeight";
import Highlight, { Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/okaidia";
import { Toolbar, ToolbarItem } from "../../lib/types/toolbar";
import { LanguageToolbarMapping } from "../../lib/utils";


//TODO: add coloring for the buttons
interface KeyboardToolbarProps {
  callback: (buttonContent: string) => void;
  language?: Language;
}
const windowHeight = Dimensions.get('window').height;



function KeyboardToolbar({ callback, language="python" }: KeyboardToolbarProps) {
  const keyboardVisible = useKeyboardOpen();
  const keyboardHeight = useKeyboardHeight();


  const generateButton = (buttonContent: ToolbarItem, index: number) => {
    return (
      <TouchableOpacity 
          key={index}
          style={styles.button}
          onPress={() => {
            callback(buttonContent.value);
          }}
        >
          <Text style={styles.buttonText}>{buttonContent.label}</Text>
      </TouchableOpacity>
    );
  };

  const toolbar = LanguageToolbarMapping[language] as Toolbar;
  const buttons = toolbar.items.map((item, index) => {
    return generateButton(item, index);
  });

  const top = (!keyboardVisible) ? 0 : windowHeight - keyboardHeight - 60;


  const barContent = (
    <ScrollView
      pointerEvents="box-none"
      keyboardShouldPersistTaps="handled"
      style={[styles.bar, { top: top}]}
      contentContainerStyle={styles.barContent}
      horizontal={true}
      alwaysBounceHorizontal

    >
      {buttons}
    </ScrollView>
  );

  return(
    <>
      {(keyboardVisible) ? barContent : null}
    </>
  );
}


export default KeyboardToolbar;