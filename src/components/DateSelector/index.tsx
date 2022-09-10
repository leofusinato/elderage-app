import React, { useEffect, useMemo, useState } from "react";
import { useNewAged } from "../../contexts/NewAgedProvider";

import { theme } from "../../global/styles";
import { daysByMonth, months, years } from "../../utils/date";
import { Row } from "../Row";
import { Selector } from "./components/Selector";

type Props = {
  onSelect: (date: string) => void;
};

export function DateSelector({ onSelect }: Props) {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2000);

  const allDays = useMemo(() => {
    return daysByMonth(month + 1);
  }, [month]);

  useEffect(() => {
    const date = `${year}/${month + 1}/${day}`;
    onSelect(date);
  }, [day, month, year]);

  return (
    <Row style={{ width: "100%" }}>
      <Selector
        onSelect={(value) => setDay(Number(value))}
        data={allDays}
        defaultValue={day}
        placeholder="Dia"
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
      <Selector
        onSelect={(_, index) => setMonth(Number(index))}
        data={months}
        defaultValue={"Jan"}
        placeholder="Mês"
        style={{
          flex: 1,
          marginHorizontal: 8,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
      <Selector
        onSelect={(value) => setYear(Number(value))}
        data={years()}
        placeholder="Ano"
        defaultValue={year}
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
    </Row>
  );
}
