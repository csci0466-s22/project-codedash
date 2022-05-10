import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView, Platform } from "react-native";
import { useState, useEffect, useRef } from 'react';
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
  const [cursorPosition, updateCursorPosition] = useState({ start: 0, end: 0 });

  //require font
  let [fontsLoaded] = useFonts({
    Hack: require("../assets/fonts/Hack-Regular.ttf"),
  });


  const toolBarCallBack = (buttonContent: string) => {
    //changeContent(textContent + buttonContent);
    //cursor position is an index, add text at index
    changeContent(
      textContent.substring(0, cursorPosition.start) +
        buttonContent +
        textContent.substring(cursorPosition.start)
    );

    //change cursor position to end of added token
    updateCursorPosition({
      start: cursorPosition.start + buttonContent.length,
      end: cursorPosition.end + buttonContent.length,
    });
  };

  const onPostPress = () => {
    changeContent('');
    navigation.navigate('MainStack', {
    });
  };


  return (
    <SafeAreaView style={styles.wrapper} pointerEvents="box-none">
      <KeyboardToolbar callback={toolBarCallBack} />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.postButtonContainer}>
          <PostButton onPress={() => onPostPress()} />
        </View>
        <Text style={styles.text}>Create a new post!</Text>
        <CodeEditor
          code={textContent}
          language={language as Language}
          updateCode={(code: string) => changeContent(code)}
          cursorPosition={cursorPosition}
          updateCursorPosition={(position: { start: number; end: number }) =>
            updateCursorPosition(position)
          }
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
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