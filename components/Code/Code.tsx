import styles from './CodeStyle';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import { View, Text, Platform } from 'react-native';
//import theme from "prism-react-renderer/themes/nightOwl";
import theme from "prism-react-renderer/themes/okaidia";
import { useFonts } from 'expo-font';



interface CodeProps {
  code: string;
  language: Language;
  inEditor: boolean;
};


function Code({ code, language, inEditor = false }: CodeProps) {


  const courierFont =
    Platform.OS === "ios" && parseInt(Platform.Version, 10) >= 15
      ? "Courier New"
      : "Courier";
  const platformFont = Platform.OS === "ios" ? courierFont : "monospace";
  const fontFamily = "Hack";

    return (
      <View style={styles.container}>
        <Highlight {...defaultProps} theme={theme} code={code} language={language}>
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <View style={[styles.container, style, { backgroundColor: "transparent" }]}>
              {tokens.map((line, i) => (
                <View key={i} {...getLineProps({ line, key: i, style: styles.row }).style}>
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
                        {!token.empty ? props.children : "\n"}
                      </Text>
                    );
                  })}
                </View>
              ))}
            </View>
          )}
        </Highlight>
      </View>

    )
  }


export default Code;