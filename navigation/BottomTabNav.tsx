import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostingScreen from '../screens/PostingScreen';
import MainScreen from '../screens/MainScreen';
import ExploreScreen from '../screens/ExploreScreen';

import NativeIconicIcon from '../components/NativeIconicIcon';


const Tab = createBottomTabNavigator();

function BottomTabNav() {

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Edit"
        component={PostingScreen}
        options={{
          tabBarIcon: ({ color, size }) => <NativeIconicIcon name="create" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={MainScreen}
        options={{
          //tabBarLabel: 'Data',
          tabBarIcon: ({ color, size }) => <NativeIconicIcon name="logo-buffer" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => <NativeIconicIcon name="compass" color={color} size={size} />
        }}
      />
    </Tab.Navigator>

  )
}

export default BottomTabNav;