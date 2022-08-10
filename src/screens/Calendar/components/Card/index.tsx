import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  gender: string;
  agedName: string;
  description: string;
  local: string;
  time?: string | number;
  timeType: number;
  done?: boolean;
};

export function Card({
  gender,
  agedName,
  description,
  local,
  time,
  timeType,
  done,
}: Props) {
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
              name={gender === "M" ? "face-man" : "face-woman"}
              size={30}
              color={mainColor}
            />
          </View>
          <Text style={styles.name}>{agedName}</Text>
        </View>
        <View style={styles.right}>
          <FontAwesome5
            name={timeType === 1 ? "capsules" : "clock"}
            size={15}
            color={mainColor}
          />
          <Text style={[styles.hour, { color: mainColor }]}>{time}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, { color: mainColor }]}>
          {description}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <FontAwesome5
            name={"capsules"}
            size={18}
            color={theme.colors.white}
          />
          <Text style={styles.local}>{local}</Text>
        </View>
        {!done && (
          <TouchableOpacity
            hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
          >
            <Entypo
              name="dots-three-vertical"
              size={16}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
