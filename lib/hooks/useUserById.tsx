import examplePosts from "../../examplePost";
import PostsContext from "../../Context/PostsContext";
import { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
import User from "../types/user";

export default function useUserById(id:string){
    const { posts } = useContext(PostsContext);
    const { user, setUser } = useContext(LoginContext);

    if (user.id===id){
        return user;
    }

    const foundUser = posts.find((post) => {
        return(post.user.id == id);
    })?.user ?? {
        name: "Undefined",
        id: "0",
    };

    return(foundUser);
}