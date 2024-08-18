import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import clsx from "clsx";
import '../../styles/theme'

type Variants = "NextStep" | "SalvarContinuar" | "1Address"

type VProps = {
  variant?: Variants
}

interface Props {
    text: string
}

export function Button({text, variant = "NextStep", ...rest}: Props & TouchableOpacityProps & VProps) {
  return (
    <View className={clsx('justify-start items-center mt-8',
        {
          'mb-20': variant === "NextStep",
          'mb-4': variant === "SalvarContinuar",
          'mb-11': variant === "1Address",
        }
      )}>
        <TouchableOpacity {...rest} className='rounded-md bg-red-600'>
            <Text className={clsx('font-semibold p-6 rounded-md bg-red-600 text-zinc-50',
              {
                'px-36': variant === "NextStep" || variant === "1Address",
                'px-28': variant === "SalvarContinuar",
              }
            )}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}