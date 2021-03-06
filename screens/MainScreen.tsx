
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import AvatarBadge from "../components/AvatarBadge";
import CardDeck from "../components/CardDeck";
import examplePosts from "../examplePost";
import PostsContext from "../Context/PostsContext";
import { useContext } from "react";
import Post from "../lib/types/post";
import useFetchAllPosts from "../lib/hooks/useFetchAllPosts";
import { collection, getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
import LoginContext from "../Context/LoginContext";

function MainScreen() {
  const { posts, setPosts } = useContext(PostsContext);

  const { user, setUser } = useContext(LoginContext);

  const swipeCallBack = async (post: Post, direction: string) => {

    // update like count
    const firestore = getFirestore();

    const postRef = doc(firestore, "posts", post.id);
    const postSnap = await getDoc(postRef);
   
    if (postSnap.exists()) {
      const origPost = postSnap.data() as Post;
      const newVoteCount = origPost.voteCount + (direction === "right" ? 1 : -1);
      const newPost = {
        ...origPost,
        voteCount: Math.max(newVoteCount, 0)
      }
      await setDoc(doc(firestore, "posts", post.id), newPost);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such post!");
    }

    //const fetchedPosts = await useFetchAllPosts();
    //setPosts(fetchedPosts);
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.badgeContainer}>
        <AvatarBadge
          user={user}
          first={"name"}
        />
      </View>
      <CardDeck posts={posts} swipeCallBack={swipeCallBack} />
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