import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../global/route.types";

import { RegisterName } from "../screens/Signup/RegisterName";
import { RegisterAuth } from "../screens/Signup/RegisterAuth";

const NewAgedStack = createNativeStackNavigator<AppStackParamList>();

export default function NewAgedRoutes() {
  <NewAgedStack.Navigator
    screenOptions={{
      animation: "none",
      headerShown: false,
    }}
  >
    <NewAgedStack.Screen name="RegisterName" component={RegisterName} />
    <NewAgedStack.Screen name="RegisterAuth" component={RegisterAuth} />
  </NewAgedStack.Navigator>;
}
