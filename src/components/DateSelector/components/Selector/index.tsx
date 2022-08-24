import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { theme } from "../../../../global/styles";

type Props = {
  placeholder: string;
  data: string[];
  style?: StyleProp<ViewStyle>;
};

export function Selector({ placeholder, data, style }: Props) {
  return (
    <SelectDropdown
      data={data}
      buttonStyle={style}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        fontFamily: theme.fonts.regular,
        fontSize: 14,
        color: theme.colors.neutral300,
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item;
      }}
    />
  );
}
