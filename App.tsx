import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import BottomTabNav from "./navigation/BottomTabNav";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { initializeFireBase } from "./ConfigureFireBase";
import { useEffect, useState } from "react";
import Post from "./lib/types/post";
import User from "./lib/types/user";
import PostsContext from "./Context/PostsContext";
import LoginContext from "./Context/LoginContext";
import examplePosts from "./examplePost";
import useFetchAllPosts from "./lib/hooks/useFetchAllPosts";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
import SignInScreen from "./screens/SignInScreen";





export default function App() {
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([] as Post[]);
  const [user, setUser] = useState({ id: "0", name: "emptyUser", avatar: "" } as User);


  const initposts = () => {
    console.log("called");
    useFetchAllPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts);
      setPostsLoaded(true);
    });
    console.log("called again");
  };

  useEffect(() => {
    initializeFireBase();
  }, []);

  useEffect(() => {
    if (user.id !== "0") {
      initposts();
    }
  }, [user]);



  let [fontsLoaded] = useFonts({
    Hack: require("./assets/fonts/Hack-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      <PostsContext.Provider value={{ posts, setPosts }}>
        {user.id !== "0" ? (
          postsLoaded ? (
            <NavigationContainer>
              <BottomTabNav />
              <StatusBar style="light" />
            </NavigationContainer>
          ) : (
            <AppLoading />
          )
        ) :
          <SignInScreen />
        }
      </PostsContext.Provider>
    </LoginContext.Provider>
  );
}
