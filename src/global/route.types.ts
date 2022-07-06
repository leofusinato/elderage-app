import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Login: undefined;
  RegisterName: undefined;
  RegisterAuth: {
    name: string;
  };
  SignupStack: undefined;
  Signup: undefined;
};

export type LoginNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Login">;
};

export type RegisterNameNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "RegisterName">;
};

export type RegisterAuthNavigationProps = {
  route: RouteProp<AppStackParamList, "RegisterAuth">;
  navigation: NativeStackNavigationProp<AppStackParamList, "RegisterAuth">;
};

export type SignupStackNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "SignupStack">;
};

export type SignupNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Signup">;
};
