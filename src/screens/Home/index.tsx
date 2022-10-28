import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";

import { ScrollView } from "react-native";
import { LoadingContainer } from "../../components/LoadingContainer";
import { AgedProps } from "../../global/models/aged";
import { CheckinMedicationProps } from "../../global/models/checkin";
import { TaskProps } from "../../global/models/task";
import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { AgedsList } from "./components/AgedsList";
import { Header } from "./components/Header";
import { NextTasks } from "./components/NextTasks";
import { RecentlyCompleted } from "./components/RecentlyCompleted";

import { styles } from "./styles";

type HomeDataProps = {
  ageds: AgedProps[];
  tasks: CheckinMedicationProps[];
  nextTasks: TaskProps[];
};

export function Home() {
  const [data, setData] = useState<HomeDataProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      await fetch();
    })();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  const fetch = async () => {
    setLoading(true);
    const response = await api.get("/home");
    if (response.status === 200) {
      setData(response.data);
    }
    setLoading(false);
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={theme.colors.white} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
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
