import { getFirestore, collection, getDocs } from "firebase/firestore";
import Post from "../types/post";

export default async function useFetchAllPosts(){
    const firestore = getFirestore();
    const collectionRef = collection(firestore, 'posts');
    const snapshot = await getDocs(collectionRef);
    const fetchedPosts = snapshot.docs.map(doc => doc.data() as Post);
    return fetchedPosts;
}