
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import BackButton from "../components/BackButton";
import Card from "../components/Card";
import Post from "../lib/types/post";


function SingleCardScreen({ route, navigation }: { route: any, navigation: any }) {
  const post : Post = route.params.post;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.cardContainer}>
        <Card post={post} size={"large"} />
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
  backButtonContainer: {
    flex: 0,
    width: '100%',
    paddingTop: 15,
    paddingLeft: 30,
  },
  cardContainer: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
});


export default SingleCardScreen;