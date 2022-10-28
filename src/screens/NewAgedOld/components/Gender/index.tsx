import React, { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

import FemaleAged from "../../../../assets/images/female-aged.png";
import MaleAged from "../../../../assets/images/male-aged.png";
import { Row } from "../../../../components/Row";
import { theme } from "../../../../global/styles";
import { useNewAged } from "../../../../contexts/NewAgedProvider";
import { Button } from "../../../../components/Button";

export function Gender() {
  const { setProps } = useNewAged();
  const [gender, setGender] = useState("");

  const handleChangeGender = useCallback((gender: string) => {
    setGender(gender);
    setProps({ gender });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Gênero</Text>
        </View>
        <Row style={{ justifyContent: "space-between" }}>
          <View>
            <Button
              activeOpacity={1}
              onPress={() => handleChangeGender("F")}
              style={{
                borderWidth: 2,
                borderColor:
                  gender === "F" ? theme.colors.success : "transparent",
                borderRadius: 8,
              }}
            >
              <Image source={FemaleAged} />
            </Button>
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
            <Button
              activeOpacity={1}
              onPress={() => handleChangeGender("M")}
              style={{
                borderWidth: 2,
                borderColor:
                  gender === "M" ? theme.colors.success : "transparent",
                borderRadius: 8,
              }}
            >
              <Image source={MaleAged} />
            </Button>
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
