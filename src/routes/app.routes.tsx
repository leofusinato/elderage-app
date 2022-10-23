import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainRoutes from "./main.routes";
import { AppStackParamList } from "../global/route.types";
import { AgedDetails } from "../screens/AgedDetails";
import { NewAgedProvider } from "../contexts/NewAgedProvider";
import { MedicationsList } from "../screens/AgedDetails/screens/MedicationsList";
import { ContactsList } from "../screens/AgedDetails/screens/ContactsList";
import { NewContact } from "../screens/NewContact";
import { NewMedication } from "../screens/NewMedication";
import { SendInvite } from "../screens/SendInvite";
import { SuccessInvite } from "../screens/SuccessInvite";

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
      <Screen
        name="MedicationsList"
        component={MedicationsList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="ContactsList"
        component={ContactsList}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="NewContact"
        component={NewContact}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="NewMedication"
        component={NewMedication}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SendInvite"
        component={SendInvite}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="SuccessInvite"
        component={SuccessInvite}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  </NewAgedProvider>
);

export default AppRoutes;
