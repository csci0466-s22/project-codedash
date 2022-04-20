import { View, Text, StyleSheet } from "react-native";


function PostingScreen(){
  

  return(
    <View style={styles.container}>
      <Text>Posting Screen</Text>
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


export default PostingScreen;