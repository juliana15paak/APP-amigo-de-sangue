import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export function Search() {
  return (
    <View className='flex-3 -ml-5 mb-1 h-12 flex-row justify-center items-center border-2 border-red-500 rounded-md w-36'>
        <TouchableOpacity className='w-full h-full'>
            <View className='flex-row justify-between w-28'>
                <Text>Buscar</Text>
                <AntDesign name='search1' color={'#ED1C24'} size={18}></AntDesign>
            </View>
        </TouchableOpacity>
    </View>
  );
}