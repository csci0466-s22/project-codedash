import User from "./user";
import { Language } from "prism-react-renderer";

export default interface Post {
    id: string;
    code: string;
    user: User;
    createdAt: String;
    voteCount: number;
    language: Language;
};
