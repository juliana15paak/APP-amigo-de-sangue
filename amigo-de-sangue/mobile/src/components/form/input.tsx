import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import clsx from "clsx";
import '../../styles/theme'

interface Props {
    text: string,
    visible: boolean,
}

type Variants = "input100" | "input60" | "input20" |  "input60r" |  "input40" 

type VProps = {
  variant?: Variants
}

export function Input({text, visible, variant = 'input100', ...rest}: Props & TextInputProps & VProps) {
  if (!visible) return null
  return (
    <View className={clsx('flex-3 m-9 mt-3 mb-0 justify-start',
      {
        "-ml-5": variant === "input60r",
      }
      )}>
        <Text className='font-medium text-red-600 mx-2 mb-1'>{text}</Text>
        <TextInput {...rest} className={clsx('p-2 px-4 h-12 border-2 border-red-500 rounded-md', 
            {
              "w-72": variant === "input60r",
              "w-60 mb-1": variant === "input60",
              "w-24": variant === "input20",
              "w-56": variant === "input40",
            }
          )}
          placeholder='Digite aqui...'>
        </TextInput>
    </View>
  );
}