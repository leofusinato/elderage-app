import { MedicationProps } from "./medication";

export type CheckinMedicationProps = {
  id: string;
  user_id: string;
  date_hour_applied: string;
  medication: MedicationProps;
};
