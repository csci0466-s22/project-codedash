import { View, Text, StyleSheet, FlatList, ListRenderItem, SafeAreaView, Keyboard, RefreshControl } from "react-native";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Post from "../lib/types/post";
import SearchBar from "react-native-dynamic-search-bar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Fuse from 'fuse.js'
import { useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { Platform } from "react-native";
import { getFirestore, setDoc, doc, getDocs, collection } from "firebase/firestore";
import PostsContext from "../Context/PostsContext";
import useFetchAllPosts from "../lib/hooks/useFetchAllPosts";
import examplePosts from "../examplePost";



function ExploreScreen({ route, navigation }: { route: any, navigation: any }) {
  const { posts, setPosts } = useContext(PostsContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [displayCards, setDisplayCards] = useState(posts.length > 0 ? posts : examplePosts);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const doSearch = (searchTerm: string) => {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      fieldNormWeight: 1,
      keys: [
        "code",
        "user.name"
      ]
    };

    const fuse = new Fuse(data, options);
    const results = fuse.search(searchTerm);
    //console.log(results);
    setDisplayCards(results.map(r => r.item));
  }

  const onSmallCardPress = (post: Post) => {
    console.log("small card pressed");
    navigation.navigate("SingleCard", { post });
  }

  const data: Post[] = posts;

  const keyExtractor = (post: Post) => post.id;

  const ItemRenderer: ListRenderItem<Post> = ({ item }) => {
    return (
      <Card post={item} size="small" onPress={onSmallCardPress} />
    )
  };


  useEffect(() => {
    if (searchTerm === "") {
      setDisplayCards(posts);
    }
  }, [searchTerm, posts]);




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

      <TouchableWithoutFeedback style={styles.titleTouchable} onPress={() => Keyboard.dismiss()} accessible={false}>
        <Text style={styles.text}>Explore</Text>
      </TouchableWithoutFeedback>
      <SearchBar
        style={styles.SearchBar}
        darkMode={true}
        autoCorrect={false}
        onChangeText={(text) => { setSearchTerm(text) }}
        onSearchPress={() => { doSearch(searchTerm) }}
        onClearPress={() => { setSearchTerm("") }}
        onSubmitEditing={() => { doSearch(searchTerm) }}

        returnKeyType="search"
      //onSearchPress={() => {doSearch(searchTerm)}}
      />

      <View style={styles.listContainer}>
        <FlatList
          data={displayCards}
          numColumns={1}
          keyExtractor={keyExtractor}
          renderItem={ItemRenderer}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              colors={["#ffffff"]} // for Android
              tintColor="#ffffff" // for iOS
              refreshing={isRefreshing}
              onRefresh={async () => {
                console.log("refreshing ExploreScreen flatlist");
                setIsRefreshing(true);
                setTimeout(() => { setIsRefreshing(false) }, 1000);
                const allPosts = await useFetchAllPosts();
                setPosts(allPosts);
                setDisplayCards(allPosts);
              }}
            />}
        >
        </FlatList>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#121212",
  },
  text: {
    fontSize: 30,
    color: "#fff",
    paddingTop: (Platform.OS === "android" ? 50 : 30),
    paddingBottom: 20,
    width: '100%',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  avatarContainer: {
    position: "absolute",
    top: (Platform.OS === "android" ? 50 : 70),
    right: 20,
    zIndex: 1,
  },
  SearchBar: {
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#343434",
  },
  titleTouchable: {
    flex: 0,
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

});

export default ExploreScreen;