import { Ionicons } from "@expo/vector-icons";
import React, { Children, useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { Row } from "../../components/Row";
import { InviteProps } from "../../global/models/invite";
import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { InviteCard } from "./components/InviteCard";

import { styles } from "./styles";

export function Notifications() {
  const [notifications, setNotifications] = useState<InviteProps[]>([]);

  const load = async () => {
    try {
      const response = await api.get("/invite/guest");
      if (response.status === 200) {
        setNotifications(response.data);
      }
    } catch {
      Alert.alert("Ops", "Houve um erro ao carregar as notificações");
    }
  };

  useEffect(() => {
    (async () => {
      await load();
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Row style={styles.header}>
        <Ionicons
          name="notifications-outline"
          size={22}
          color={theme.colors.neutral700}
        />
        <Text style={styles.title}>Notificações</Text>
      </Row>
      {Children.toArray(
        notifications.map((item) => (
          <InviteCard invite={item} onAction={load} />
        ))
      )}
    </View>
  );
}
