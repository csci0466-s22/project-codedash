import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import NativeIconicIcon from '../components/NativeIconicIcon';




const Stack = createStackNavigator();

function PostingScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Posting Screen</Text>
    </View >
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
  }
});

export default PostingScreen;