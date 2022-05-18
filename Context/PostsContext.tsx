import { createContext } from "react";
import Post from "../lib/types/post";

const PostsContext = createContext({
  posts: [] as Post[],
  setPosts: (posts : Post[]) => {}
});

export default PostsContext;
