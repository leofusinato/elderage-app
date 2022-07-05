import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  onPress: () => Promise<void>
}

export default function LoginButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={onPress}>
      <Text style={styles.text}>Entrar</Text>
    </TouchableOpacity>
  )
}