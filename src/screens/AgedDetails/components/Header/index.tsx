import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AgedImage } from "../../../../components/AgedImage";
import { BackButton } from "../../../../components/BackButton";
import { Row } from "../../../../components/Row";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../../global/route.types";
import { AgedProps } from "../../../../global/models/aged";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  data: AgedProps;
};

export function Header({ data }: Props) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<AppStackParamList, "AgedDetails">
    >();

  return (
    <View style={styles.container}>
      <Row style={styles.actions}>
        <BackButton />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("SendInvite", { agedId: data.id })}
        >
          <AntDesign name="adduser" size={24} color={theme.colors.neutral700} />
        </TouchableOpacity>
      </Row>
      <View style={styles.center}>
        <AgedImage gender={data.gender} size={70} />
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </View>
  );
}
