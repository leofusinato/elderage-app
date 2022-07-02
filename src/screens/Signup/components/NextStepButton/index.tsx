import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../../../global/styles';

type Props = {
  onPress: () => void;
}

export function NextStepButton({ onPress }: Props){
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.text}>Próximo</Text>
      <MaterialIcons name="keyboard-arrow-right" size={25} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}