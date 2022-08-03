import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  done?: boolean;
};

export function Card({ done }: Props) {
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
              name={"face-man"}
              size={30}
              color={mainColor}
            />
          </View>
          <Text style={styles.name}>Hérciles Jesus</Text>
        </View>
        <View style={styles.right}>
          <FontAwesome5 name="clock" size={15} color={mainColor} />
          <Text style={[styles.hour, { color: mainColor }]}>9h30</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.description, { color: mainColor }]}>
          Dar 2 doses de Iosartana Potássica
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <MaterialCommunityIcons
            name={"check"}
            size={25}
            color={theme.colors.white}
          />
          <Text style={styles.local}>Asilo Pray the Sun, quarto 03</Text>
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
