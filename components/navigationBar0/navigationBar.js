import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./navigationBarStyle";

const tabBar = () => {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "settings-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={55}
        circleWidth={55}
        bgColor="white"
        borderTopLeftRight
        initialRouteName="title1"
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => {}}
            >
              <Ionicons name={"apps-sharp"} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="left"
          component={({ navigate }) => (
            <View style={{ backgroundColor: "#BFEFFF", flex: 1 }} />
          )}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={({ navigate }) => (
            <View style={{ backgroundColor: "#FFEBCD", flex: 1 }} />
          )}
          position="right"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};


export default tabBar;