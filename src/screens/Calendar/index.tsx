import React, { useEffect, useState } from "react";

import { View, ScrollView, Alert } from "react-native";
import { Loading } from "../../components/Loading";
import { NextTaskProps, TaskProps } from "../../global/models/task";
import { api } from "../../services/api";
import { formatDateToApi, formatTime } from "../../utils/date";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { styles } from "./styles";

type TasksProps = {
  done: TaskProps[];
  pending: NextTaskProps[];
};

export function Calendar() {
  const [tasks, setTasks] = useState<TasksProps | null>(null);
  const [loading, setLoading] = useState(false);

  const getTasks = async (date: Date) => {
    setLoading(true);
    try {
      const formattedDate = formatDateToApi(date);
      const response = await api.get<TasksProps>(
        `/tasks/date/${formattedDate}`
      );
      setTasks(response.data);
    } catch {
      Alert.alert("Ops!", "Erro ao buscar as tarefas. Tente novamente");
    }
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      await getTasks(new Date());
    })();
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header onChangeDate={async (date) => await getTasks(date)} />
      <Loading loading={loading}>
        <View style={styles.content}>
          {tasks?.pending.map((task, index) => (
            <Card
              agedName={task.aged.name}
              description={task.details}
              gender={task.aged.gender}
              local={task.description}
              timeType={task.time_type}
              time={
                task.time_type === 1
                  ? task.remaining
                  : formatTime(task.schedule)
              }
              key={index}
            />
          ))}
          {tasks?.done.map((task, index) => (
            <Card key={index} done description={task.details} />
          ))}
        </View>
      </Loading>
    </ScrollView>
  );
}
