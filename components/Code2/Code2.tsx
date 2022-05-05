import styles from "./CodeStyle";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
//import theme from "prism-react-renderer/themes/nightOwl";
import theme from "prism-react-renderer/themes/okaidia";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";

interface CodeProps {
  code: string;
  language: Language;
  inEditor: boolean;
}

function Code2({ code, language, inEditor = false }: CodeProps) {
  const courierFont =
    Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 15
      ? "Courier New"
      : "Courier";
  const platformFont = Platform.OS === "ios" ? courierFont : "monospace";
  const fontFamily = "Hack";

  const rowStyle = (lineNumber: number) => [
    styles.row,
    { top: 3 + 14 * lineNumber },
  ];
  const rowStyle2 = (lineNumber: number) => {
    return StyleSheet.create({
      row: {
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        position: "absolute",
        height: 16.33,
        margin: 0,
        padding: 0,
        borderWidth: 1,
        borderColor: "transparent",
        top: 3 + 16.33 * lineNumber,
      },
    }).row;
  };

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

              <View key={i} style={rowStyle2(i)}>
                {line.map((token, key) => {
                  const props = getTokenProps({ token, key });
                  return (
                    <Text
                      key={props.key}
                      style={
                        {
                          color: props.style?.color ?? "#fff",
                          fontFamily: fontFamily,
                          fontSize: 14,
                          lineHeight: 14,
                          textAlignVertical: "top",
                          //fontWeight: props.style?.fontWeight ?? "normal",
                        } as any
                      }
                    >
                      {!token.empty ? props.children : "\n" /* Not sure we need this*/ }
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

export default Code2;
