import { Text, View } from "react-native";
import { Header } from "./components/Header";
import { ItemRow } from "./components/ItemRow";
import { styles } from "./styles";

import MedicineIcon from "../../assets/images/icon-medicine.png";
import ContactsIcon from "../../assets/images/icon-contacts.png";
import ProfileIcon from "../../assets/images/icon-profile.png";

export function AgedDetails() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <ItemRow image={MedicineIcon} description="Medicamentos" />
        <ItemRow image={ContactsIcon} description="Contatos" />
        <ItemRow image={ProfileIcon} description="Perfil idoso" />
      </View>
    </View>
  );
}
