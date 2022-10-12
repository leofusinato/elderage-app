import React, { useMemo, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";

import { Header } from "./components/Header";
import LoginButton from "../Login/components/LoginButton";
import Input from "../../components/Inputs/Input";

import { RecoveryPasswordNavigationProps } from "../../global/route.types";
import { api } from "../../services/api";
import { theme } from "../../global/styles";
import { styles } from "./styles";
import { PasswordValidator } from "../Signup/RegisterAuth/components/PasswordValidator";

export function NewPassword({
  navigation,
  route,
}: RecoveryPasswordNavigationProps) {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const hasEightCharacters = useMemo(() => {
    return newPassword.length >= 8;
  }, [newPassword]);

  const hasNumber = useMemo(() => {
    const regex = /[0-9]/;
    return regex.test(newPassword);
  }, [newPassword]);

  const validPassword = useMemo(() => {
    return hasEightCharacters && hasNumber;
  }, [newPassword]);

  const handleChangePassword = async () => {
    if (validPassword) {
      setLoading(true);
      try {
        const email = route.params.email;
        await api.post("/resetPassword", {
          email,
          password: newPassword,
        });
        navigation.navigate("Login");
      } catch {
        Alert.alert("Ops!", "Erro ao alterar a senha, tente novamente");
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Ops!", "Senha inválida");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Header />

        <Text style={styles.newPassword}>{`Informe sua nova senha`}</Text>

        <View style={styles.content}>
          <Input
            placeholder="Digite sua nova senha"
            leftIcon="lock"
            isPassword
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <PasswordValidator
            description="Necessário 8 dígitos"
            checked={hasEightCharacters}
          />
          <PasswordValidator
            description="Ao menos 1 número"
            checked={hasNumber}
          />
          <LoginButton
            style={styles.button}
            description="Alterar senha"
            onPress={async () => handleChangePassword()}
          />
          {loading && (
            <ActivityIndicator
              style={styles.loading}
              size="large"
              color={theme.colors.primary}
            />
          )}
        </View>
      </View>
    </View>
  );
}
