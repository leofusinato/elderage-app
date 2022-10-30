import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";

import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "../../../../components/Button";
import { TaskProps } from "../../../../global/models/task";
import { AppStackParamList } from "../../../../global/route.types";
import { api } from "../../../../services/api";
import { formatDateToApi } from "../../../../utils/date";
import { TaskCard } from "./components/TaskCard";

import { styles } from "./styles";

type Props = {
  data: TaskProps[];
  onDone: () => Promise<void>;
};

export function NextTasks({ data, onDone }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "Home">>();

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas Próximas</Text>
        <Button onPress={() => navigation.navigate("Calendar")}>
          <Text style={styles.seeAll}>Ver todas</Text>
        </Button>
      </View>

      {data.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((value, index) => {
            return (
              <TaskCard
                data={value}
                key={index}
                first={index == 0}
                onDone={onDone}
              />
            );
          })}
        </ScrollView>
      ) : (
        <Text style={styles.empty}>Você não possui tarefas</Text>
      )}
    </View>
  );
}
