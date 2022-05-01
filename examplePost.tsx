import { Language } from "prism-react-renderer";
import Post from "./lib/types/post";

const examplePosts: Post[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 1,
  },
  {
    id: "2",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 2,
  },
  {
    id: "3",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 3,
  },
  {
    id: "4",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 4,
  },
  {
    id: "5",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 5,
  },
  {
    id: "6",
    user: {
      id: "1",
      name: "John Doe",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 6,
  }
]



export default examplePosts;