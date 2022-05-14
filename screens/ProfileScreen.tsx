import { View, Text, StyleSheet, FlatList, ListRenderItem, SafeAreaView } from "react-native";
import BackButton from "../components/BackButton";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import examplePosts from "../examplePost";
import Post from "../lib/types/post";
import User from "../lib/types/user";
import useUserById from "../lib/hooks/useUserById";


function ProfileScreen({ route, navigation}: { route: any, navigation: any}) {
  const data: Post[] = examplePosts.filter(post => post.user.id === route.params.id);
  const user = useUserById(route.params.id);

  const onSmallCardPress = (post: Post) => {
    navigation.navigate("SingleCard", { post });
  }

  const keyExtractor = (post: Post) => post.id;

  const ItemRenderer: ListRenderItem<Post> = ({ item }) => {
    return (
      <Card post={item} size="small" onPress={onSmallCardPress}/>
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
            id: user?.id,
            name: user?.name,
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          size="xlarge"
          clickable={false}
        />
        <View style={styles.personalInfo}>
          <Text style={styles.username}>@{user.name}</Text>
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