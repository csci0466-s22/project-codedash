import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostingScreen from '../screens/PostingScreen';
import MainStack from './MainStack';

import NativeIconicIcon from '../components/NativeIconicIcon';
import ExploreStack from './ExploreStack';
import useKeyboardOpen from '../lib/hooks/useKeyboardOpen';
import { Platform } from 'react-native';


const Tab = createBottomTabNavigator();

function BottomTabNav() {
  const tabBarActiveTintColor = '#fff';
  const keyboardOpen = useKeyboardOpen();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        //tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: "#1C1C17",
          borderTopWidth: 0,
          height: (keyboardOpen) ? 0 : (Platform.OS === 'ios' ? 80 : 60),
          position: "absolute",
          bottom: 0,
          zIndex: keyboardOpen ? -1 : 1000,
        },
        tabBarShowLabel: false,
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