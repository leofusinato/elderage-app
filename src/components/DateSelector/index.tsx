import React from "react";

import { theme } from "../../global/styles";
import { months, years } from "../../utils/date";
import { Row } from "../Row";
import { Selector } from "./components/Selector";

const days = ["1", "2", "3"];

export function DateSelector() {
  return (
    <Row style={{ width: "100%" }}>
      <Selector
        data={days}
        placeholder="Dia"
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
      <Selector
        data={months}
        placeholder="Mês"
        style={{
          flex: 1,
          marginHorizontal: 8,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
      <Selector
        data={years()}
        placeholder="Ano"
        style={{
          flex: 1,
          borderRadius: 8,
          backgroundColor: theme.colors.neutral100,
        }}
      />
    </Row>
  );
}
