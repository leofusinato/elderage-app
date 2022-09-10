import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../global/route.types";

import { NewAgedProvider } from "../contexts/NewAgedProvider";
import { NewAged } from "../screens/NewAged";

const NewAgedStack = createNativeStackNavigator<AppStackParamList>();

export default function NewAgedRoutes() {
  return (
    <NewAgedProvider>
      <NewAgedStack.Navigator
        screenOptions={{
          animation: "none",
          headerShown: false,
        }}
      >
        <NewAgedStack.Screen name="AddAged" component={NewAged} />
      </NewAgedStack.Navigator>
    </NewAgedProvider>
  );
}
