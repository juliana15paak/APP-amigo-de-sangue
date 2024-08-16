import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import clsx from "clsx";
import '../styles/theme'

interface Props {
    text: string,
    visible: boolean,
}

type Variants = "input100" | "input80" | "input20"

type VProps = {
  variant?: Variants
}

export function Input({text, visible, variant = 'input100', ...rest}: Props & TextInputProps & VProps) {
  if (!visible) return null
  return (
    <View className='flex-3 m-9 mt-3 mb-0 justify-start'>
        <Text className='font-medium text-red-600 mx-2 mb-1'>{text}</Text>
        <TextInput {...rest} className={clsx('p-2 px-4 border-2 border-red-500 rounded-md', 
            {
              "w-80 -ms-8": variant === "input80",
              "w-16": variant === "input20",
            }
          )}
          placeholder='Digite aqui...'>
        </TextInput>
    </View>
  );
}