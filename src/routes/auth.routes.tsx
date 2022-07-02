import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '../global/route.types';
import Login from '../screens/Login';
import { Signup } from '../screens/Signup';

const AuthStack = createNativeStackNavigator<AppStackParamList>()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{
      animation: 'slide_from_right',
      headerShown: false
    }}>
    <AuthStack.Screen
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      name="Signup"
      component={Signup}
    />
  </AuthStack.Navigator>
)

export default AuthRoutes;