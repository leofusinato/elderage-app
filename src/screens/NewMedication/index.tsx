import React, { Children, useEffect, useMemo, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/Header";
import Input from "../../components/Inputs/Input";
import { Row } from "../../components/Row";
import { Selector } from "../../components/Selector";
import { NewMedicationNavigationProps } from "../../global/route.types";
import { TimePicker } from "./components/TimePicker";

import { theme } from "../../global/styles";
import { api } from "../../services/api";
import { styles } from "./styles";
import { Button } from "../../components/Button";

const timeTypes = ["Quantidade diária", "Horário"];

type BodyProps = {
  description: string;
  details: string;
  time_type: number | null;
  time_description: string | undefined;
  schedules: string[];
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
  const [schedulesList, setSchedulesList] = useState<Map<number, string>>(
    new Map([[0, "00:00:00"]])
  );

  const isEditing = route.params.medication != null;

  useEffect(() => {
    if (isEditing) {
      const { description, details, time_type, time_description, schedules } =
        route.params.medication;

      let body = {
        description,
        details,
        time_type: time_type - 1,
        time_description: time_description ? time_description.toString() : "",
        schedules: [],
      };
      if (time_type === 2) {
        schedules?.forEach((item, index) => {
          schedulesList.set(index, item.time);
        });
        setSchedulesList(schedulesList);
      }
      setBody(body);
    }
  }, []);

  const DynamicInputs = () => {
    if (body.time_type === 0) {
      return (
        <>
          <Text style={styles.label}>Informe a quantidade diária</Text>
          <Input
            style={[styles.input, { maxWidth: "20%" }]}
            keyboardType={"number-pad"}
            maxLength={1}
            value={body.time_description}
            onChangeText={(text) =>
              setBody((state) => ({ ...state, time_description: text }))
            }
          />
        </>
      );
    } else if (body.time_type === 1) {
      return (
        <>
          {Children.toArray(
            Array.from(schedulesList).map((item, index) => (
              <TimePicker
                value={item[1]}
                canRemove={schedulesList.size > 1}
                onChangeValue={(value: string) => {
                  setSchedulesList((prev) => new Map(prev).set(item[0], value));
                }}
                onRemove={() => {
                  setSchedulesList((prev) => {
                    const map = new Map(prev);
                    map.delete(item[0]);
                    return map;
                  });
                }}
              />
            ))
          )}
        </>
      );
    }
    return null;
  };

  const handleSubmit = async () => {
    try {
      if (body.time_type == 1) {
        schedulesList.forEach((value) => {
          body.schedules.push(value);
        });
      }
      body.time_type = body.time_type === 1 ? 2 : 1;
      console.log(body);
      let response;
      if (isEditing) {
        response = await api.put(
          `/aged/${route.params.agedId}/medication/${route.params.medication.id}`,
          body
        );
      } else {
        response = await api.post(
          `/aged/${route.params.agedId}/medication`,
          body
        );
      }
      if (response.status === 200) {
        navigation.goBack();
      }
    } catch {
      Alert.alert(
        "Ops!",
        `Erro ao ${isEditing ? "atualizar" : "cadastrar"} o medicamento.`
      );
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este medicamento?",
      [
        { text: "Não" },
        {
          text: "Sim",
          onPress: async () => {
            try {
              const response = await api.delete(
                `/aged/${route.params.agedId}/medication/${route.params.medication?.id}`
              );
              if (response.status === 200) {
                navigation.goBack();
              }
            } catch {
              Alert.alert("Ops", "Houve um erro ao excluir o medicamento");
            }
          },
        },
      ]
    );
  };

  const Delete = () => {
    return (
      <Button onPress={handleDelete}>
        <AntDesign name="delete" size={20} color={theme.colors.secondary} />
      </Button>
    );
  };

  const validForm = useMemo(
    () =>
      body.description.length > 0 &&
      body.details.length > 0 &&
      body.time_type != null &&
      ((body.time_description && body.time_description.length > 0) ||
        schedulesList.size > 0),
    [body]
  );

  return (
    <>
      <Header
        title="Novo medicamento"
        headerRight={isEditing ? <Delete /> : null}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Nome do medicamento</Text>
        <Input
          style={styles.input}
          value={body.description}
          placeholder="Ex.: Doril"
          autoFocus
          onChangeText={(text) =>
            setBody((state) => ({ ...state, description: text }))
          }
        />
        <Text style={styles.label}>Descrição breve</Text>
        <Input
          style={styles.input}
          value={body.details}
          placeholder="Ex.: Remédio para dor de cabeça"
          onChangeText={(text) =>
            setBody((state) => ({ ...state, details: text }))
          }
        />
        <Text style={styles.label}>Forma de aplicação</Text>
        <Row
          style={{
            marginBottom: 24,
            justifyContent: "space-between",
          }}
        >
          <Selector
            defaultValue={body.time_type ? timeTypes[body.time_type] : null}
            onSelect={(_, index) => {
              if (index != 1) {
                setSchedulesList((prev) => {
                  const map = new Map(prev);
                  map.clear();
                  map.set(0, "");
                  return map;
                });
              }
              setBody((state) => ({
                ...state,
                time_type: Number(index),
                time_description: undefined,
              }));
            }}
            style={styles.selector}
            data={timeTypes}
            placeholder="Selecione"
          />
          {body.time_type == 1 && (
            <Button
              onPress={() => {
                setSchedulesList((prev) => {
                  const maxIndex = Math.max(...prev.keys());
                  return new Map([...prev, [maxIndex + 1, ""]]);
                });
              }}
              style={styles.addButton}
            >
              <Ionicons name="add" size={24} color={theme.colors.white} />
            </Button>
          )}
        </Row>
        <DynamicInputs />
      </ScrollView>
      <View style={styles.footer}>
        <Button
          style={[
            styles.button,
            validForm ? styles.activeButton : styles.disabledButton,
          ]}
          disabled={!validForm}
          onPress={async () => handleSubmit()}
        >
          <Text style={styles.next}>
            {isEditing ? "Atualizar" : "Cadastrar"}
          </Text>
        </Button>
      </View>
    </>
  );
}
