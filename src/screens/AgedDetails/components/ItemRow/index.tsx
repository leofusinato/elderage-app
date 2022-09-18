import { Entypo } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
} from "react-native";
import { Row } from "../../../../components/Row";
import { theme } from "../../../../global/styles";
import { styles } from "./styles";

type Props = {
  image: ImageSourcePropType;
  description: string;
};

export function ItemRow({ image, description }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Row>
        <Image source={image} />
        <Text style={styles.description}>{description}</Text>
      </Row>
      <Entypo name="chevron-right" size={25} color={theme.colors.neutral700} />
    </TouchableOpacity>
  );
}
