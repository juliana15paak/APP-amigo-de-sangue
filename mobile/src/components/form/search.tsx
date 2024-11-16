import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export function Search() {
  return (
    <View className='flex-row justify-center items-center border-black'
      style={{
        height: RFValue(40),  
        width: RFPercentage(15),   
        borderRadius: RFValue(4), 
        marginBottom: RFValue(5), 
        marginLeft: RFValue(-4),  
        borderWidth: RFValue(1)
      }}
    >
        <TouchableOpacity className='w-full h-full'>
            <View className='flex-row justify-between items-center'
              style={{
                width: RFPercentage(15), 
              }}
            >
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(13),
                    marginTop: RFValue(2), 
                    paddingLeft: RFValue(10)
                  }}
                >Buscar</Text>
                <AntDesign name='search1' color={'black'} size={RFValue(18)}
                  style={{
                    paddingRight: RFValue(10)
                  }}
                ></AntDesign>
            </View>
        </TouchableOpacity>
    </View>
  );
}