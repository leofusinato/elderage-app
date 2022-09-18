import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackParamList = {
  MainHome: undefined;
  Home: undefined;
  Calendar: undefined;
  AddAged: undefined;
  Login: undefined;
  RegisterName: undefined;
  RegisterAuth: {
    name: string;
  };
  SignupStack: undefined;
  Signup: undefined;
  RecoveryPassword: {
    email: string;
  };
  NewPassword: {
    email: string;
  };
  AgedDetails: {
    id: string;
  };
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

export type RecoveryPasswordNavigationProps = {
  route: RouteProp<AppStackParamList, "RecoveryPassword">;
  navigation: NativeStackNavigationProp<AppStackParamList, "RecoveryPassword">;
};

export type NewPasswordNavigationProps = {
  route: RouteProp<AppStackParamList, "NewPassword">;
  navigation: NativeStackNavigationProp<AppStackParamList, "NewPassword">;
};

export type SignupStackNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "SignupStack">;
};

export type SignupNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Signup">;
};

export type HomeNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Home">;
};

export type CalendarNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Calendar">;
};

export type AddAgedNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "AddAged">;
};

export type AgedDetailsNavigationProps = {
  route: RouteProp<AppStackParamList, "AgedDetails">;
  navigation: NativeStackNavigationProp<AppStackParamList, "AgedDetails">;
};
