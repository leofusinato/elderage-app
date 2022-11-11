import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";

import { RefreshControl, ScrollView } from "react-native";
import { LoadingContainer } from "../../components/LoadingContainer";
import { AgedsList } from "./components/AgedsList";
import { Header } from "./components/Header";
import { NextTasks } from "./components/NextTasks";
import { RecentlyCompleted } from "./components/RecentlyCompleted";

import { AgedProps } from "../../global/models/aged";
import { CheckinMedicationProps } from "../../global/models/checkin";
import { TaskProps } from "../../global/models/task";
import { api } from "../../services/api";
import { theme } from "../../global/styles";
import { styles } from "./styles";

type HomeDataProps = {
  ageds: AgedProps[];
  tasks: CheckinMedicationProps[];
  nextTasks: TaskProps[];
};

export function Home() {
  const [data, setData] = useState<HomeDataProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetch();
      setLoading(false);
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      fetch();
      setLoading(false);
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetch();
    setRefreshing(false);
  };

  const fetch = async () => {
    const response = await api.get("/home");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <StatusBar
        style="dark"
        translucent={false}
        backgroundColor={theme.colors.white}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <LoadingContainer visible={loading}>
          <Header />
          <NextTasks data={data.nextTasks} onDone={async () => await fetch()} />
          <RecentlyCompleted data={data.tasks} />
          <AgedsList data={data.ageds} />
        </LoadingContainer>
      </ScrollView>
    </>
  );
}
