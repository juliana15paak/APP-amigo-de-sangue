import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import clsx from "clsx";
import '../../styles/theme'

type Variants = "StepOne" | "StepTwo" | "StepThree"

type VProps = {
  variant?: Variants
}

interface Props {
  text: string,
  visible: boolean,
}

export function Steps({text, visible, variant = "StepOne", ...rest}: VProps & Props & ViewProps) {
  if (!visible) return null
  return (
    <View {...rest} className='mx-9 mt-0 mb-10 justify-end'>
        <View className='flex-row justify-between'>
            <Text className='text-red-600 text-2xl font-semibold mx-1 mb-1'>Cadastro</Text>
            <Text className='text-red-600 text-2xl font-semibold mx-1 mb-1'>{text}</Text>
        </View>
        <View className='flex-row'>
            <View className='flex-1 border-2 border-e-0 border-red-600 rounded-l-md bg-red-600'></View>
            <View className={clsx('flex-1 p-2 border-2 border-e-0 border-red-600 bg-red-600',
              {
                'bg-white': variant === 'StepOne',
              }
            )}></View>
            <View className={clsx('flex-1 p-2 border-2 border-red-600 rounded-r-md',
              {
                'bg-red-600': variant === 'StepThree',
              }
            )}></View>
        </View>
    </View>
  );
}