import { createContext } from "react";
import Post from "../lib/types/post";
import User from "../lib/types/user";

const LoginContext = createContext({
  user: {} as User,
  setUser: (user: User) => {}
});

export default LoginContext;
