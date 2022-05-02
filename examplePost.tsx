import { Language } from "prism-react-renderer";
import Post from "./lib/types/post";

const examplePosts: Post[] = [
  {
    id: "1",
    user: {
      id: "1",
      name: "JomaTech",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 0,
  },
  {
    id: "2",
    user: {
      id: "2",
      name: "TechLead",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 1,
  },
  {
    id: "3",
    user: {
      id: "3",
      name: "BenAwad",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 2,
  },
  {
    id: "4",
    user: {
      id: "4",
      name: "NicholasSliter",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 3,
  },
  {
    id: "5",
    user: {
      id: "5",
      name: "TrenBlack",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 4,
  },
  {
    id: "6",
    user: {
      id: "6",
      name: "MKBHD",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 5,
  },
  {
    id: "7",
    user: {
      id: "7",
      name: "FireShip",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);\nreturn(null);\nreturn(null);\nreturn(null);\nreturn(null);\nreturn(null);\nreturn(null);\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 5,
  },
  {
    id: "8",
    user: {
      id: "8",
      name: "Clement",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 5,
  },
  {
    id: "9",
    user: {
      id: "9",
      name: "WayneWang",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `import React from "react";\nimport { View, Text } from "react-native";\nreturn(null);`,
    language: "typescript" as Language,
    createdAt: new Date(),
    voteCount: 5,
  }
]



export default examplePosts;