import { Language } from "prism-react-renderer";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Avatar from "../components/Avatar";
import AvatarBadge from "../components/AvatarBadge";
import Card from "../components/Card";


const examplePost = {
  id: "1",
  user: {
    id: "1",
    name: "John Doe",
    avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
  },
  code: `import React from "react";
import { View, Text } from "react-native";
return(null);`,
  language: "typescript" as Language,
  createdAt: new Date(),
  voteCount: 10,
};




function MainScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/logo-codedash.png")}
        style={{
          width: "100%",
          height: 100,
          resizeMode: "contain",
        }}
      />
      <View style={styles.badgeContainer}>
        <AvatarBadge
          user={{
            id: "123",
            name: "NicholasSliter",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
        />
      </View>
      <Card post={examplePost} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  badgeContainer: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});


export default MainScreen;