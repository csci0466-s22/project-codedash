import User from "../../lib/types/user.js";
import Avatar from "../Avatar";
import { View, TouchableOpacity, Text } from "react-native";
import { useLinkProps } from "@react-navigation/native";
import styles from "./AvatarBadgeStyle";

interface AvatarBadgeProps {
  user: User;
}

function AvatarBadge({ user }: AvatarBadgeProps) {
  const to = { screen: "Profile", params: { id: user?.id } };
  const { onPress } = useLinkProps({ to }) ?? { onPress: () => {} };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.avatar}>
        <Avatar user={user} size="small" clickable={false} />
      </View>
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.nameBadge}>
        @{user?.name}
      </Text>
    </TouchableOpacity>
  );
}

export default AvatarBadge;
