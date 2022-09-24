import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../global/route.types";

import { NewAged } from "../screens/NewAged";

const NewAgedStack = createNativeStackNavigator<AppStackParamList>();

export default function NewAgedRoutes() {
  return (
    <NewAgedStack.Navigator
      screenOptions={{
        animation: "none",
        headerShown: false,
      }}
    >
      <NewAgedStack.Screen name="AddAged" component={NewAged} />
    </NewAgedStack.Navigator>
  );
}
