import stylesLarge from "./CardStyleLarge";
import stylesSmall from "./CardStyleSmall";
import {View, Text, Button} from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";
import Avatar from "../Avatar";


interface CardProps {
  post: Post;
  size?: "small" | "large";
};


function Card({post, size="large"}: CardProps) {
  const styles = size === "large" ? stylesLarge : stylesSmall;

  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        {size === "large" ? 
          <AvatarBadge user={post.user}/> : 
          <Avatar size="small" user={post.user} />}
        <Text style={styles.LikeCount}>{post.voteCount+" ❤️"}</Text>
        {size === "large" ? <Button title='test' onPress={()=>console.log("pressed")}/>: null}
      </View>
      <Code
        code={post.code}
        language={post.language}
      />
    </View>
  );
}

export default Card;
