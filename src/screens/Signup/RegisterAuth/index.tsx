import React, { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../../components/Button";
import Input from "../../../components/Inputs/Input";
import { PasswordValidator } from "./components/PasswordValidator";

import {
  AppStackParamList,
  RegisterAuthNavigationProps,
} from "../../../global/route.types";
import { api } from "../../../services/api";
import { theme } from "../../../global/styles";
import { styles } from "./styles";

export function RegisterAuth({ route }: RegisterAuthNavigationProps) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParamList, "RegisterAuth">
    >();
  const name = route.params.name;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const hasEightCharacters = useMemo(() => {
    return password.length >= 8;
  }, [password]);

  const hasNumber = useMemo(() => {
    const regex = /[0-9]/;
    return regex.test(password);
  }, [password]);

  const validPassword = useMemo(() => {
    return hasEightCharacters && hasNumber;
  }, [password]);

  const handleSignup = async () => {
    if (email && validPassword) {
      try {
        await api.post("/users", { name, email, password });
        navigation.navigate("Login");
      } catch (err) {
        console.log(JSON.stringify(err, null, 2));
        Alert.alert("Ops!", "Erro ao cadastrar o usuário");
      }
    } else {
      Alert.alert(
        "Atenção!",
        "Verifique se o email está informado corretamente e se a senha atende aos requisitos"
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.main}>
        <View style={styles.row}>
          <Button onPress={() => navigation.goBack()}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              color={theme.colors.primary}
            />
          </Button>
          <Text style={styles.signupText}>Cadastre-se aqui</Text>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={theme.colors.white}
          />
        </View>
        <KeyboardAvoidingView
          behavior={"height"}
          style={{
            flex: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.almost}>Quase lá...</Text>
          <Input
            placeholder="Nos informe o seu e-mail"
            leftIcon="user"
            value={email}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
          />
          <Input
            placeholder="Crie uma senha"
            leftIcon="lock"
            isPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <PasswordValidator
            description="Necessário 8 dígitos"
            checked={hasEightCharacters}
          />
          <PasswordValidator
            description="Ao menos 1 número"
            checked={hasNumber}
          />

          <View style={styles.footer}>
            <Button
              style={styles.buttonContainer}
              onPress={async () => await handleSignup()}
            >
              <Text style={styles.buttonText}>Cadastrar</Text>
            </Button>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}
