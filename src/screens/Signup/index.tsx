import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import SignupRoutes from "../../routes/signup.routes";

export function Signup() {
  return (
    <View style={styles.container}>
      <SignupRoutes />
    </View>
  );
}
