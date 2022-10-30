import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Calendar } from "../screens/Calendar";

import { StyleSheet, View } from "react-native";
import { theme } from "../global/styles";
import { NewAged } from "../screens/NewAged";
import NewAgedRoutes from "./newAged.routes";
import { useNewAged } from "../contexts/NewAgedProvider";
import { Notifications } from "../screens/Notifications";
import { Profile } from "../screens/Profile";

const MainStack = createBottomTabNavigator();

const MainRoutes: React.FC = () => {
  const { setNewAged } = useNewAged();

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
                <Feather
                  name="home"
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
                <Feather
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
        name="NewAged"
        component={NewAgedRoutes}
        listeners={{
          tabPress: () => {
            setNewAged(null);
          },
        }}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Feather
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
        name="Notifications"
        component={Notifications}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Feather
                  name="bell"
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
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={
                  focused ? styles.activeContainer : styles.inactiveContainer
                }
              >
                <Feather
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
