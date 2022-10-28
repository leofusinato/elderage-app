import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TaskProps } from "../../../../../../global/models/task";

import { styles } from "./styles";
import { theme } from "../../../../../../global/styles";
import { formatTime } from "../../../../../../utils/date";
import { TaskMenu } from "../../../../../../components/TaskMenu";
import { Button } from "../../../../../../components/Button";

type Props = {
  data: TaskProps;
  first: boolean;
  onDone: () => Promise<void>;
};

export function TaskCard({ data, first, onDone }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <Button
      style={[styles.container, first ? styles.firstContainer : {}]}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View style={styles.image}>
          <MaterialCommunityIcons
            name={data.aged.gender === "M" ? "face-man" : "face-woman"}
            size={30}
            color={first ? theme.colors.white : theme.colors.primary}
          />
        </View>
        <View style={styles.headerInfoContainer}>
          <FontAwesome5
            name={data.medication.time_type === 1 ? "capsules" : "clock"}
            size={12}
            color={theme.colors.primary}
            style={styles.clock}
          />
          <Text style={styles.hour}>
            {data.medication.time_type === 1
              ? data.remaining
              : formatTime(data.schedule)}
          </Text>
        </View>
      </View>
      <Text style={[styles.name, first ? styles.firstCardName : {}]}>
        {data.aged.name}
      </Text>
      <View style={styles.footer}>
        <Text
          numberOfLines={1}
          style={[styles.description, first ? styles.firstDescription : {}]}
        >
          {data.medication.description}
        </Text>
        <TaskMenu
          data={data}
          visible={visible}
          onClose={() => setVisible(false)}
          onOpen={() => setVisible(true)}
          onDone={onDone}
          color={first ? theme.colors.white : theme.colors.neutral500}
        />
      </View>
    </Button>
  );
}
