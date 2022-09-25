import { Text } from "react-native";
import { AgedImage } from "../../../../../components/AgedImage";
import { BackButton } from "../../../../../components/BackButton";
import { Row } from "../../../../../components/Row";

import { styles } from "./styles";

type Props = {
  name: string;
  gender: string;
};

export function Header({ name, gender }: Props) {
  return (
    <Row>
      <BackButton size={30} />
      <AgedImage gender={gender} size={45} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </Row>
  );
}
