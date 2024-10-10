import React from 'react';
import { View, Text, ViewProps } from 'react-native';
import clsx from "clsx";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import '../../styles/theme';

type Variants = "StepOne" | "StepTwo" | "StepThree";

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
        marginHorizontal: RFPercentage(4), 
        marginTop: RFValue(15), 
        marginBottom: RFValue(15),
        height: RFPercentage(9),
      }}
    >
      <View className='flex-row bg-lime-300'
        style={{
          height: '100%'
        }}
      >
        <View>
          <View
            className='flex-1 bg-green-500 items-center justify-center'
            style={{
              borderRadius: RFPercentage(100), 
              height: RFPercentage(10)
            }}
          >
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
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
            'bg-green-500': variant === 'StepTwo' || variant === 'StepThree',
            'bg-neutral-400': variant === 'StepOne',
          })}
          style={{
            height: RFValue(3),
            width: RFPercentage(1),
          }}
        />

        <View>
          <View
            className={clsx('flex-1 items-center justify-center', {
              'bg-green-500': variant === 'StepTwo' || variant === 'StepThree',
              'bg-neutral-400': variant === 'StepOne',
            })}
            style={{
              borderRadius: RFPercentage(100), 
              height: RFPercentage(7),
            }}
          >
            <Text
              className='text-white font-semibold '
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
              }}
            >
              2
            </Text>
          </View>
          <Text className='font-medium'
            style={{
              fontSize: RFValue(12),
            }}
          >
            Endereço
          </Text>
        </View>

        <View
          className={clsx('flex-1 self-center', {
            'bg-green-500': variant === 'StepThree',
            'bg-neutral-400': variant === 'StepOne' || variant === 'StepTwo', 
          })}
          style={{
            height: RFValue(3),
            width: RFPercentage(1)
          }}
        />

        <View>
          <View
            className={clsx('flex-1 items-center justify-center', {
              'bg-green-500':  variant === 'StepThree',
              'bg-neutral-400': variant === 'StepOne' ||variant === 'StepTwo',
            })}
            style={{
              borderRadius: RFPercentage(100), 
              height: RFPercentage(7),
            }}
          >
            <Text
              className='text-white font-semibold'
              style={{
                fontSize: RFValue(16), 
                marginHorizontal: RFValue(4), 
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
