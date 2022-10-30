import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, ScrollView, Text, Image, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Input from "../../components/Inputs/Input";
import LoginButton from "./components/LoginButton";

import { AppStackParamList } from "../../global/route.types";
import { AuthLoginResponse } from "../../global/models/auth";
import { useAuth } from "../../contexts/AuthProvider";
import { setAuth } from "../../services/auth.storage";
import { api } from "../../services/api";

import { theme } from "../../global/styles";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";

export default function Login() {
  const { setUser } = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "Login">>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);
      try {
        const response = await api.post<AuthLoginResponse>("/login", {
          email: email.toLocaleLowerCase().trim(),
          password: password.trim(),
        });
        if (response.status === 200) {
          const {
            user: { id, name, email },
            token,
            refreshToken,
          } = response.data;
          await setAuth({ id, name, email, token, refreshToken });
          setUser({ id, name, email, token });
        }
      } catch {
        Alert.alert("Ops!", "E-mail ou senha incorretos. Tente novamente");
      }
      setLoading(false);
    }
  };

  const handleRecoverPassword = async () => {
    if (email.length > 0) {
      const formattedEmail = email.toLocaleLowerCase().trim();
      navigation.navigate("RecoveryPassword", { email: formattedEmail });
      await api.post("forgotPassword", {
        email: formattedEmail,
      });
    } else {
      Alert.alert("", "Por favor, primeiro informe seu e-mail");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/images/banner-login.png")} />
      <View style={styles.main}>
        <Text style={styles.title}>Elderage</Text>

        <Input
          placeholder="E-mail"
          leftIcon="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Digite sua senha"
          leftIcon="lock"
          isPassword
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <LoginButton
          loading={loading}
          onPress={async () => await handleLogin()}
        />

        <Button onPress={async () => await handleRecoverPassword()}>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </Button>

        <View style={styles.footer}>
          <Button
            style={styles.registerButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <MaterialIcons
              name="keyboard-arrow-up"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.registerText}>Cadastre-se aqui</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
