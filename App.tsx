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
import examplePosts from "./examplePost";
import useFetchAllPosts from "./lib/hooks/useFetchAllPosts";


export default function App() {
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([] as Post[]);

  const initposts = () => {
    initializeFireBase();

    useFetchAllPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts);
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
