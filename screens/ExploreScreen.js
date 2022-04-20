import { View, Text, StyleSheet } from "react-native";


function ExploreScreen(){
  

  return(
    <View style={styles.container}>
      <Text>Explore Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ExploreScreen;