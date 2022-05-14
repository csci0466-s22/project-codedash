import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomTabNav from "./navigation/BottomTabNav";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { initializeFireBase } from "./ConfigureFireBase";
import { useEffect, useState } from "react";
import Post from "./lib/types/post";
import PostsContext from "./Context/PostsContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import examplePosts from "./examplePost";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([] as Post[]);

  const initposts = () => {
    initializeFireBase();

    const firestore = getFirestore();
    const collectionRef = collection(firestore, 'posts');
    getDocs(collectionRef).then((snapshot) => {
      const fetchedPosts = snapshot.docs.map(doc => doc.data() as Post);
      setPosts(fetchedPosts.length > 0 ? fetchedPosts : examplePosts);
      console.log("loaded!");
      setPostsLoaded(true);
    });
  };

  useEffect(()=>{
    initposts();
  },[]);

  let [fontsLoaded] = useFonts({
    Hack: require("./assets/fonts/Hack-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {postsLoaded ? (
      <NavigationContainer>
        <BottomTabNav />
        <StatusBar style="light" />
      </NavigationContainer>
      ) : (
        <AppLoading />
      )}
    </PostsContext.Provider>
  );
}
