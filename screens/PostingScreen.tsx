import { View, Text, TextInput, StyleSheet, Keyboard, TouchableWithoutFeedback} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import NativeIconicIcon from '../components/NativeIconicIcon';
import {useState, useEffect} from 'react';
import Code from "../components/Code";
import { Language } from "prism-react-renderer";

function PostingScreen({navigation}: {navigation: any}) {
  const [textContent, changeContent] = useState('');
  console.log(textContent);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.text}>New Posting Screen</Text>
          
        <View style={styles.inputContainer}>
          <View style={styles.overlay}>
            <Code
              code={textContent}
              language={"python" as Language}
            />
          </View>
          <TextInput
          editable
          maxLength={4000}
          multiline={true}
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
    paddingTop: 20,
    paddingLeft: 20,
    width: "100%",
    height: "100%",
    color: 'transparent'
  }, 
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "#252526",
    position: "absolute"
  }
});

export default PostingScreen;