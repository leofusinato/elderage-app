import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Calendar } from "../screens/Calendar";

import { StyleSheet, View } from "react-native";
import { theme } from "../global/styles";

const MainStack = createBottomTabNavigator();

const MainRoutes: React.FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Ionicons
                  name="md-home-outline"
                  size={24}
                  color={focused ? theme.colors.white : "#9656FE"}
                />
              </View>
            );
          },
        }}
      />
      <MainStack.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Octicons
                  name="calendar"
                  size={24}
                  color={focused ? theme.colors.white : "#9656FE"}
                />
              </View>
            );
          },
        }}
      />
      <MainStack.Screen
        name="AddAged"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <MaterialCommunityIcons
                  name="plus"
                  size={24}
                  color={focused ? theme.colors.white : "#9656FE"}
                />
              </View>
            );
          },
        }}
      />
      <MainStack.Screen
        name="Chat"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Ionicons
                  name="ios-chatbubbles-outline"
                  size={24}
                  color={focused ? theme.colors.white : "#9656FE"}
                />
              </View>
            );
          },
        }}
      />
      <MainStack.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <AntDesign
                  name="user"
                  size={24}
                  color={focused ? theme.colors.white : "#9656FE"}
                />
              </View>
            );
          },
        }}
      />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: "#9656FE",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  inactiveContainer: {
    backgroundColor: theme.colors.white,
  },
});

export default MainRoutes;
