import { View, Text, StyleSheet, FlatList, ListRenderItem, SafeAreaView } from "react-native";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import examplePosts from "../examplePost";
import Post from "../lib/types/post";


function ProfileScreen({ navigation }: { navigation: any }) {
  const data: Post[] = examplePosts;

  const keyExtractor = (post: Post) => post.id;

  const ItemRenderer: ListRenderItem<Post> = ({ item }) => {
    return (
      <Card post={item} size="small" />
    )
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.backButtonContainer}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.personalInfoContainer}>
        <Avatar
          user={{
            id: "124",
            name: "Wayne",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          size="xlarge"
          clickable={false}
        />
        <View style={styles.personalInfo}>
          <Text style={styles.username}>@Wayne</Text>
          <Text style={styles.followers}>30k followers</Text>
          <Text style={styles.replies}>10k replies</Text>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          numColumns={1}
          keyExtractor={keyExtractor}
          renderItem={ItemRenderer}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}>
        </FlatList>
      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#121212",
  },
  personalInfoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 10,
  },
  personalInfo: {
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '13%',
  },
  username: {
    fontSize: 30,
    color: "#ffffff",

  },
  followers: {
    fontSize: 20,
    color: "#ffffff",
  },
  replies: {
    fontSize: 20,
    color: "#ffffff",
  },
  backButtonContainer: {
    width: '100%',
    paddingTop: 15,
    paddingLeft: 30,
  },
  listContainer: {
    flex: 4,
    marginTop: 20,
  },
});

export default ProfileScreen;