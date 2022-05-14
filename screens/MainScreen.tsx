
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import AvatarBadge from "../components/AvatarBadge";
import CardDeck from "../components/CardDeck";
import examplePosts from "../examplePost";
import PostsContext from "../Context/PostsContext";
import { useContext } from "react";
import Post from "../lib/types/post";
import useFetchAllPosts from "../lib/hooks/useFetchAllPosts";


function MainScreen() {
  const { posts, setPosts } = useContext(PostsContext);

  console.log(posts);

  const swipeCallBack = async (post: Post, direction: string) => {
    console.log(post.id);
    setPosts(await useFetchAllPosts());
    if (direction === "right") {
      console.log("SWIPE RIGHT");
      
    } else {
      console.log("SWIPE LEFT");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.badgeContainer}>
        <AvatarBadge
          user={{
            id: "9",
            name: "WayneWang",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
        />
      </View>
      <CardDeck posts={posts} swipeCallBack={swipeCallBack}/>
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