import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Text, View } from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { Header } from "./components/Header";

import { RecoveryPasswordNavigationProps } from "../../global/route.types";
import { api } from "../../services/api";
import { theme } from "../../global/styles";
import { styles } from "./styles";

const CELL_COUNT = 6;

export function RecoveryPassword({
  navigation,
  route,
}: RecoveryPasswordNavigationProps) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleConfirmToken = async (token: string) => {
    setLoading(true);
    try {
      const email = route.params.email;
      await api.post("/verifyToken", {
        email,
        token: token,
      });
      navigation.replace("NewPassword", { email });
    } catch {
      Alert.alert("Ops!", "Token inválido, tente novamente");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeValue = async (text: string) => {
    setValue(text);
    if (text.length == CELL_COUNT) {
      await handleConfirmToken(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Header />

        <Text
          style={styles.sendCode}
        >{`Enviamos um código\nno seu e-mail`}</Text>

        <View style={styles.codeContainer}>
          <CodeField
            {...props}
            ref={ref}
            caretHidden={false}
            value={value}
            onChangeText={async (text) => await handleChangeValue(text)}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>

        {loading && (
          <ActivityIndicator
            style={styles.loading}
            size="large"
            color={theme.colors.primary}
          />
        )}
      </View>
    </View>
  );
}
