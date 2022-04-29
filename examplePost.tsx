import { Language } from "prism-react-renderer";

const examplePost = {
  id: "1",
  user: {
    id: "1",
    name: "John Doe",
    avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
  },
  code: `import React from "react";
import { View, Text } from "react-native";
return(null);`,
  language: "typescript" as Language,
  createdAt: new Date(),
  voteCount: 10,
};


export default examplePost;