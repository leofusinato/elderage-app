import React from "react";
import { Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { CheckinMedicationProps } from "../../../../../../global/models/checkin";
import { theme } from "../../../../../../global/styles";
import { styles } from "./styles";
import moment from "moment";
import { getTimeFromDate } from "../../../../../../utils/date";

type Props = {
  data: CheckinMedicationProps;
};

export function ListItem({ data }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <FontAwesome5
          name="check-circle"
          size={24}
          color={theme.colors.success}
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>{data.medication.aged.name}</Text>
          <Text style={styles.subtitle}>{data.medication.description}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <FontAwesome5
          name="clock"
          size={12}
          color={theme.colors.success}
          style={styles.icon}
        />
        {/* <Text>{getTimeFromDate(new Date(data.date_hour_applied))}</Text> */}
        <Text style={styles.time}>
          {moment(data.date_hour_applied).format("LT")}
        </Text>
      </View>
    </View>
  );
}
