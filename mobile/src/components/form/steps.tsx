import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import clsx from "clsx";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import '../../styles/theme';

type Variants = "StepOne" | "StepTwo" | "StepThree" | "StepFour";

type VProps = {
  variant?: Variants;
}

interface Props {
  visible: boolean;
}

export function Steps({ visible, variant = "StepOne", ...rest }: VProps & Props & ViewProps) {
  if (!visible) return null;

  return (
    <View
      {...rest}
      className='justify-start items-center'
      style={{
        marginHorizontal: RFPercentage(5), 
        marginTop: RFValue(15), 
        marginBottom: RFValue(15),
        height: RFPercentage(9),
      }}
    >
      <View className='flex-row'
        style={{
          height: '100%'
        }}
      >
        <View className='items-center'
          style={{
            width: RFPercentage(7),
            height: RFPercentage(10),
          }}
        >
          <View
            className={clsx('flex-1 items-center justify-center', {
              'bg-green-500': variant === 'StepTwo' || variant === 'StepThree' || variant === 'StepFour',
              'bg-grayTheme-300': variant === 'StepOne',
            })}
            style={{
              borderRadius: RFPercentage(100), 
              width: RFPercentage(7)
            }}
          >
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
                paddingTop: RFValue(4)
              }}
            >
              1
            </Text>
          </View>
          <Text className='font-medium'
            style={{
              fontSize: RFValue(12),
            }}
          >
            Dados
          </Text>
        </View>

        <View
          className={clsx('flex-1 self-center', {
            'bg-grayTheme-300': variant === 'StepTwo',
            'bg-green-500': variant === 'StepThree' || variant === 'StepFour',
            'bg-grayTheme-100': variant === 'StepOne',
          })}
          style={{
            height: RFValue(3),
            marginBottom: RFValue(8)
          }}
        />

        <View className='items-center'
          style={{
            width: RFPercentage(7),
            height: RFPercentage(10),
          }}
        >
          <View
            className={clsx('flex-1 items-center justify-center', {
              'bg-grayTheme-300': variant === 'StepTwo',
              'bg-green-500': variant === 'StepThree' || variant === 'StepFour',
              'bg-grayTheme-100': variant === 'StepOne',
            })}
            style={{
              borderRadius: RFPercentage(100), 
              width: RFPercentage(7)
            }}
          >
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
                paddingTop: RFValue(4)
              }}
            >
              2
            </Text>
          </View>
          <Text className='font-medium'
            style={{
              fontSize: RFValue(12),
              marginHorizontal: RFValue(-5)
            }}
          >
            Endereço
          </Text>
        </View>

        <View
          className={clsx('flex-1 self-center', {
            'bg-grayTheme-300': variant === 'StepThree',
            'bg-grayTheme-100': variant === 'StepOne' || variant === 'StepTwo', 
            'bg-green-500': variant === 'StepFour'
          })}
          style={{
            height: RFValue(3),
            marginBottom: RFValue(8)
          }}
        />

        <View className='items-center'
          style={{
            width: RFPercentage(7),
            height: RFPercentage(10),
          }}
        >
          <View
            className={clsx('flex-1 items-center justify-center', {
              'bg-grayTheme-300':  variant === 'StepThree',
              'bg-grayTheme-100': variant === 'StepOne' ||variant === 'StepTwo',
              'bg-green-500': variant === 'StepFour'
            })}
            style={{
              borderRadius: RFPercentage(100), 
              width: RFPercentage(7)
            }}
          >
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
                paddingTop: RFValue(4)
              }}
            >
              3
            </Text>
          </View>
          <Text className='font-medium'
            style={{
              fontSize: RFValue(12),
            }}
          >
            Conta
          </Text>
        </View>
      </View>
    </View>
  );
}
