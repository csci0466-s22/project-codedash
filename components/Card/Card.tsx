import stylesLarge from "./CardStyleLarge";
import stylesSmall from "./CardStyleSmall";
import { View, Text, TouchableOpacity } from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";
import Avatar from "../Avatar";
import NativeIconicIcon from "../NativeIconicIcon";


interface CardProps {
  post: Post;
  size?: "small" | "large";
};


function Card({ post, size = "large" }: CardProps) {
  const styles = size === "large" ? stylesLarge : stylesSmall;

  const onPress = () => {
    console.log("onPress");
  };

  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        {size === "large" ?
          <AvatarBadge user={post.user} /> :
          <Avatar size="small" user={post.user} />}
        <View style={styles.CardHeaderRight}>
          <Text style={styles.LikeCount}>{post.voteCount + " ❤️"}</Text>
          {size === "large" ?
            <TouchableOpacity onPress={onPress}>
              <NativeIconicIcon name="ellipsis-vertical" size={18} color="#fff" />
            </TouchableOpacity>
            :
            null}
        </View>
      </View>
      <Code
        code={post.code}
        language={post.language}
      />
    </View>

  );
}

export default Card;
