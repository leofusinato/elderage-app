import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { Button } from "../../components/Button";

import { useAuth } from "../../contexts/AuthProvider";
import { theme } from "../../global/styles";
import * as localStorage from "../../services/auth.storage";
import { styles } from "./styles";

export function Profile() {
  const { setUser, user } = useAuth();

  const handleSignOut = async () => {
    await localStorage.clear();
    setUser(null);
  };

  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.center}>
            <View style={styles.image}>
              <Feather name="user" size={40} color={theme.colors.neutral500} />
            </View>
            <Text style={styles.name}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>
        </ScrollView>
        <Button style={styles.signOut} onPress={handleSignOut}>
          <Text style={styles.logout}>Sair da conta</Text>
        </Button>
      </View>
    </>
  );
}
