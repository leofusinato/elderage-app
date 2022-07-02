import React from 'react';
import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../../../../global/styles';

type Props = {
  description: string;
  checked: boolean;
}

export function PasswordValidator({ description, checked }: Props){
  return (
    <View style={[styles.container, checked ? styles.checkedContainer : {}]}>
      <Octicons name="check" size={24} color={checked ? theme.colors.success : theme.colors.neutral300} />
      <Text style={[styles.description, checked ? styles.checkedDescription : {}]}>{description}</Text>
    </View>
  );
}