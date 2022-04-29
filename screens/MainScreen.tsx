import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import Avatar from "../components/Avatar";
import AvatarBadge from "../components/AvatarBadge";
import Code from "../components/Code";


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
      <View style={styles.testPost}>
        <View style={styles.testPostHeader}>
          <AvatarBadge
            user={{
              id: "123",  
              name: "NicholasSliter",
              avatar:
                "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
            }}
          />
        </View>
        <Code code={`
function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`} language="jsx" />
      </View>
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
  testPost: {
    flex: 0,
    backgroundColor: "#252526",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    shadowColor: "#000",
    width: "90%",
    height: 520,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333333",
    overflow: "hidden",
  },
  testPostHeader: {
    flex: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#38383B",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    shadowColor: "#000",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});


export default MainScreen;