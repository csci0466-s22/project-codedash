import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Avatar from './components/Avatar';
import AvatarBadge from './components/AvatarBadge';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("./assets/logo-codedash.png")}
          style={{
            width: "100%",
            height: 100,
            resizeMode: "contain",
          }}
        ></Image>
        <Avatar
          user={{
            id: "123",
            name: "Nich",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          size="small"
          clickable={true}
        ></Avatar>
        <AvatarBadge
          user={{
            id: "123",
            name: "NicholasSliterrrrrrrrrrr",
            avatar:
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
        />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#211D33",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    width: "95%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
