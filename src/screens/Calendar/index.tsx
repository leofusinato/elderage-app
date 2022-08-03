import React from "react";

import { View, ScrollView } from "react-native";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { styles } from "./styles";

export function Calendar() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />
      <View style={styles.content}>
        <Card done />
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}
