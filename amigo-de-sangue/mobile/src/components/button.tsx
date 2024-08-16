import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import clsx from "clsx";
import '../styles/theme'

type Variants = "Voltar" | "NextStep" | "SalvarContinuar"

type VProps = {
  variant?: Variants
}

interface Props {
    text: string
}

export function Button({text, variant = "NextStep", ...rest}: Props & TouchableOpacityProps & VProps) {
  return (
    <View className={clsx('flex-2 justify-start items-center',
        {
          'mb-44': variant === "NextStep",
          // 'mb-0 mt-4': variant === "Voltar",
          'mb-6': variant === "SalvarContinuar"
        }
      )}>
        <TouchableOpacity {...rest} className='rounded-md bg-red-600'>
            <Text className={clsx('font-semibold p-6 ps-36 pe-36 rounded-md bg-red-600 text-zinc-50',
              {
                'ps-36 pe-36': variant === "NextStep",
                'ps-32 pe-32': variant === "SalvarContinuar"
              }
            )}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}