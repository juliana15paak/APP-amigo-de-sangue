import React from 'react';
import { View, Image, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Header } from '../components/form/header';

export function Login() {
  return (
    <View className='bg-red-600 flex-1'>
        <Header variant='header-form-white'>
            <AntDesign
                name="left"
                size={30}
                className='justify-start w-10 h-10 items-start mx-6 mt-12'
                color="white"
            />
            <Image className='h-24 w-44 mb-9 self-center'
                source={require('../assets/images/Logos/LogoAppTextoIconeVermelho.png')}
                resizeMode='contain'
            />
            <Image className=''
                source={require('../assets/images/Login/HeaderRed.png')}
                resizeMode='contain'
            />
        </Header>
        <Text className='text-white text-2xl font-semibold mb-1 mx-12'>Login</Text>
        
    </View>
  );
}