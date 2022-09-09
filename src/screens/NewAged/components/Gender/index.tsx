import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import FemaleAged from "../../../../assets/images/female-aged.png";
import MaleAged from "../../../../assets/images/male-aged.png";
import { Row } from "../../../../components/Row";
import { theme } from "../../../../global/styles";

export function Gender() {
  const [gender, setGender] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Gênero</Text>
        </View>
        <Row style={{ justifyContent: "space-between" }}>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setGender("F")}
              style={{
                borderWidth: 2,
                borderColor:
                  gender === "F" ? theme.colors.success : "transparent",
                borderRadius: 8,
              }}
            >
              <Image source={FemaleAged} />
            </TouchableOpacity>
            <Text
              style={[
                styles.gender,
                gender === "F" ? styles.activeGender : styles.inactiveGender,
              ]}
            >
              Vovó
            </Text>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setGender("M")}
              style={{
                borderWidth: 2,
                borderColor:
                  gender === "M" ? theme.colors.success : "transparent",
                borderRadius: 8,
              }}
            >
              <Image source={MaleAged} />
            </TouchableOpacity>
            <Text
              style={[
                styles.gender,
                gender === "M" ? styles.activeGender : styles.inactiveGender,
              ]}
            >
              Vovô
            </Text>
          </View>
        </Row>
      </View>
    </View>
  );
}
