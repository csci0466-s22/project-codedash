import User from "../../lib/types/user.js";
import Avatar from "../Avatar";
import { View, TouchableOpacity, Text } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import styles from "./AvatarBadgeStyle";

interface AvatarBadgeProps {
  user: User;
  shouldShowBorder?: boolean;
  first?: "name" | "avatar";
}

function AvatarBadge({ user, shouldShowBorder, first = "avatar" }: AvatarBadgeProps) {
  const to = { screen: "Profile", params: { id: user?.id } };
  const { onPress } = useLinkProps({ to }) ?? { onPress: () => { } };

  const nameBadgeStyle = first==="name" ? styles.nameBadge1 : styles.nameBadge2;

  const avatar = (
    <View style={styles.avatar}>
      <Avatar user={user} size="small" clickable={false} />
    </View>
  );

  const name = (
    <View style={nameBadgeStyle}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={nameBadgeStyle}>
        @{user?.name}
      </Text>
    </View>
  );

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {first === "avatar" ? avatar : name}
      {first === "avatar" ? name : avatar}
    </TouchableOpacity>
  );
}

export default AvatarBadge;
