import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import clsx from "clsx";
import { RFValue } from 'react-native-responsive-fontsize';

type Variants = "ProximaEtapa" | "SalvarContinuar" | "White" | "ChangeProfile" | "Editar" | "Cancelar" | "Danger" | "Voltar";

type VProps = {
  variant?: Variants;
}

interface Props {
  text: string;
}

export function Button({ text, variant = "ProximaEtapa", ...rest }: Props & TouchableOpacityProps & VProps) {
  return (
    <View
      className={clsx('justify-start items-center rounded-md', {
        'bg-blueTheme-500 shadow-lg shadow-slate-900': variant === "ProximaEtapa" || variant === "SalvarContinuar" || variant === "ChangeProfile" || variant === "Editar" || variant === "Cancelar",
        'bg-white shadow-lg shadow-slate-900': variant === "White",
        'bg-red-600 shadow-lg shadow-slate-900': variant === "Danger",
        'bg-neutral-400 shadow-lg shadow-slate-900': variant === "Voltar"
      })}
      style={{
        marginBottom: variant === "ProximaEtapa" || variant === "SalvarContinuar" || variant === "White" ? RFValue(20) : variant === "Editar"? RFValue(5) : RFValue(10),
        marginTop: variant === "ProximaEtapa" || variant === "SalvarContinuar" ? RFValue(20) : variant === "White"? RFValue(28) : RFValue(5),
        marginHorizontal: variant === "ProximaEtapa" || variant === "SalvarContinuar"  ? RFValue(28) : variant === "Danger"? RFValue(60) : RFValue(9),
        paddingVertical: variant === "Danger" ? RFValue(8) : RFValue(10),
        marginLeft: variant === "White"? RFValue(29) : null,
        marginRight: variant === "White"? RFValue(26) : null
      }}
    >
      <TouchableOpacity {...rest}>
        <Text
          className={clsx('font-semibold text-center', {
            'text-white': variant === "ProximaEtapa" || variant === "SalvarContinuar" || variant === "ChangeProfile" || variant === "Editar" || variant === "Cancelar" || variant === "Danger" || variant === "Voltar",
            'text-black': variant === "White"
          })}
          style={{
            paddingVertical: variant === "ProximaEtapa" || variant === "SalvarContinuar" ? RFValue(6) : RFValue(4),
            paddingHorizontal: variant === "ChangeProfile" ? RFValue(20) : variant === "Editar" ? RFValue(40) : variant === "Cancelar" ? RFValue(14) : RFValue(5),
            fontSize: RFValue(13),
            borderRadius: RFValue(4)
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
