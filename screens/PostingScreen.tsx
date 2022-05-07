import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Platform } from "react-native";
import { useState, useEffect } from 'react';
import Code from "../components/Code";
import { Language } from "prism-react-renderer";
import KeyboardToolbar from "../components/KeyboardToolbar/KeyboardToolbar";
import PostButton from "../components/PostButton";
import useKeyboardOpen from "../lib/hooks/useKeyboardOpen";
import CodeEditor from "../components/CodeEditor";
import { useFonts } from "expo-font";

const codeWindowPadding = 20;

function PostingScreen({ navigation }: { navigation: any }) {
  const [textContent, changeContent] = useState('');
  const [language, changeLanguage] = useState('python');
  const maxLines = 18;
  // removed ability to click outside to close keyboard
  // replace with button to close keyboard with Keyboard.dismiss()

  //require font
  let [fontsLoaded] = useFonts({
    Hack: require("../assets/fonts/Hack-Regular.ttf"),
  });

  

  const keyboardOpen = useKeyboardOpen();

  const inputContainerHeight = (!keyboardOpen) ? '70%' : 250;

  const toolBarCallBack = (buttonContent: string) => {
    changeContent(textContent + buttonContent);
  };

  const onPostPress = () => {
    changeContent('');
    navigation.navigate('MainStack', {
    });
  };


  const keyboardType = (Platform.OS === 'ios') ? 'default' : 'visible-password';


  return (
    <View style={styles.wrapper} pointerEvents="box-none">
      <KeyboardToolbar callback={toolBarCallBack} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.postButtonContainer}>
          <PostButton onPress={() => onPostPress()} />
        </View>
        <Text style={styles.text}>Create a new post!</Text>
        <CodeEditor 
          code={textContent} 
          language={language as Language}
          updateCode={(code: string) => changeContent(code)}
        />
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#121212",
  },
  container: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    paddingBottom: 20,
    marginTop: 0,
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    //height: "70%",
    //height: 250,
  },
  input: {
    // Must keep separate, somehow the padding settings does not work
    paddingTop: codeWindowPadding,
    paddingBottom: codeWindowPadding,
    paddingLeft: codeWindowPadding,
    paddingRight: codeWindowPadding,
    width: "100%",
    height: "100%",
    lineHeight: 19, // value to align with overlay
    color: "transparent",
  },
  overlay: {
    padding: codeWindowPadding,
    width: "100%",
    height: "100%",
    backgroundColor: "#252526",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 10,
    lineHeight: 19,
  },
  toolbarView: {
    zIndex: 2,
  },
  postButtonContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});

export default PostingScreen;




{/* <View style={[styles.inputContainer, { height: inputContainerHeight }]}>
  <View style={styles.overlay}>
    <Code code={textContent} language={language as Language} inEditor={true} />
  </View>
  <TextInput
    editable
    maxLength={1250}
    multiline={true}
    autoCorrect={false}
    autoCompleteType="off"
    autoCapitalize="none"
    disableFullscreenUI={true}
    importantForAutofill="no"
    keyboardType={keyboardType}
    returnKeyType="none"
    textAlignVertical="top"
    style={styles.input}
    value={textContent}
    onChangeText={(text) => {
      const lines = text.split("\n");
      if (lines.length > maxLines) {
        text = lines.slice(0, maxLines).join("\n");
      }
      changeContent(text);
    }}
  />
</View>; */}