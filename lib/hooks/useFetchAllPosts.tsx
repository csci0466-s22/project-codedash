import { getFirestore, collection, getDocs } from "firebase/firestore";
import examplePosts from "../../examplePost";
import Post from "../types/post";

export default async function useFetchAllPosts(){
    const firestore = getFirestore();
    const collectionRef = collection(firestore, 'posts');
    const snapshot = await getDocs(collectionRef);
    const fetchedPosts = snapshot.docs.map(doc => doc.data() as Post);

    // only return the example posts if less than 2 posts in the database
    // this is to make sure main screen curr card and next card are rendered correctly
    return fetchedPosts.length >= 2 ? fetchedPosts : examplePosts;
}