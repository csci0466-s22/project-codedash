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
    code: `#wife {\n  right: 100%;\n  margin: 0;\n}`,
    language: "css" as Language,
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
    code: `#invisibility-cloak {\n  visibility: hidden;\n}`,
    language: "css" as Language,
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
    code: `public static DateTime getTomorrowsData() {\n  Thread.Sleep(24*60*60*1000);\n  return DataTime.Now;\n}`,
    language: "javascript" as Language,
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
    code: `// Magic. Do not touch.\nconst regularExpression = ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;`,
    language: "javascript" as Language,
    createdAt: new Date(),
    voteCount: 3,
  },
  {
    id: "5",
    user: {
      id: "5",
      name: "CliffYang",
      avatar: "https://avatars0.githubusercontent.com/u/17098477?s=460&v=4",
    },
    code: `#eu .country {\n  border: none;\n}`,
    language: "css" as Language,
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
    code: `if (YourHeartIsSetTo('Me')):\n  MyLove += 1\nelse:\n  MyLife = None`,
    language: "python" as Language,
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
    code: `#tower-of-pisa {\n  font-style: italic;\n}`,
    language: "css" as Language,
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
    code: `.goverment {\n  transition: all "4yr" ease-in-out;\n}`,
    language: "css" as Language,
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
    code: `int getRandomNumber()\n{\n  return 4; // chosen by fair dice roll.\n            // guaranteed to be random.\n}`,
    language: "c" as Language,
    createdAt: new Date(),
    voteCount: 5,
  }
]



export default examplePosts;