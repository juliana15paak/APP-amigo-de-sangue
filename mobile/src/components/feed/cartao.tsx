import React, { ReactNode } from 'react';
import { Image, Text, View } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface Props {
  children: ReactNode;
}

export function Cartao({ children }: Props) {
  return (
    <View
      className='flex-1 flex-row shadow-2xl shadow-slate-900 bg-white rounded-3xl justify-between items-center self-center'
      style={{
        marginTop: RFPercentage(-12),
        paddingLeft: RFValue(15),
        width: RFPercentage(42),
      }}
    >
      <View
        className='items-center'
        style={{
          paddingTop: RFValue(16),
          paddingLeft: RFValue(10),
          width: '60%',
        }}
      >
        <Text
          className='font-semibold'
          style={{
            fontSize: RFValue(14),
            marginRight: RFValue(10),
          }}
        >
          Bem Vindo!
        </Text>
        <Text
          className='font-regular text-center'
          style={{
            fontSize: RFValue(13),
            marginLeft: RFValue(-10),
          }}
        >
          Clique no botão abaixo para entrar com sua conta, ou faça seu cadastro.
        </Text>
        <View
          className='mt-3 bg-blueTheme-600 rounded-lg'
          style={{
            padding: RFValue(4),
            paddingHorizontal: RFValue(26),
            marginTop: RFValue(8),
            marginRight: RFValue(12),
            marginBottom: RFValue(12),
          }}
        >
          {children}
        </View>
      </View>
      <View
        style={{
          marginLeft: RFValue(-5),
          marginRight: RFValue(8),
        }}
      >
        <Image
          style={{
            height: '100%',
            width: RFPercentage(15),
          }}
          source={require('../../assets/images/CartaoImgWelcome.png')}
          resizeMode='contain'
        />
      </View>
    </View>
  );
}
