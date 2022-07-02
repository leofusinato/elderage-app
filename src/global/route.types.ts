import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackParamList = {
  Login: undefined;
  RegisterName: undefined;
  RegisterAuth: undefined;
};

export type LoginNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Login">;
};

export type RegisterNameNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "RegisterName">;
};

export type RegisterAuthNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "RegisterAuth">;
};
