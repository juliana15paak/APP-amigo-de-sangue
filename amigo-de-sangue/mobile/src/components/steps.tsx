import React from 'react';
import { View, Text, TextInput } from 'react-native';
import '../styles/theme'

export function Steps() {
  return (
    <View className='flex-2 mx-9 mt-0 mb-10 justify-end'>
        <View className='flex-row justify-between'>
            <Text className='text-red-600 text-2xl font-semibold mx-1 mb-1'>Cadastro</Text>
            <Text className='text-red-600 text-2xl font-semibold mx-1 mb-1'>1/4</Text>
        </View>
        <View className='flex-row'>
            <View className='p-2 px-12 border-2 border-e-0 border-red-500 rounded-l-md bg-red-600'></View>
            <View className='p-2 px-12 border-2 border-e-0 border-red-500'></View>
            <View className='p-2 px-12 border-2 border-e-0 border-red-500 '></View>
            <View className='p-2 px-12 border-2 border-red-500 rounded-r-md'></View>
        </View>
    </View>
  );
}