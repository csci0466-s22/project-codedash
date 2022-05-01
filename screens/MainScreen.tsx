import { Language } from "prism-react-renderer";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Avatar from "../components/Avatar";
import AvatarBadge from "../components/AvatarBadge";
import Card from "../components/Card";
import CardDeck from "../components/CardDeck";
import examplePosts from "../examplePost";
import Post from "../lib/types/post";


function MainScreen() {
  /**
   * <Image
        source={require("../assets/logo-codedash.png")}
        style={{
          width: "100%",
          height: 100,
          resizeMode: "contain",
        }}
      />
   */
  
  return (
    <SafeAreaView style={styles.container}>
      
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
      <CardDeck posts={examplePosts} />
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