import { AgedProps } from "./aged";

export type MedicationProps = {
  id: string;
  user_id: string;
  description: string;
  details: string;
  time_type: string;
  time_description: string;
  created_at: string;
  aged: AgedProps;
};
