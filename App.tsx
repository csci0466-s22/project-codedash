import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomTabNav from './navigation/BottomTabNav';

export default function App() {

  return (
    <NavigationContainer >
      
      <BottomTabNav />
      <StatusBar style="light" />

    </NavigationContainer>

  );
}
