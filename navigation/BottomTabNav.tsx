import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostingScreen from '../screens/PostingScreen';
import MainStack from './MainStack';
import ExploreScreen from '../screens/ExploreScreen';

import NativeIconicIcon from '../components/NativeIconicIcon';
import ExploreStack from './ExploreStack';


const Tab = createBottomTabNavigator();

function BottomTabNav() {
  const tabBarActiveTintColor = '#fff';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1C1C17",
          borderTopWidth: 0,
        },
      }}
      initialRouteName="MainStack"
    >
      <Tab.Screen
        name="Edit"
        component={PostingScreen}
        options={{
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarIcon: ({ color, size }) => (
            <NativeIconicIcon name="create" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={MainStack}
        options={{
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarIcon: ({ color, size }) => (
            <NativeIconicIcon name="logo-buffer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarActiveTintColor: tabBarActiveTintColor,
          tabBarIcon: ({ color, size }) => (
            <NativeIconicIcon name="compass" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;