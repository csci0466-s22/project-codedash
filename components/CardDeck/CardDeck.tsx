/**
 * Inspired by Florian Marcu's blog post:
 * https://instamobile.io/react-native-controls/react-native-swipe-cards-tinder/
 */

import styles from "./CardDeckStyle";
import { Animated, View, PanResponder, Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import Post from "../../lib/types/post";
import Card from "../Card/Card";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

function CardDeck({ posts }: { posts: Post[] }) {
  const position = useRef(new Animated.ValueXY()).current;
  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    // Refill the deck
    if (selectedIndex === posts.length) {
      setSelectedIndex(0);
    }
  }, [selectedIndex]);

  const rotation = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolate: "clamp",
  });
  const nextCardOpacity = position.x.interpolate({
    inputRange: [-screenWidth * 1 / 2, 0, screenWidth * 1 / 2],
    outputRange: [1, 0, 1],
    extrapolate: "clamp",
  });
  const nextCardScale = position.x.interpolate({
    inputRange: [-screenWidth * 2 / 3, 0, screenWidth * 2 / 3],
    outputRange: [1, 0.9, 1],
    extrapolate: "clamp",
  });

  const swipeHander = (direction: String) => {
    if (direction === "right") {
      console.log("SWIPE RIGHT");
    } else {
      console.log("SWIPE LEFT");
    }
  }

  const cards = posts.map((post, index) => {
    if (index < selectedIndex) {
      return null;
    } else if (index === selectedIndex) {
      // Current Card
      return (
        <Animated.View key={index} style={[styles.swipeCard, {
          transform: [{ rotate: rotation }, ...position.getTranslateTransform()]
        }]}
          {...PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
              position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gestureState) => {
              if (gestureState.dx > 120) {
                Animated.timing(position, {
                  toValue: { x: screenWidth + 100, y: gestureState.dy },
                  duration: 300,
                  useNativeDriver: true,
                }).start(( finished ) => {
                  console.log("right");
                  if (finished) setSelectedIndex(selectedIndex + 1);
                  position.setValue({ x: 0, y: 0 });
                });
              } else if (gestureState.dx < -120) {
                Animated.timing(position, {
                  toValue: { x: -screenWidth - 100, y: gestureState.dy },
                  duration: 300,
                  useNativeDriver: true,
                }).start(() => {
                  swipeHander('left');
                  setSelectedIndex(selectedIndex + 1);
                  position.setValue({ x: 0, y: 0 });
                });
              } else {
                Animated.spring(position, {
                  toValue: { x: 0, y: 0 },
                  friction: 5,
                  useNativeDriver: true,
                }).start();
              }
            }
          }).panHandlers}
        >
          <TouchableWithoutFeedback>
            <Card post={post} size='large' />
          </TouchableWithoutFeedback>
        </Animated.View >
      )
    } else if (index === selectedIndex + 1) {
      // Next Card
      return (
        <Animated.View key={index} style={[styles.swipeCard, {
          opacity: nextCardOpacity,
          transform: [{ scale: nextCardScale }]
        }]}>
          <Card post={post} size='large' />
        </Animated.View>
      );
    } else if (index > selectedIndex + 1) {
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
