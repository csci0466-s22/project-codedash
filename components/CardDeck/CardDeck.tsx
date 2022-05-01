import styles from "./CardDeckStyle";
import { Animated, View, PanResponder } from "react-native";
import { useRef, useState } from "react";
import Post from "../../lib/types/post";
import Card from "../Card/Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { scalar } from "@tensorflow/tfjs";

const screenWidth = Dimensions.get("window").width;

function CardDeck({ posts }: { posts: Post[] }) {
  const position = useRef(new Animated.ValueXY()).current;
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotation = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: ["-5deg", "0deg", "5deg"],
    extrapolate: "clamp",
  });
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [1, 0.8, 1],
    extrapolate: "clamp",
  });


  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 5,
          useNativeDriver: true,
        }).start();
      }
    })).current;

  const cards = posts.map((post, index) => {
    if (index < selectedIndex) {
      return null;
    } else if (index === selectedIndex) {
      // Current Card
      return (
        <Animated.View key={index} style={[styles.swipeCard, {
          transform: [{ rotate: rotation }, ...position.getTranslateTransform()]
        }]}
          {...panResponder.panHandlers}
        >
          <TouchableWithoutFeedback>
            <Card post={post} size='large' />
          </TouchableWithoutFeedback>
        </Animated.View >
      )
    } else {
      // Later Cards
      return (
        <Animated.View key={index} style={[styles.swipeCard, {
          opacity: 0
        }]}>
          <Card post={post} size='large' />
        </Animated.View>
      );
    }
  }).reverse();

  return (
    <View style={styles.container}>
      {cards}
    </View>
  );
}
export default CardDeck;
