import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import AuthInput from '../../components/Inputs/AuthInput';
import LoginButton from './components/LoginButton';
import { styles } from './styles';
import { theme } from '../../global/styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../global/route.types';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList, 'Login'>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/images/banner-login.png')} />
      <View style={styles.main}>
          <Text style={styles.title}>Elderage</Text>

          <AuthInput placeholder='E-mail' leftIcon='user' keyboardType='email-address'/>
          <AuthInput placeholder='Digite sua senha' leftIcon='lock' isPassword />

          <LoginButton/>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Signup')}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color={theme.colors.primary} />
            <Text style={styles.registerText}>Cadastre-se aqui</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}