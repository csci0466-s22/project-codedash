import styles from "./CardStyle";
import {View, Text} from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";


interface CardProps {
  post: Post;
};

function Card({post}: CardProps) {
  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <AvatarBadge
          user={post.user}
        />
      </View>
      <Code
        code={post.code}
        language={post.language}
      />
    </View>
  );
}

export default Card;
