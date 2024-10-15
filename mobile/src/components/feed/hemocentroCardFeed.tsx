import React, { ReactNode } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props{
    text: string,
    children: ReactNode
}

export function HemocentroCardFeed({text, children}: Props) {
  return (
    <View className='flex-1 flex-row bg-white'>
        <View className='items-center justify-center'>
            {children}
            <Text className='font-medium'
                style={{
                    fontSize: RFValue(13),
                    margin: RFValue(12)
                }}
            >{text.length>14? text.slice(0,15)+'...': text}</Text>
            <View className='rounded-3xl bg-blueTheme-600'>
                <TouchableOpacity>
                    <Text className='font-medium text-white'
                        style={{
                            fontSize: RFValue(13),
                            paddingHorizontal: RFValue(15),
                            paddingVertical: RFValue(6)
                        }}
                    >Ver no mapa</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}