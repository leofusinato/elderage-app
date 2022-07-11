const abbreviatedWeekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

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
