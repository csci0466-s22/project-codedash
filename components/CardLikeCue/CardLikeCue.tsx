import Icon from "react-native-vector-icons/Ionicons";
import { Animated } from "react-native";
import styles from "./CardLikeCueStyle";

interface CardLikeCueProps {
  likeOpacity: Animated.AnimatedInterpolation;
  dislikeOpacity: Animated.AnimatedInterpolation;
}

function CardLikeCue({ likeOpacity, dislikeOpacity }: CardLikeCueProps) {

  const iconName = (type:boolean) => type ? "heart" : "heart-dislike";
  const iconColor = (type:boolean) => type ? "green" : "red";

  const likeIcon = (type:boolean) => (
    <Icon
      name={iconName(type)}
      color={iconColor(type)}
      style={{
        textAlign: "center",
        position: "relative",
        left: 15,
        fontSize: 100,
      }}
    />
  );


  return (
    <>
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { opacity: likeOpacity }]}
    >
      {likeIcon(true)}
    </Animated.View>
    <Animated.View
      pointerEvents="none"
      style={[styles.container, { opacity: dislikeOpacity }]}
    >
      {likeIcon(false)}
    </Animated.View>
    </>
  );
}

export default CardLikeCue;
