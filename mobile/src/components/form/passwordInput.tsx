import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import clsx from 'clsx';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  text: string;
  visible: boolean;
}

type Variants = 'white' | 'red';

type VProps = {
  variant?: Variants;
}

export function PasswordInput({ text, visible, variant = 'red', value, onChangeText, onBlur, ...rest }: Props & TextInputProps & VProps) {
  if (!visible) return null;

  const [hidePass, setHidePass] = useState(true);

  return (
    <View
      style={{
        marginHorizontal: RFValue(28), 
        marginVertical: RFValue(5), 
        width: '85%'
      }}
    >
      <Text
        className={clsx('font-medium', {
          'text-black': variant === 'red',
          'text-white': variant === 'white',
        })}
        style={{
          marginHorizontal: RFValue(8), 
          fontSize: RFValue(13), 
        }}
      >
        {text}
      </Text>

      <View
        className={clsx('flex-row justify-between', {
          'border-black': variant === 'red',
          'border-white bg-zinc-50': variant === 'white',
        })}
        style={{
          paddingHorizontal: RFValue(2),
          height: RFValue(42), 
          borderWidth: RFValue(1),
          borderRadius: RFValue(4)
        }}
      >
        <TextInput
          {...rest}
          className={clsx('w-4/5', {
            'text-black': variant === 'white',
          })}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder='Digite aqui...'
          placeholderTextColor={variant === 'white' ? 'black' : undefined}
          secureTextEntry={hidePass}
          style={{
            fontSize: RFValue(14),
            borderRadius: RFValue(4),
            padding: RFValue(0),
            paddingHorizontal: RFValue(8),
          }}
        />
        <View
          className={clsx('items-center justify-center', {
            'bg-zinc-50': variant === 'white',
            'bg-white': variant === 'red',
          })}
          style={{
            paddingHorizontal: RFValue(5), 
          }}
        >
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            {hidePass ? (
              <Ionicons name='eye' color='black' size={RFValue(22)} /> 
            ) : (
              <Ionicons name='eye-off' color='black' size={RFValue(22)} /> 
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
