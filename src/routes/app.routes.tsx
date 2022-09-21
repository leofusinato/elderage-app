import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainRoutes from "./main.routes";
import { AppStackParamList } from "../global/route.types";
import { AgedDetails } from "../screens/AgedDetails";
import { NewAgedProvider } from "../contexts/NewAgedProvider";

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

const AppRoutes: React.FC = () => (
  <NewAgedProvider>
    <Navigator
      initialRouteName="MainHome"
      screenOptions={{
        animation: "slide_from_right",
        headerShown: false,
      }}
    >
      <Screen name="MainHome" component={MainRoutes} />
      <Screen
        name="AgedDetails"
        component={AgedDetails}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  </NewAgedProvider>
);

export default AppRoutes;
