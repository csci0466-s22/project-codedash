import styles from "./EditorCodeOverlayStyle";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import {
  View,
  Text,
} from "react-native";
//import theme from "prism-react-renderer/themes/nightOwl";
import theme from "prism-react-renderer/themes/okaidia";
import { ScrollView } from "react-native-gesture-handler";

interface CodeProps {
  code: string;
  language: Language;
}

function EditorCodeOverlay({ code, language }: CodeProps) {

  return (
    <ScrollView style={styles.container}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code}
        language={language}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <View
            style={[
              styles.container,
              style,
              { backgroundColor: "transparent" },
            ]}
          >
            {tokens.map((line, i) => (
              <View key={i} style={styles.row}>
                {line.map((token, key) => {
                  const props = getTokenProps({ token, key });
                  return (
                    <Text
                      key={props.key}
                      style={
                        {
                          color: props.style?.color ?? "#fff",
                          fontFamily: "Hack",
                          fontSize: 14,
                          lineHeight: 14,
                          textAlignVertical: "top",
                        } as any
                      }
                    >
                      {!token.empty ? props.children : "\n"}
                    </Text>
                  );
                })}
              </View>
            ))}
          </View>
        )}
      </Highlight>
    </ScrollView>
  );
}

export default EditorCodeOverlay;
