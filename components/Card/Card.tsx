import stylesLarge from "./CardStyleLarge";
import stylesSmall from "./CardStyleSmall";
import { Animated, View, Text, TouchableOpacity, TouchableWithoutFeedback, Modal, Pressable } from "react-native";
import AvatarBadge from "../AvatarBadge";
import Code from "../Code";
import Post from "../../lib/types/post";
import Avatar from "../Avatar";
import NativeIconicIcon from "../NativeIconicIcon";
import React, { ReactFragment, useRef, useState } from "react";
import { likeFormater } from "../../lib/utils";

import variables from "../../lib/styles/__variables";


interface CardProps {
  post: Post;
  size?: "small" | "large";
  children?: ReactFragment;
  onPress?: (post: Post) => void;
};


function Card({ post, size = "large", children, onPress }: CardProps) {
  const styles = size === "large" ? stylesLarge : stylesSmall;
  const [modalVisible, setModalVisible] = useState(false);

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
    return (size === "small") ?
      <TouchableWithoutFeedback onPress={() => { onPress?.(post) }} onPressIn={onPressIn} onPressOut={onPressOut} >
        {children}
      </TouchableWithoutFeedback>
      : <>{children}</>;

  };

  const onFlagPress = () => {
    setModalVisible(true);
  };

  const onReportPress = () => {
    console.log("reporting post: ", post);
  };


  return (
    <TC size={size}>
      <Animated.View style={[styles.CardContainer, { transform: [{ scale: spring }] }]}>
        <View style={styles.CardHeader}>
          {size === "large" ?
            <AvatarBadge user={post.user} shouldShowBorder={true} /> :
            <View style={styles.CardHeaderLeft}>
              <AvatarBadge user={post.user} shouldShowBorder={false} />
            </View>}
          <View style={styles.CardHeaderRight}>
            <Text style={styles.LikeCountBold}>{likeFormater(post.voteCount)}</Text>
            <Text style={styles.LikeCount}>{post.voteCount !== 1 ? "  Likes" : " Like"}</Text>
            {size === "large" ?
              <TouchableOpacity onPress={() => { onFlagPress() }}>
                <NativeIconicIcon name="flag" size={18} color="#fff" />
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
          {children}
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={() => { setModalVisible(!modalVisible) }}>
            <View style={styles.dismissView}/>
          </TouchableWithoutFeedback>
          <View style={styles.bottomView}>
            <View style={styles.modalView}>
              <View style={styles.textWrapper}>
                <Text style={styles.textStyle}>Report this post as inappropriate?</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: variables.$backgroundColor}]} onPress={() => {
                  setModalVisible(!modalVisible);

                }}>
                  <Text style={[styles.buttonTextStyle, {color: variables.$primaryText}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: variables.$secondaryBackgroundColor}]} onPress={() => {
                  setModalVisible(!modalVisible);
                  onReportPress();
                }}>
                  <Text style={[styles.buttonTextStyle, {color: variables.$secondaryText}]}>Report</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>
      </Animated.View >
    </TC>
  );
}

export default Card;
