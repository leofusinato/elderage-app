import { ContactProps } from "./contact";
import { MedicationProps } from "./medication";

export type AgedProps = {
  id: string;
  name: string;
  gender: string;
  birthdate: string;
  address: string;
  city: string;
  state: string;
  created_at: string;
  medications: MedicationProps[];
  contacts: ContactProps[];
  owner: boolean;
};
