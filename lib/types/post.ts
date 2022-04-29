import User from "./user";
import { Language } from "prism-react-renderer";

export default interface Post {
    id: string;
    code: string;
    user: User;
    createdAt: Date;
    voteCount: number;
    language: Language;

};
