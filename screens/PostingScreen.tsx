import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView } from "react-native";
import { useState, useEffect } from 'react';
import Code from "../components/Code";
import { Language } from "prism-react-renderer";
import KeyboardToolbar from "../components/KeyboardToolbar/KeyboardToolbar";
import PostButton from "../components/PostButton";

const codeWindowPadding = 20;

function PostingScreen({ navigation }: { navigation: any }) {
  const [textContent, changeContent] = useState('');
  const [language, changeLanguage] = useState('python');
  const maxLines = 18;
  // removed ability to click outside to close keyboard
  // replace with button to close keyboard with Keyboard.dismiss()

  const toolBarCallBack = (buttonContnet: string) => {
    changeContent(textContent + buttonContnet);
  };

  const onPostPress = () => {
    changeContent('');
    navigation.navigate('MainStack', {
    });
  };



  return (
    <View style={styles.wrapper}>
      <View style={styles.toolbarView}>
        <KeyboardToolbar callback={toolBarCallBack} />
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.postButtonContainer}>
            <PostButton onPress={() => onPostPress()} />
          </View>
          <Text style={styles.text}>Create a new post!</Text>
          <View style={styles.inputContainer}>
            <View style={styles.overlay}>
              <Code code={textContent} language={language as Language} inEditor={true} />
            </View>
            <TextInput
              editable
              maxLength={1250}
              multiline={true}
              autoCorrect={false}
              autoCapitalize="none"
              importantForAutofill="no"
              textAlignVertical="top"
              style={styles.input}
              value={textContent}
              onChangeText={text => {
                const lines = text.split('\n');
                if (lines.length > maxLines) {
                  text = lines.slice(0, maxLines).join('\n');
                }
                changeContent(text);
              }}
            />
          </View>
        </KeyboardAvoidingView >
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 20,
    color: "#fff",
    paddingBottom: 20,
    marginTop: 0
  },
  inputContainer: {
    width: "100%",
    height: "70%",
  },
  input: {
    // Must keep separate, somehow the padding settings does not work
    paddingTop: codeWindowPadding,
    paddingLeft: codeWindowPadding,
    paddingRight: codeWindowPadding,
    width: "100%",
    height: "100%",
    lineHeight: 17, // value to align with overlay
    color: 'transparent',
  },
  overlay: {
    padding: codeWindowPadding,
    width: "100%",
    height: "100%",
    backgroundColor: "#252526",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 10,
  },
  toolbarView: {
    zIndex: 2
  },
  postButtonContainer: {
    position: "absolute",
    top: 50,
    right: 20
  }
});

export default PostingScreen;