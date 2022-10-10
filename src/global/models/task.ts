import { AgedProps } from "./aged";
import { MedicationProps } from "./medication";

// export type NextTaskProps = {
//   aged: AgedProps;
//   schedule?: string;
//   schedule_id: string;
//   remaining?: number;
// } & TaskProps;

// export type TaskProps = {
//   id: string;
//   aged_id: string;
//   description: string;
//   details: string;
//   time_type: number;
//   time_description: string;
//   created_at: string;
//   schedules: ScheduleProps[];
//   medication: MedicationProps;
// };

export type TaskProps = {
  aged: AgedProps;
  medication: MedicationProps;
  schedule: string;
  schedule_id: string;
};

export type ScheduleProps = {
  id: string;
  medication_id: string;
  time: string;
  created_at: string;
};
