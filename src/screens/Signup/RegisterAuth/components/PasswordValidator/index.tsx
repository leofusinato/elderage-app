import React from 'react';
import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../../../../global/styles';

type Props = {
  description: string;
}

export function PasswordValidator({ description }: Props){
  return (
    <View style={styles.container}>
      <Octicons name="check" size={24} color={theme.colors.neutral300} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}