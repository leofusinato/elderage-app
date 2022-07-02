import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NextStepButton } from '../components/NextStepButton';

import { AppStackParamList } from '../../../global/route.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../global/styles';
import { styles } from './styles';

export function RegisterName() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'RegisterName'>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.row}>
          <AntDesign name="close" size={20} color={theme.colors.white} />
          <Text style={styles.signupText}>Cadastre-se aqui</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={25} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.yourName}>Qual seu nome?</Text>
        <TextInput style={styles.input} />

        <View style={styles.footer}>
          <NextStepButton onPress={() => navigation.navigate('RegisterAuth')} />
        </View>
      </View>
    </ScrollView>
  );
}