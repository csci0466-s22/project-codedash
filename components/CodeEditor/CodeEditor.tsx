import { Language } from "prism-react-renderer";
import Code2 from "../Code2";
import { View, TextInput, Platform} from "react-native";
import styles from "./CodeEditorStyle";
import { ScrollView } from "react-native-gesture-handler";


interface CodeEditorProps {
  code: string;
  updateCode: (code: string) => void;
  language: Language;
};


function CodeEditor({code, updateCode, language}: CodeEditorProps){
  const keyboardType = Platform.OS === "ios" ? "default" : "visible-password";


  const numLines = code.split("\n").length;
  const height = 100 + (numLines + 1) * 16.33;

  //style={styles.container}

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.scrollContent,  {height: height}]}
      pointerEvents="box-none"
    >
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
        value={code}
        onChangeText={(t) => {
          updateCode(t);
        }}
      />
      <View style={styles.overlay} pointerEvents="none">
        <Code2 code={code} language={language} inEditor />
      </View>
    </ScrollView>
  );
}

//put both overlay and text input into a scroll view, have them have unlimited heihgt but limit size of scroll view
// scroll both overlay and text input to the same position

export default CodeEditor;



