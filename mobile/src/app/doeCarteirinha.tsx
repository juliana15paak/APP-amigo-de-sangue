import React from 'react';
import { View, Image, Text } from 'react-native';
import { HeaderFeed } from '../components/feed/headerFeed'
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

export function DoeCarteirinha() {
  const navigation = useNavigation();

  return (
    <View className='bg-white flex-1 justify-start'>
      <HeaderFeed/>
      <View className='justify-center items-center bg-white'
        style={{
          marginBottom:RFPercentage(24)
        }}
      >
        <Image className='self-center'
          style={{
            height: RFPercentage(30),
            width: RFPercentage(30),
          }}
          source={require('../assets/images/doeDesign.png')}
          resizeMode='contain'
        />
        <Text className='font-semibold text-center'
          style={{
            fontSize:RFValue(14),
            marginHorizontal:RFValue(90),
            marginTop:RFValue(8)
          }}
        >Doe para acessar a carteirinha de doador</Text>
        <View className='flex-row justify-center items-center'>
          <View
            className='mt-3 bg-blueTheme-500 rounded-lg'
            style={{
              padding: RFValue(5),
              paddingHorizontal: RFValue(17),
              marginTop: RFValue(12),
              marginBottom: RFValue(10),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate('Hemocentros')}>
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(13),
                marginBottom: RFValue(-2)
              }}
            >
              Onde doar
            </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}