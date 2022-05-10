import { createStackNavigator } from '@react-navigation/stack';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SingleCardScreen from '../screens/SingleCardScreen';

const Stack = createStackNavigator();

function ExploreStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          //tabBarIcon: ({ color:, size }) => <NativeIconicIcon name="checkmark-circle" color={color} size={size} />
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

export default ExploreStack;