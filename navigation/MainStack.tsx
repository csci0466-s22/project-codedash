import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SingleCardScreen from '../screens/SingleCardScreen';

const Stack = createStackNavigator();

function MainStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          //tabBarIcon: ({ color, size }) => <NativeIconicIcon name="checkmark-circle" color={color} size={size} />
        }} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          //tabBarIcon: ({ color, size }) => <NativeIconicIcon name="checkmark-circle" color={color} size={size} />
        }} />
      <Stack.Screen
        name="SingleCard"
        component={SingleCardScreen}
        options={{
          //tabBarIcon: ({ color, size }) => <NativeIconicIcon name="checkmark-circle" color={color} size={size} />
        }} />
    </Stack.Navigator>
  )
}

export default MainStack;