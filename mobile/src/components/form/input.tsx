import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import clsx from 'clsx';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import '../../styles/theme';

interface Props {
  text: string;
  visible: boolean;
}

type Variants = 'input100' | 'input60' | 'input20' | 'input100white';

type VProps = {
  variant?: Variants;
}

export function Input({ text, visible, variant = 'input100', value, onChangeText, onBlur, ...rest }: Props & TextInputProps & VProps) {
  if (!visible) return null;

  const getWidth = () => {
    switch (variant) {
      case 'input60':
        return RFPercentage(25); 
      case 'input20':
        return RFValue(96); 
      case 'input100white':
      case 'input100':
      default:
        return '85%'; 
    }
  };

  const getMarginHorizontal = () => {
    switch (variant) {
      case 'input100':
      case 'input100white':
      default:
        return RFValue(28); 
    }
  }


  return (
    <View
      className='justify-start'
      style={{
        width: getWidth(),
        marginVertical: RFValue(5),
        marginHorizontal: getMarginHorizontal(),
      }}
    >
      <Text
        className={clsx('font-medium mx-2', {
          'text-black': variant === 'input100' || variant === 'input60' || variant === 'input20',
          'text-white': variant === 'input100white',
        })}
        style={{
          fontSize: RFValue(13), 
        }}
      >
        {text}
      </Text>

      <TextInput
        {...rest}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        className={clsx('focus:bg-zinc-100', {
          'border-black': variant !== 'input100white',
          'border-white text-black bg-zinc-50': variant === 'input100white',
        })}
        style={{
          padding: RFValue(8),
          paddingHorizontal: RFValue(10),
          height: RFValue(40), 
          borderRadius: RFValue(4), 
          fontSize: RFValue(14), 
          borderWidth: RFValue(1)
        }}
        placeholder='Digite aqui...'
        placeholderTextColor={variant === 'input100white' ? 'black' : undefined}
      />
    </View>
  );
}
