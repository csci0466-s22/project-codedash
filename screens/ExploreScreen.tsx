import { View, Text, StyleSheet, FlatList, ListRenderItem, SafeAreaView } from "react-native";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import examplePosts from "../examplePost";
import Post from "../lib/types/post";
import SearchBar from "react-native-dynamic-search-bar";


function ExploreScreen({ route, navigation }: { route: any, navigation: any }) {
  const data: Post[] = examplePosts;

  const keyExtractor = (post: Post) => post.id;

  const ItemRenderer: ListRenderItem<Post> = ({ item }) => {
    return (
      <Card post={item} size="small" />
    )
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          user={{
            id: "9",
            name: "WayneWang",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          size="small"
          clickable={true}
        />
      </View>
      <Text style={styles.text}>Explore</Text>
      <SearchBar style={styles.SearchBar} darkMode={true}/>

      <FlatList
        data={data}
        numColumns={1}
        keyExtractor={keyExtractor}
        renderItem={ItemRenderer}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}>
      </FlatList>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    height: 80,
    marginTop: 20,
  },
  avatarContainer: {
    position: "absolute",
    top: 60,
    right: 20,
  },
  SearchBar: {
    marginBottom: 30,
    backgroundColor: "#343434",
  }
});

export default ExploreScreen;