const abbreviatedWeekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export const years = () => {
  let list = [];
  for (let i = 1920; i <= new Date().getFullYear(); i++) {
    list.push(String(i));
  }
  return list;
};

export function getDatesInRange(startDate: Date, endDate: Date) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

export function getAbbreviatedWeekDay(day: number) {
  return abbreviatedWeekDays[day];
}

export function formatDateToApi(date: Date) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function formatTime(time?: string) {
  if (!time) {
    return "";
  }
  const [hour, minutes] = time.split(":");
  return `${hour}h${minutes}`;
}
