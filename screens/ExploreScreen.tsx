import { View, Text, StyleSheet, FlatList, ListRenderItem, SafeAreaView, Keyboard } from "react-native";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import examplePosts from "../examplePost";
import Post from "../lib/types/post";
import SearchBar from "react-native-dynamic-search-bar";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Fuse from 'fuse.js'
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";



function ExploreScreen({ route, navigation }: { route: any, navigation: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCards, setDisplayCards] = useState(examplePosts);

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

  

  const data: Post[] = examplePosts;

  const keyExtractor = (post: Post) => post.id;

  const ItemRenderer: ListRenderItem<Post> = ({ item }) => {
    return (
      <Card post={item} size="small" />
    )
  };

  
  useEffect(() => {
    if (searchTerm==="") {
      setDisplayCards(examplePosts);
    }
  }, [searchTerm]);




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
        onChangeText={(text) => {setSearchTerm(text)}}
        onSearchPress={() => {doSearch(searchTerm)}}
        onClearPress={() => {setSearchTerm("")}}
        onSubmitEditing={() => {doSearch(searchTerm)}}

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
          showsVerticalScrollIndicator={false}>
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
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  avatarContainer: {
    position: "absolute",
    top: 60,
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