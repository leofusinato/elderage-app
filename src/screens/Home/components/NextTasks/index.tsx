import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";

import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NextTaskProps } from "../../../../global/models/task";
import { AppStackParamList } from "../../../../global/route.types";
import { TaskCard } from "./components/TaskCard";

import { styles } from "./styles";

type Props = {
  data: NextTaskProps[];
};

export function NextTasks({ data }: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList, "Home">>();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Tarefas Próximas</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
          <Text style={styles.seeAll}>Ver todas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((value, index) => {
          return <TaskCard data={value} key={index} first={index == 0} />;
        })}
      </ScrollView>
    </View>
  );
}
