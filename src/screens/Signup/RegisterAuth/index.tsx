import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NextStepButton } from '../components/NextStepButton';

import { AppStackParamList } from '../../../global/route.types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../../../global/styles';
import { styles } from './styles';
import AuthInput from '../../../components/Inputs/AuthInput';
import { PasswordValidator } from './components/PasswordValidator';

export function RegisterAuth() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'RegisterAuth'>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={30} color={theme.colors.primary} />
          </TouchableOpacity>
          <Text style={styles.signupText}>Cadastre-se aqui</Text>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={theme.colors.white} />
        </View>

        <Text style={styles.almost}>Quase lá...</Text>

        <AuthInput placeholder='Nos informe o seu e-mail' leftIcon='user' keyboardType='email-address'/>
        <AuthInput placeholder='Crie uma senha' leftIcon='lock' isPassword />

        <PasswordValidator description='Necessário 8 dígitos' />
        <PasswordValidator description='Ao menos 1 número' />

        <View style={styles.footer}>
          <NextStepButton onPress={() => {}}/>
        </View>

      </View>
    </ScrollView>
  );
}