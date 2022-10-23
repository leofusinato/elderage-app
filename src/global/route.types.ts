import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ContactProps } from "./models/contact";
import { MedicationProps } from "./models/medication";

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
  MedicationsList: {
    list: MedicationProps[];
    aged: {
      id: string;
      name: string;
      gender: string;
    };
  };
  ContactsList: {
    list: ContactProps[];
    aged: {
      id: string;
      name: string;
      gender: string;
    };
  };
  NewContact: {
    agedId: string;
    contact?: ContactProps;
  };
  NewMedication: {
    agedId: string;
    medication?: MedicationProps;
  };
  SendInvite: {
    agedId: string;
  };
  SuccessInvite: undefined;
};

export type LoginNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "Login">;
};

export type RegisterNameNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "RegisterName">;
};

export type SuccessInviteNavigationProps = {
  navigation: NativeStackNavigationProp<AppStackParamList, "SuccessInvite">;
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

export type NewContactNavigationProps = {
  route: RouteProp<AppStackParamList, "NewContact">;
  navigation: NativeStackNavigationProp<AppStackParamList, "NewContact">;
};

export type NewMedicationNavigationProps = {
  route: RouteProp<AppStackParamList, "NewMedication">;
  navigation: NativeStackNavigationProp<AppStackParamList, "NewMedication">;
};

export type AgedDetailsNavigationProps = {
  route: RouteProp<AppStackParamList, "AgedDetails">;
  navigation: NativeStackNavigationProp<AppStackParamList, "AgedDetails">;
};

export type MedicationsListNavigationProps = {
  route: RouteProp<AppStackParamList, "MedicationsList">;
  navigation: NativeStackNavigationProp<AppStackParamList, "MedicationsList">;
};

export type ContactsListNavigationProps = {
  route: RouteProp<AppStackParamList, "ContactsList">;
  navigation: NativeStackNavigationProp<AppStackParamList, "ContactsList">;
};

export type SendInviteNavigationProps = {
  route: RouteProp<AppStackParamList, "SendInvite">;
  navigation: NativeStackNavigationProp<AppStackParamList, "SendInvite">;
};
