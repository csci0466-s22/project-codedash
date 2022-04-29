import styles from './CodeStyle';
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import {View, Text} from 'react-native';
//import theme from "prism-react-renderer/themes/nightOwl";
import theme from "prism-react-renderer/themes/okaidia";



interface CodeProps {
  code: string;
  language: Language;
};


function Code({code, language}: CodeProps){

  return (
    <View style={styles.container}>
      <Highlight {...defaultProps} theme={theme} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <View style={[styles.container, style, {backgroundColor: "transparent"}]}>
            {tokens.map((line, i) => (
              <View key={i} {...getLineProps({ line, key: i, style: styles.row }).style}>
                {line.map((token, key) => {
                  const props = getTokenProps({ token, key });
                  return (
                    <Text key={props.key} style={{color: props.style?.color ?? "#fff"} as any}>
                      {props.children}
                    </Text>
                  );
                })}
              </View>
            ))}
          </View>
        )}
      </Highlight>
    </View>
  );
  
}


export default Code;