import React from "react";

import { ScrollView } from "react-native";
import { AgedsList } from "./components/AgedsList";
import { Header } from "./components/Header";
import { NextTasks } from "./components/NextTasks";
import { RecentlyCompleted } from "./components/RecentlyCompleted";

import { styles } from "./styles";

export function Home() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <NextTasks />
      <RecentlyCompleted />
      <AgedsList />
    </ScrollView>
  );
}
