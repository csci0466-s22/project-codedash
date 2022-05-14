import { View, Text, StyleSheet, KeyboardAvoidingView, SafeAreaView, Platform, Button, Modal, TouchableOpacity, Keyboard, Dimensions, TouchableWithoutFeedback } from "react-native";
import { useState, useEffect, useRef } from 'react';
import Code from "../components/Code";
import { Language } from "prism-react-renderer";
import KeyboardToolbar from "../components/KeyboardToolbar";
import PostButton from "../components/PostButton";
import useKeyboardOpen from "../lib/hooks/useKeyboardOpen";
import CodeEditor from "../components/CodeEditor";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";
import AndroidLanguagePicker from "../components/AndroidLanguagePicker";
import NativeIconicIcon from "../components/NativeIconicIcon";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import uuid from 'react-native-uuid';


const codeWindowPadding = 20;

function PostingScreen({ navigation }: { navigation: any }) {
  const [textContent, changeContent] = useState<string>('');
  const [language, setLanguage] = useState<Language>('python');
  const [pickerLang, setPickerLang] = useState<Language>(language);
  const [cursorPosition, updateCursorPosition] = useState({ start: 0, end: 0 });

  const [modalVisible, setModalVisible] = useState(false);
  console.log("textContent", textContent.length);

  const languages = [
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "JavaScript", value: "javascript" },
    { label: "CSS", value: "css" }
  ]

  //require font
  let [fontsLoaded] = useFonts({
    Hack: require("../assets/fonts/Hack-Regular.ttf"),
  });


  const toolBarCallBack = (buttonContent: string) => {

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

  const onPostPress = async () => {
    console.log("post pressed");

    const firestore = getFirestore();

    // Using UUID for a unique ID.
    const new_id = uuid.v1() as string;
    await setDoc(doc(firestore, "posts", new_id), {
      id: new_id,
      code: textContent,
      user: {
        id: "9",
        name: "WayneWang",
        avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
      },
      createdAt: new Date().toISOString(),
      voteCount: 0,
      language: language,
    });
    changeContent('');
    navigation.navigate('MainStack', {
    });

  };


  const iosPickerModal = (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.bottomView}>
        <View style={styles.modalView}>
          <Picker
            selectedValue={pickerLang}
            onValueChange={(itemValue) => setPickerLang(itemValue)}
            style={styles.iosPicker}
            itemStyle={styles.iosPickerItem}
          >
            {languages.map((language) => (
              <Picker.Item key={language.value} label={language.label} value={language.value} />
            ))}
          </Picker>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => {
              setModalVisible(false);
              setLanguage(pickerLang);
            }}
          >
            <Text style={styles.textStyle}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>);

  return (
    <SafeAreaView style={styles.wrapper} pointerEvents="box-none">
      <KeyboardToolbar callback={toolBarCallBack} language={language} />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
              {Platform.OS === "android" ?
                <AndroidLanguagePicker callback={setLanguage} selected={language} /> :
                <TouchableOpacity
                  style={styles.pickButton}
                  onPress={() => setModalVisible(true)}
                >
                  <Text style={styles.textStyle}>{languages.find((lang) => lang.value === language)?.label + " "}</Text>
                  <NativeIconicIcon name="chevron-down-outline" size={20} color="#fff" />
                  {iosPickerModal}
                </TouchableOpacity>
              }
            </View>

            <View style={styles.buttonContainer}>
              <PostButton onPress={() => onPostPress()} disabled={textContent.length === 0} />
            </View>
          </View>
        </TouchableWithoutFeedback>

        <CodeEditor
          code={textContent}
          language={language}
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
    fontSize: 30,
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
  buttonWrapper: {
    position: "absolute",
    top: 30,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottomView: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#38383B",
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4
  },
  pickButton: {
    flexDirection: "row",
    height: 32,
    marginTop: 15,
    justifyContent: "flex-end",
  },
  doneButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  iosPicker: {
    marginVertical: 30,
    width: Dimensions.get("window").width,
  },
  iosPickerItem: {
    color: "#fff"
  }
});

export default PostingScreen;
