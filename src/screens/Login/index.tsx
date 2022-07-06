import React, { useCallback, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import AuthInput from "../../components/Inputs/AuthInput";
import LoginButton from "./components/LoginButton";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../global/route.types";
import { api } from "../../services/api";
import { setAuth } from "../../services/auth.storage";
import { AuthLoginResponse } from "../../global/models/auth";
import { theme } from "../../global/styles";
import { styles } from "./styles";
import { useAuth } from "../../contexts/AuthProvider";

export default function Login() {
  const { setUser } = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "Login">>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email.length > 0 && password.length > 0) {
      const response = await api.post<AuthLoginResponse>("/login", {
        email,
        password,
      });
      if (response.status === 200) {
        const {
          user: { id, name, email },
          token,
        } = response.data;
        await setAuth({ id, name, email, token });
        setUser({ id, name, email, token });
        Alert.alert("OK!");
      } else {
        Alert.alert("Ops!", "E-mail ou senha incorretos. Tente novamente");
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../assets/images/banner-login.png")} />
      <View style={styles.main}>
        <Text style={styles.title}>Elderage</Text>

        <AuthInput
          placeholder="E-mail"
          leftIcon="user"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <AuthInput
          placeholder="Digite sua senha"
          leftIcon="lock"
          isPassword
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <LoginButton onPress={async () => await handleLogin()} />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <MaterialIcons
              name="keyboard-arrow-up"
              size={24}
              color={theme.colors.primary}
            />
            <Text style={styles.registerText}>Cadastre-se aqui</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
