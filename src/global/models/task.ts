import { AgedProps } from "./aged";

export type NextTaskProps = {
  aged: AgedProps;
  schedule?: string;
  schedule_id: string;
  remaining?: number;
} & TaskProps;

export type TaskProps = {
  id: string;
  aged_id: string;
  description: string;
  details: string;
  time_type: number;
  time_description: string;
  created_at: string;
  schedules: ScheduleProps[];
};

export type ScheduleProps = {
  id: string;
  medication_id: string;
  time: string;
  created_at: string;
};
