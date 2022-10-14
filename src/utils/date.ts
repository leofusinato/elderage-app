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

const everyDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  24, 25, 26, 27, 28, 29, 30, 31,
];

export const years = () => {
  let list = [];
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    list.push(String(i));
  }
  return list;
};

export const getLocaledDate = (date: Date) => {
  date.setHours(date.getHours() - 3);
  return date;
};

export const daysByMonth = (month: number) => {
  let allDays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const monthWith31Days = [1, 3, 5, 7, 8, 10, 12];
  if (monthWith31Days.includes(month)) {
    return allDays;
  } else if (month === 2) {
    const currentYear = new Date().getFullYear();
    if (currentYear % 4 === 0) {
      allDays.pop();
      allDays.pop();
    } else {
      allDays.pop();
      allDays.pop();
      allDays.pop();
    }
  } else {
    allDays.pop();
  }
  return allDays;
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

export function getTimeFromDate(date: Date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:00`;
}
