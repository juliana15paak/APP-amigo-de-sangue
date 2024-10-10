import React from 'react';
import { View, Image, Text } from 'react-native';
import { HeaderFeed } from '../components/feed/headerFeed'
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export function Carteirinha() {
  const navigation = useNavigation();

  return (
    <View className='bg-white flex-1 justify-start'>
      <HeaderFeed/>
      <View className='justify-center items-center bg-white'
        style={{
          marginBottom:RFPercentage(26)
        }}
      >
        <Image className='self-center'
          style={{
            height: RFPercentage(30),
            width: RFPercentage(30),
          }}
          source={require('../assets/images/entreDesign.png')}
          resizeMode='contain'
        />
        <Text className='font-semibold text-center'
          style={{
            fontSize:RFValue(14),
            marginHorizontal:RFValue(45),
            marginTop:RFValue(8)
          }}
        >Entre ou cadastre-se para acessar a carteirinha de doador</Text>
        <View className='flex-row justify-center items-center'>
          <View
            className='mt-3 bg-blueTheme-500 rounded-lg'
            style={{
              padding: RFValue(4),
              paddingHorizontal: RFValue(26),
              marginTop: RFValue(8),
              marginRight:RFValue(4),
              marginBottom: RFValue(12),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(13),
              }}
            >
              Entrar
            </Text>
            </TouchableOpacity>
          </View>
          <View
            className='mt-3 bg-blueTheme-500 rounded-lg'
            style={{
              padding: RFValue(4),
              paddingHorizontal: RFValue(26),
              marginTop: RFValue(8),
              marginLeft:RFValue(4),
              marginBottom: RFValue(12),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text
                className='text-white font-semibold'
                style={{
                  fontSize: RFValue(13),
                }}
              >
                Cadastrar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}