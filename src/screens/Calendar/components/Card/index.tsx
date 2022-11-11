import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { TaskMenu } from "../../../../components/TaskMenu";
import { TaskProps } from "../../../../global/models/task";

import { formatTime } from "../../../../utils/date";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  data: TaskProps;
  done?: boolean;
  onDone?: () => Promise<void>;
};

type Colors = {
  main: string;
  border: string;
  image: string;
  backgroundImage: string;
  rightBackground: string;
  name: string;
  description: string;
  descriptionBackground: string;
  time: string;
  place: string;
  icon: string;
};

export function Card({ data, done = false, onDone }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const colors = useMemo<Colors>(() => {
    return done
      ? {
          main: theme.colors.success,
          border: theme.colors.success,
          image: theme.colors.success,
          backgroundImage: theme.colors.white,
          rightBackground: theme.colors.white,
          name: theme.colors.white,
          description: theme.colors.success,
          descriptionBackground: theme.colors.white,
          time: theme.colors.success,
          place: theme.colors.white,
          icon: theme.colors.white,
        }
      : {
          main: theme.colors.white,
          border: theme.colors.primary,
          image: theme.colors.primary,
          backgroundImage: theme.colors.primaryBackground,
          rightBackground: theme.colors.primaryBackground,
          name: theme.colors.primary,
          description: theme.colors.primary,
          descriptionBackground: theme.colors.primaryBackground,
          time: theme.colors.primary,
          place: theme.colors.primary,
          icon: theme.colors.primary,
        };
  }, [done]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.main,
          borderColor: colors.border,
        },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <View
            style={[styles.image, { backgroundColor: colors.backgroundImage }]}
          >
            <MaterialCommunityIcons
              name={data.aged.gender === "M" ? "face-man" : "face-woman"}
              size={30}
              color={colors.image}
            />
          </View>
          <Text style={[styles.name, { color: colors.name }]}>
            {data.aged.name}
          </Text>
        </View>
        <View
          style={[styles.right, { backgroundColor: colors.rightBackground }]}
        >
          <FontAwesome5
            name={data.medication.time_type === 1 ? "capsules" : "clock"}
            size={15}
            color={colors.time}
          />
          <Text style={[styles.hour, { color: colors.time }]}>
            {data.medication.time_type === 1
              ? data.remaining
              : formatTime(data.schedule)}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.descriptionContainer,
          { backgroundColor: colors.descriptionBackground },
        ]}
      >
        <Text style={[styles.description, { color: colors.description }]}>
          {data.medication.details}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <FontAwesome5 name={"capsules"} size={18} color={colors.icon} />
          <Text style={[styles.place, { color: colors.place }]}>
            {data.medication.description}
          </Text>
        </View>
        {!done ? (
          <TaskMenu
            visible={menuVisible}
            onOpen={() => setMenuVisible(true)}
            onClose={() => setMenuVisible(false)}
            data={data}
            color={colors.icon}
            onDone={async () => {
              if (onDone) {
                await onDone();
              }
            }}
          />
        ) : (
          <Feather name="check" size={20} color={theme.colors.white} />
        )}
      </View>
    </View>
  );
}
