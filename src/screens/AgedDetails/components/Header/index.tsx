import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { AgedImage } from "../../../../components/AgedImage";
import { BackButton } from "../../../../components/BackButton";
import { AgedProps } from "../../../../global/models/aged";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  data: AgedProps;
};

export function Header({ data }: Props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.center}>
        <AgedImage gender={data.gender} size={70} />
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </View>
  );
}
