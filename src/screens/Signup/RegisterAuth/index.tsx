import React, { useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
  const [password, setPassword] = useState('');

  const hasEightCharacters = useMemo(() => {
    return password.length >= 8;
  }, [password])

  const hasNumber = useMemo(() => {
    const regex = /[0-9]/;
    return regex.test(password);
  }, [password])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="keyboard-arrow-left" size={30} color={theme.colors.primary} />
          </TouchableOpacity>
          <Text style={styles.signupText}>Cadastre-se aqui</Text>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={theme.colors.white} />
        </View>
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.almost}>Quase lá...</Text>
            <AuthInput placeholder='Nos informe o seu e-mail' leftIcon='user' keyboardType='email-address' />
            <AuthInput placeholder='Crie uma senha' leftIcon='lock' isPassword value={password} onChangeText={(text) => setPassword(text)}/>

            <PasswordValidator description='Necessário 8 dígitos' checked={hasEightCharacters} />
            <PasswordValidator description='Ao menos 1 número' checked={hasNumber} />

          <View style={styles.footer}>
            <NextStepButton onPress={() => {navigation.navigate('Login')}}/>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
}