import { View, Text, StyleSheet, Alert, SafeAreaView, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { useContext, useState } from "react";

import LoginContext from "../Context/LoginContext";
import uuid from 'react-native-uuid';
import variables from "../lib/styles/__variables";



function SignInScreen() {
  const [userName, setuserName] = useState("");

  const { user, setUser } = useContext(LoginContext);

  const onDonePress = () => {
    if (userName.length > 0) {
      console.log("setting: ", { id: uuid.v4() as string, name: userName });
      setUser({ id: uuid.v4() as string, name: userName });
    } else {
      Alert.alert("Please enter a username");
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} pointerEvents={"box-none"} behavior="padding">
      <Text style={styles.title}>
        Enter your Username
      </Text>
      <TextInput
        style={styles.input}
        placeholder="JohnDoe"
        placeholderTextColor="#aaa"
        onChangeText={(text) => setuserName(text)} />

      <TouchableOpacity onPress={onDonePress}>
        <View style={styles.button}>
          <Text style={styles.textStyle}>Done</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    color: "#fff",
    marginTop: 20,
    backgroundColor: "#38383B",
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    marginHorizontal: 30,
  },
  button: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 100,
    marginTop: 60,
  }
});

export default SignInScreen;