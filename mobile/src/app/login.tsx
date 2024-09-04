import React from 'react';
import { View, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../components/form/header';
import { Input } from '../components/form/input';
import { Button } from '../components/form/button';

export default function Login() {
    const navigation = useNavigation();

  return (
    <View className='bg-red-600 flex-1'>
        <Header variant='header-form-white'>
            <AntDesign
                name="left"
                size={26}
                className='justify-start w-10 h-10 items-start mx-6 mt-12'
                color="#ED1C24"
                onPress={()=>navigation.goBack()}
            />
            <Image className='h-24 w-44 mb-9 self-center'
                source={require('../assets/images/Logos/LogoAppTextoIconeVermelho.png')}
                resizeMode='contain'
            />
            <Image className=''
                source={require('../assets/images/Header/HeaderRed.png')}
                resizeMode='contain'
            />
        </Header>

        <View className='justify-start'>
            <Text className='text-white text-2xl font-semibold mb-1 mx-14'>Login</Text>
            <Input
                text='Email'
                variant='input100white'
                visible={true}
                keyboardType='email-address'
            />
            <Input
                text='Senha'
                variant='input100white'
                visible={true}
                keyboardType='visible-password'
            />
            <View className='items-center'>
                <Button text='  Login  ' variant='White'/>
                <Link className='text-white text-base font-medium mb-80' href={"/cadastro"}>Fazer Cadastro</Link>
            </View>
        </View>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </View>
  );
}