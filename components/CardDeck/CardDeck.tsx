/**
 * Inspired by Florian Marcu's blog post:
 * https://instamobile.io/react-native-controls/react-native-swipe-cards-tinder/
 */

import styles from "./CardDeckStyle";
import { Animated, View, PanResponder, Platform } from "react-native";
import { useRef, useState } from "react";
import Post from "../../lib/types/post";
import Card from "../Card/Card";
import { Dimensions } from "react-native";
import * as Haptics from "expo-haptics";
import CardLikeCue from "../CardLikeCue";

const screenWidth = Dimensions.get("window").width;

function CardDeck({ posts }: { posts: Post[] }) {
  const position = useRef(new Animated.ValueXY()).current;
  const nxt_position = useRef(new Animated.ValueXY()).current;
  const cueOpacity = useRef(new Animated.ValueXY()).current;
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Wiggle animation when first shown, using spring
  const [firstLoadWiggleShouldShow, setFirstLoadWiggleShouldShow] = useState(true);
  // avoid double tap animation, using timing
  const [swipeCueAnimationShouldShow, setSwipeCueAnimationShouldShow] = useState(false); 
  const [swipeCuePositionX, setSwipeCuePositionX] = useState(screenWidth/2);

  const [tapStartTime, setTapStartTime] = useState(0);

  const rotation = position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolate: "clamp",
  });
  const currCardOpacity = cueOpacity.x.interpolate({
    inputRange: [(-screenWidth * 1) / 2, 0, (screenWidth * 1) / 2],
    outputRange: [0.8, 1, 0.8],
    extrapolate: "clamp",
  });

  const redCueOpacity = cueOpacity.x.interpolate({
    inputRange: [(-screenWidth * 1) / 2, 0, (screenWidth * 1) / 2],
    outputRange: [0.2, 0, 0],
    extrapolate: "clamp",
  });

  const greenCueOpacity = cueOpacity.x.interpolate({
    inputRange: [(-screenWidth * 1) / 2, 0, (screenWidth * 1) / 2],
    outputRange: [0, 0, 0.2],
    extrapolate: "clamp",
  });

  const iconLikeCueOpacity = cueOpacity.x.interpolate({
    inputRange: [(-screenWidth * 1) / 2, 0, (screenWidth * 1) / 2],
    outputRange: [0, 0, 1],
    extrapolate: "clamp",
  });

  const iconDislikeCueOpacity = cueOpacity.x.interpolate({
    inputRange: [(-screenWidth * 1) / 2, 0, (screenWidth * 1) / 2],
    outputRange: [1, 0, 0],
    extrapolate: "clamp",
  });


  const nextCardScale = position.x.interpolate({
    inputRange: [(-screenWidth * 2) / 3, 0, (screenWidth * 2) / 3],
    outputRange: [1, 0.9, 1],
    extrapolate: "clamp",
  });

  const nxt_translateX = nxt_position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [-screenWidth / 20, 0, screenWidth / 20],
    extrapolate: "clamp",
  });

  const nxt_translateY = nxt_position.y.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: [-screenWidth / 20, 0, screenWidth / 20],
    extrapolate: "clamp",
  });

  const nxt_rotate = nxt_position.x.interpolate({
    inputRange: [-screenWidth / 2, 0, screenWidth / 2],
    outputRange: ["-3deg", "0deg", "3deg"],
    extrapolate: "clamp",
  });

  const swipeHander = (direction: String) => {
    if (direction === "right") {
      console.log("SWIPE RIGHT");
    } else {
      console.log("SWIPE LEFT");
    }
  };

  const getNextCardIndex = (currIndex: number) => {
    return currIndex === posts.length - 1 ? 0 : currIndex + 1;
  };

  const firstLoadWiggleAnimation = () => {
    Animated.timing(position, {
      toValue: { x: 50, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start((finished) => {
      if (finished) {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          tension: 60,
          useNativeDriver: true,
        }).start((finished) => {
          if (finished) {
            position.setValue({ x: 0, y: 0 });
            setFirstLoadWiggleShouldShow(false);
          }
        });
      }
    });
  };
  
  const swipeCueAnimation = () => {
    const xPos = (swipeCuePositionX >= screenWidth/2) ? 50 : -50;

    Animated.timing(position, {
      toValue: { x: xPos, y: 0 },
      duration: 200,
      useNativeDriver: true,
    }).start((finished) => {
      if (finished) {
        Animated.timing(position, {
          toValue: { x: 0, y: 0 },
          duration: 200,
          useNativeDriver: true,
        }).start((finished) => {
          if (finished) {
            position.setValue({ x: 0, y: 0 });
            setSwipeCueAnimationShouldShow(false);
            setSwipeCuePositionX(screenWidth/2);
          }
        });
      }
    });
  };

  const currCard = (showAnimation: boolean) => {
    let tapped = false;

    if (showAnimation) {
      if (firstLoadWiggleShouldShow) {
        firstLoadWiggleAnimation();
      } else if (swipeCueAnimationShouldShow) {
        swipeCueAnimation();
      }

      return (
        <Animated.View
          key={posts[selectedIndex].id}
          style={[styles.swipeCard, {
            transform: [{
              rotate: rotation,
              translateX: position.x,
              translateY: position.y,
            }],
          }]}
        >
          <Card post={posts[selectedIndex]} size="large" />
        </Animated.View>
      );
    }

    return (
      <Animated.View
        key={posts[selectedIndex].id}
        style={[
          styles.swipeCard,
          {
            transform: [
              { rotate: rotation },
              ...position.getTranslateTransform(),
            ],
            opacity: currCardOpacity,
          },
        ]}
        {...PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: (evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
            nxt_position.setValue({ x: gestureState.dx, y: gestureState.dy });
            cueOpacity.setValue({ x: gestureState.dx, y: gestureState.dy });

            if (Math.abs(gestureState.dx) > 120 && !tapped) {
              if (Platform.OS === "android") {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              } else {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }
              tapped = true;
            } else if (Math.abs(gestureState.dx) < 120 && tapped) {
              tapped = false;
            }
          },
          onPanResponderRelease: (evt, gestureState) => {
            setTimeout(() => {
              cueOpacity.setValue({ x: 0, y: 0 });
            }, 120);

            tapped = false;

            //swipe animation if sufficent swipe magnitude
            if (Math.abs(gestureState.dx) > 120) {
              const sign = Math.sign(gestureState.dx);
              const direction = sign > 0 ? "right" : "left";
              const magnitude =
                10 - Math.floor((4 * (Math.abs(gestureState.dx) - 120)) / 180);

              //console.log(nxt_position.x);
              // Wiggle back!
              Animated.spring(nxt_position, {
                toValue: { x: 0, y: 0 },
                friction: 5,
                tension: 80,
                useNativeDriver: true,
              }).start((finished) => {
                if (finished) nxt_position.setValue({ x: 0, y: 0 });
              });
              // Fly away!
              Animated.timing(position, {
                toValue: { x: sign * (screenWidth + 100), y: gestureState.dy },
                duration: 500,
                useNativeDriver: true,
              }).start((finished) => {
                //callback to move curr card to the next index
                if (finished) {
                  swipeHander(direction);
                  setSelectedIndex(getNextCardIndex(selectedIndex));
                  position.setValue({ x: 0, y: 0 });
                }
              });
            } else {
              // wiggle aborted, back to starting position
              Animated.spring(position, {
                toValue: { x: 0, y: 0 },
                friction: 5,
                useNativeDriver: true,
              }).start();
            }
          },
          onPanResponderStart(evt, gestureState) {
            if (evt.timeStamp - tapStartTime < 300) {
              // double tap detected, show swipe cue
              setSwipeCueAnimationShouldShow(true);
              setSwipeCuePositionX(evt.nativeEvent.locationX);
            } else {
              setTapStartTime(evt.timeStamp);
            }
          },
        }).panHandlers}
      >
        <Card post={posts[selectedIndex]} size="large">
          <CardLikeCue
            likeOpacity={iconLikeCueOpacity}
            dislikeOpacity={iconDislikeCueOpacity}
          />
        </Card>
      </Animated.View>
    );
  };

  const nextCard = () => {
    return (
      <Animated.View
        key={posts[getNextCardIndex(selectedIndex)].id}
        style={[
          styles.swipeCard,
          {
            opacity: 1,
            transform: [
              { translateX: nxt_translateX },
              { translateY: nxt_translateY },
              { rotate: nxt_rotate },
              { scale: nextCardScale },
            ],
          },
        ]}
      >
        <Card post={posts[getNextCardIndex(selectedIndex)]} size="large" />
      </Animated.View>
    );
  };

  const cards = [nextCard(), currCard(firstLoadWiggleShouldShow || swipeCueAnimationShouldShow)];

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.redCue,
          {
            opacity: redCueOpacity,
          },
        ]}
        pointerEvents={"box-none"}
      />
      <Animated.View
        style={[
          styles.greenCue,
          {
            opacity: greenCueOpacity,
          },
        ]}
        pointerEvents={"box-none"}
      />
      {cards}
    </View>
  );
}
export default CardDeck;
