import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../../../global/styles";
import { styles } from "./styles";
import { TaskMenu } from "../../../../components/TaskMenu";
import { TaskProps } from "../../../../global/models/task";
import { formatTime } from "../../../../utils/date";

type Props = {
  data: TaskProps;
  done?: boolean;
  onDone?: () => Promise<void>;
};

export function Card({ data, done = false, onDone }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const mainColor = useMemo(() => {
    return done ? theme.colors.success : theme.colors.primary;
  }, [done]);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: mainColor }]}
      activeOpacity={0.6}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.image}>
            <MaterialCommunityIcons
              name={data.aged.gender === "M" ? "face-man" : "face-woman"}
              size={30}
              color={mainColor}
            />
          </View>
          <Text style={styles.name}>{data.aged.name}</Text>
        </View>
        <View style={styles.right}>
          <FontAwesome5
            name={data.medication.time_type === 1 ? "capsules" : "clock"}
            size={15}
            color={mainColor}
          />
          <Text style={[styles.hour, { color: mainColor }]}>
            {formatTime(data.schedule)}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, { color: mainColor }]}>
          {data.medication.details}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <FontAwesome5
            name={"capsules"}
            size={18}
            color={theme.colors.white}
          />
          <Text style={styles.local}>{data.medication.description}</Text>
        </View>
        {!done && (
          <TaskMenu
            visible={menuVisible}
            onOpen={() => setMenuVisible(true)}
            onClose={() => setMenuVisible(false)}
            data={data}
            onDone={async () => {
              if (onDone) {
                await onDone();
              }
            }}
          />
        )}
        {/* {!done && (
          <TouchableOpacity
            hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
          >
            <Entypo
              name="dots-three-vertical"
              size={16}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        )} */}
      </View>
    </TouchableOpacity>
  );
}
