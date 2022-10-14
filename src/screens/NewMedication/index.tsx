import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import Input from "../../components/Inputs/Input";
import { Selector } from "../../components/Selector";
import { NewMedicationNavigationProps } from "../../global/route.types";
import { api } from "../../services/api";
import { TimePicker } from "./components/TimePicker";

import { styles } from "./styles";

const timeTypes = ["Quantidade diária", "Horário"];

type BodyProps = {
  description: string;
  details: string;
  time_type: number | null;
  time_description: string;
  schedules: [];
};

type ScheduleProps = {
  time: string;
};

export function NewMedication({
  route,
  navigation,
}: NewMedicationNavigationProps) {
  const [body, setBody] = useState<BodyProps>({
    description: "",
    details: "",
    time_type: null,
    time_description: "",
    schedules: [],
  });
  const [schedulesList, setSchedulesList] = useState<string[]>(["08:00:00"]);
  // let schedulesList = ["08:00:00"];

  useEffect(() => {
    console.log(schedulesList);
  }, [schedulesList]);

  const DynamicInputs = useCallback(() => {
    if (body.time_type === 0) {
      return (
        <>
          <Text style={styles.label}>Informe a quantidade diária</Text>
          <Input
            style={[styles.input, { maxWidth: "20%" }]}
            keyboardType={"number-pad"}
            maxLength={1}
            onChangeText={(text) =>
              setBody((state) => ({ ...state, time_description: text }))
            }
          />
        </>
      );
    } else if (body.time_type === 1) {
      return (
        <>
          {schedulesList.map((item, index) => (
            <TimePicker
              key={index}
              value={item}
              onChangeValue={(value: string) => {
                // let schedules = schedulesList;
                // schedules[index] = value;
                setSchedulesList((state) => {
                  state[index] = value;
                  return state;
                });
              }}
              onAdd={() => {}}
              onRemove={() => {}}
            />
          ))}
        </>
      );
    }
    return null;
  }, [body.time_type]);

  const handleAddMedication = async () => {
    try {
      const response = await api.post(
        `/aged/${route.params.agedId}/medication`,
        body
      );
      if (response.status === 200) {
        navigation.goBack();
      }
    } catch {
      Alert.alert("Ops!", "Erro ao cadastrar o medicamento.");
    }
  };

  const validForm = useMemo(
    () =>
      body.description.length > 0 &&
      body.details.length > 0 &&
      body.time_description != null &&
      body.time_description.length > 0,
    [body]
  );

  return (
    <>
      <Header title="Novo medicamento" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Nome do medicamento</Text>
        <Input
          style={styles.input}
          placeholder="Ex.: Doril"
          autoFocus
          onChangeText={(text) =>
            setBody((state) => ({ ...state, description: text }))
          }
        />
        <Text style={styles.label}>Descrição breve</Text>
        <Input
          style={styles.input}
          placeholder="Ex.: Remédio para dor de cabeça"
          onChangeText={(text) =>
            setBody((state) => ({ ...state, details: text }))
          }
        />
        <Text style={styles.label}>Forma de aplicação</Text>
        <Selector
          onSelect={(_, index) =>
            setBody((state) => ({
              ...state,
              time_type: Number(index),
              time_description: "",
            }))
          }
          style={styles.selector}
          data={timeTypes}
          placeholder="Selecione"
        />
        <DynamicInputs />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.button,
            validForm ? styles.activeButton : styles.disabledButton,
          ]}
          activeOpacity={0.5}
          disabled={!validForm}
          onPress={async () => handleAddMedication()}
        >
          <Text style={styles.next}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
