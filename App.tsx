import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import BottomTabNav from './navigation/BottomTabNav';

export default function App() {

  return (
    <NavigationContainer >
      
      <BottomTabNav />
      <StatusBar style="light" />

    </NavigationContainer>

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
