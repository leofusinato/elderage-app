import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";

import { View, ScrollView, Alert, Text } from "react-native";
import { Loading } from "../../components/Loading";
import { TaskProps } from "../../global/models/task";
import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { formatDateToApi } from "../../utils/date";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { styles } from "./styles";

type TasksProps = {
  done: TaskProps[];
  pending: TaskProps[];
};

export function Calendar() {
  const [tasks, setTasks] = useState<TasksProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const getTasks = async (date: Date) => {
    try {
      setLoading(true);
      const formattedDate = formatDateToApi(date);
      const response = await api.get<TasksProps>(
        `/tasks/date/${formattedDate}`
      );
      setTasks(response.data);
    } catch {
      Alert.alert("Ops!", "Erro ao buscar as tarefas. Tente novamente");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeDate = async (date: Date) => {
    setSelectedDate(date);
    await getTasks(date);
  };

  useFocusEffect(
    useCallback(() => {
      getTasks(selectedDate);
    }, [])
  );

  useEffect(() => {
    (async () => {
      await getTasks(new Date());
    })();
  }, []);

  return (
    <>
      <StatusBar style="dark" backgroundColor={theme.colors.white} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Header onChangeDate={async (date) => await handleChangeDate(date)} />
        <Loading loading={loading}>
          <View style={styles.content}>
            {tasks?.pending.map((task, index) => (
              <Card
                data={task}
                key={index}
                onDone={async () => await getTasks(selectedDate)}
              />
            ))}
            {tasks?.done.map((task, index) => (
              <Card key={index} done data={task} />
            ))}
            {tasks &&
              tasks?.pending.length === 0 &&
              tasks?.done.length === 0 && (
                <Text style={styles.empty}>Nenhuma tarefa para esta data</Text>
              )}
          </View>
        </Loading>
      </ScrollView>
    </>
  );
}
