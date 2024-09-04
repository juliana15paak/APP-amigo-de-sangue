import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import clsx from "clsx";
import '../../styles/theme'

interface Props {
    text: string,
    visible: boolean,
}

type Variants = "input100" | "input60" | "input20" |  "input60r" |  "input40" | "input100white"

type VProps = {
  variant?: Variants
}

export function Input({text, visible, variant = 'input100', ...rest}: Props & TextInputProps & VProps) {
  if (!visible) return null
  return (
    <View className={clsx('flex-3 m-9 mt-2 mb-0 justify-start',
      {
        "-ml-5": variant === "input60r",
      }
      )}>
        <Text className={clsx('font-medium text-red-600 mx-2',
          {
            "text-white mx-4": variant === "input100white"
          }
        )}>{text}</Text>
        <TextInput {...rest} className={clsx('p-2 px-4 h-12 border-2 border-red-500 rounded-md', 
            {
              "w-72": variant === "input60r",
              "w-60 mb-1": variant === "input60",
              "w-24": variant === "input20",
              "w-48": variant === "input40",
              "border-white mx-2 text-white": variant === "input100white",
            }
          )}
          placeholder='Digite aqui...'
          placeholderTextColor={variant === "input100white"? "white" : undefined}>
        </TextInput>
    </View>
  );
}