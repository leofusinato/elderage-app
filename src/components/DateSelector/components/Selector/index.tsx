import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { theme } from "../../../../global/styles";

type Props = {
  placeholder: string;
  data: string[] | number[];
  onSelect: (value: string, index: number) => void;
  style?: StyleProp<ViewStyle>;
  defaultValue?: any;
};

export function Selector({
  placeholder,
  data,
  style,
  onSelect,
  defaultValue,
}: Props) {
  return (
    <SelectDropdown
      data={data}
      buttonStyle={style}
      defaultValue={defaultValue}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        color: theme.colors.neutral300,
      }}
      onSelect={(selectedItem, index) => {
        onSelect(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem) => {
        return selectedItem;
      }}
      rowTextForSelection={(item) => item}
    />
  );
}
