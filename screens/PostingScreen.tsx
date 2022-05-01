import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect } from 'react';
import Code from "../components/Code";
import { Language } from "prism-react-renderer";

const codeWindowPadding = 20;

/*

*/

function PostingScreen({ navigation }: { navigation: any }) {
  const [textContent, changeContent] = useState('');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text}>New Posting Screen</Text>
        <View style={styles.inputContainer}>
          <View style={styles.overlay}>
            <Code code={textContent} language={"python" as Language} />
          </View>
          <TextInput
            editable
            maxLength={9999}
            multiline={true}
            autoCorrect={false}
            autoCapitalize="none"
            textAlignVertical="top"
            style={styles.input}
            value={textContent}
            onChangeText={text => changeContent(text)}
          />
        </View>
      </View >
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#211D33",
  },
  button: {
    position: "absolute",
    top: 50,
    left: 20,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  inputContainer: {
    width: "100%",
    height: "75%",
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  input: {
    // Must keep separate, somehow the padding settings does not work
    paddingTop: codeWindowPadding,
    paddingLeft: codeWindowPadding,
    paddingRight: codeWindowPadding, 
    width: "100%",
    height: "100%",
    lineHeight: 17, // value to align with overlay
    color: 'transparent'
  },
  overlay: {
    padding: codeWindowPadding,
    width: "100%",
    height: "100%",
    backgroundColor: "#252526",
    position: "absolute"
  }
});

export default PostingScreen;