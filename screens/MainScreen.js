import { View, Text, Image, StyleSheet } from "react-native";


function MainScreen() {


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo-codedash.png")}
        style={{
          width: '100%',
          height: '20%',
        }}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  }
});


export default MainScreen;