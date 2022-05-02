import examplePosts from "../../examplePost";

export default function useUserById(id:string){

    const user = examplePosts.find((post) => {
        
        return(post.user.id == id);

    })?.user ?? {
        name: "Undefined",
        id: "0",
    };


    return(user);



}