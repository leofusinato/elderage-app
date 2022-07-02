import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../global/route.types';

import { RegisterName } from '../screens/Signup/RegisterName';
import { RegisterAuth } from '../screens/Signup/RegisterAuth';

const SignupStack = createNativeStackNavigator<AppStackParamList>()

const SignupRoutes: React.FC = () => (
  <SignupStack.Navigator
    screenOptions={{
      animation: 'none',
      headerShown: false
    }}>
    <SignupStack.Screen
      name="RegisterName"
      component={RegisterName}
    />
    <SignupStack.Screen
      name="RegisterAuth"
      component={RegisterAuth}
    />
  </SignupStack.Navigator>
)

export default SignupRoutes;