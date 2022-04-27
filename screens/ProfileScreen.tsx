import { View, Text, StyleSheet, Pressable } from "react-native";
import BackButton from "../components/BackButton";

function ProfileScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.goBack()}/>
      <Text style={styles.text}>Profile Screen</Text>
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
  text: {
    fontSize: 30,
    color: "#fff",
  }
});

export default ProfileScreen;