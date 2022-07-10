import React, { useEffect, useState } from "react";

import { ScrollView } from "react-native";
import { AgedProps } from "../../global/models/aged";
import { CheckinMedicationProps } from "../../global/models/checkin";
import { api } from "../../services/api";
import { AgedsList } from "./components/AgedsList";
import { Header } from "./components/Header";
import { NextTasks } from "./components/NextTasks";
import { RecentlyCompleted } from "./components/RecentlyCompleted";

import { styles } from "./styles";

type HomeDataProps = {
  ageds: AgedProps[];
  tasks: CheckinMedicationProps[];
};

export function Home() {
  const [data, setData] = useState<HomeDataProps | null>(null);

  useEffect(() => {
    (async () => {
      await fetch();
    })();
  }, []);

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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header />

      <NextTasks />
      <RecentlyCompleted data={data.tasks} />
      <AgedsList data={data.ageds} />
    </ScrollView>
  );
}
