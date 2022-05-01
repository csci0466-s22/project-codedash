import stylesLarge from "./CardStyleLarge";
import stylesSmall from "./CardStyleSmall";
import { Animated, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";
import Avatar from "../Avatar";
import NativeIconicIcon from "../NativeIconicIcon";
import { useRef } from "react";


interface CardProps {
  post: Post;
  size?: "small" | "large";
};


function Card({ post, size = "large" }: CardProps) {
  const styles = size === "large" ? stylesLarge : stylesSmall;

  const onMenuPress = () => {
    console.log("Menu button pressed");
  };

  const spring = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    console.log("Card pressed in");
    Animated.spring(spring, {
      toValue: 0.9,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    console.log("Card pressed out");
    Animated.spring(spring, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };


  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} >
      <Animated.View style={[styles.CardContainer, { transform: [{ scale: spring }] }]}>
        <View style={styles.CardHeader}>
          {size === "large" ?
            <AvatarBadge user={post.user} /> :
            <Avatar size="small" user={post.user} />}
          <View style={styles.CardHeaderRight}>
            <Text style={styles.LikeCount}>{post.voteCount + " ❤️"}</Text>
            {size === "large" ?
              <TouchableOpacity onPress={onMenuPress}>
                <NativeIconicIcon name="ellipsis-vertical" size={18} color="#fff" />
              </TouchableOpacity>
              :
              null}
          </View>
        </View>
      <View style={styles.CodeContainer}>
        <Code
          code={post.code}
          language={post.language}
        />
      </View>
      </Animated.View >
    </TouchableWithoutFeedback>

  );
}

export default Card;
