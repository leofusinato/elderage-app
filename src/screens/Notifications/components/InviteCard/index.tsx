import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Row } from "../../../../components/Row";

import { InviteProps } from "../../../../global/models/invite";
import { InviteSituation } from "../../../../utils/constants";
import { api } from "../../../../services/api";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  invite: InviteProps;
  onAction: () => Promise<void>;
};

export function InviteCard({ invite, onAction }: Props) {
  const handleAction = async (action: "accept" | "decline") => {
    try {
      const response = await api.patch(`/invite/${invite.id}/${action}`);
      if (response.status === 200) {
        await onAction();
      }
    } catch {
      Alert.alert("Ops", "Houve um erro ao realizar a ação.");
    }
  };

  const Actions = () => {
    if (invite.situation === InviteSituation.OPENED) {
      return (
        <Row>
          <TouchableOpacity
            onPress={async () => await handleAction("decline")}
            activeOpacity={0.5}
            style={[
              styles.button,
              { marginRight: 8, backgroundColor: theme.colors.secondary300 },
            ]}
          >
            <Text
              style={[styles.actionText, { color: theme.colors.secondary }]}
            >
              Rejeitar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => await handleAction("accept")}
            activeOpacity={0.5}
            style={[
              styles.button,
              { backgroundColor: theme.colors.success300 },
            ]}
          >
            <Text style={[styles.actionText, { color: theme.colors.success }]}>
              Aceitar
            </Text>
          </TouchableOpacity>
        </Row>
      );
    }
    if (invite.situation === InviteSituation.ACCEPTED) {
      return (
        <Row>
          <View
            style={[
              styles.button,
              { backgroundColor: theme.colors.success300 },
            ]}
          >
            <Text style={[styles.actionText, { color: theme.colors.success }]}>
              Você aceitou
            </Text>
          </View>
        </Row>
      );
    } else {
      return (
        <Row>
          <View
            style={[
              styles.button,
              { marginRight: 8, backgroundColor: theme.colors.secondary300 },
            ]}
          >
            <Text
              style={[styles.actionText, { color: theme.colors.secondary }]}
            >
              Você recusou
            </Text>
          </View>
        </Row>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Row>
        <View style={styles.circle}>
          <SimpleLineIcons
            name="refresh"
            size={17}
            color={theme.colors.primary}
          />
        </View>
        <Text style={styles.username}>{invite.user.name}</Text>
      </Row>
      <Text
        style={styles.message}
      >{`Te convidou para compartilhar os dados do(a) idoso(a) ${invite.aged.name}`}</Text>
      <Actions />
    </View>
  );
}
