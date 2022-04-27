import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import NativeIconicIcon from '../components/NativeIconicIcon';
import Avatar from "../components/Avatar";
import AvatarBadge from "../components/AvatarBadge";


const Stack = createStackNavigator();

function ExploreScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore Screen</Text>
      <View style={styles.avatarContainer}>
        <Avatar
          user={{
            id: "124",
            name: "Wayne",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          size="small"
          clickable={true}
        />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#211D33",
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
  avatarContainer: {
    position: "absolute",
    top: 60,
    right: 20,
  },
});

export default ExploreScreen;