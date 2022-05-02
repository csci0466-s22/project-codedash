import stylesLarge from "./CardStyleLarge";
import stylesSmall from "./CardStyleSmall";
import { Animated, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";
import Avatar from "../Avatar";
import NativeIconicIcon from "../NativeIconicIcon";
import React, { ReactFragment, useRef } from "react";


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
    // Only animate spring or small cards
    if (size === "small") {
      Animated.spring(spring, {
        toValue: 0.93,
        speed: 20,
        useNativeDriver: true,
      }).start();
    }

  };

  const onPressOut = () => {
    if (size === "small") {
      Animated.spring(spring, {
        toValue: 1,
        speed: 20,
        useNativeDriver: true,
      }).start();
    }
  };

  // Touchable container
  function TC({ size, children }: { size: string, children: React.ReactChild }) {
    return (size === "small") ? <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} >{children}</TouchableWithoutFeedback> : <>{children}</>;

  };


  return (
    <TC size={size}>
      <Animated.View style={[styles.CardContainer, { transform: [{ scale: spring }] }]}>
        <View style={styles.CardHeader}>
          {size === "large" ?
            <AvatarBadge user={post.user} /> :
            <View style={styles.CardHeaderLeft}>
              <Avatar size="small" user={post.user} />
              <Text style={styles.userName}>@{post.user.name}</Text>
            </View>}
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
    </TC>
  );
}

export default Card;
