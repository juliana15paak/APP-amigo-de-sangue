import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import clsx from "clsx";

type Variants = "NextStep" | "SalvarContinuar" | "1Address" | "White" | "ChangeProfile"

type VProps = {
  variant?: Variants
}

interface Props {
    text: string
}

export function Button({text, variant = "NextStep", ...rest}: Props & TouchableOpacityProps & VProps) {
  return (
    <View className={clsx('justify-start items-center',
        {
          'mb-20 mt-8': variant === "NextStep",
          'mb-4 mt-8': variant === "SalvarContinuar" || variant === "White",
          'mb-11 mt-8': variant === "1Address",
          'mt-5': variant === "ChangeProfile"
        }
      )}>
        <TouchableOpacity {...rest} className={clsx('rounded-md bg-red-600',
          {
            "bg-white": variant === "White"
          }
        )}>
            <Text className={clsx('font-semibold rounded-md bg-red-600',
              {
                'px-36 text-zinc-50 p-6': variant === "NextStep" || variant === "1Address",
                'px-28 text-zinc-50 p-6': variant === "SalvarContinuar",
                'px-40 bg-white text-red-600 p-5': variant === 'White',
                'px-10 text-zinc-50 pt-3 pb-2': variant === 'ChangeProfile',
              }
            )}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
}