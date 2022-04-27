import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import NativeIconicIcon from '../components/NativeIconicIcon';


const Stack = createStackNavigator();

function ExploreScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <Pressable onPress={() => navigation.navigate('Explore', { screen: 'Profile' })} >
        <NativeIconicIcon name="person" color={'black'} size={30} />
      </Pressable>
    </View >
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