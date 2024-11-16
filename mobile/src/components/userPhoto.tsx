import { ComponentProps } from 'react';
import { Image } from 'react-native';
import clsx from "clsx";
import { RFValue } from 'react-native-responsive-fontsize';

type Variants = "menu" | "profile" | "cartao"

type VProps = {
  variant?: Variants
}

type Props = ComponentProps<typeof Image>

export function UserPhoto({ variant = 'cartao', ...rest }: Props & VProps) {
  return (
    <Image
      className='rounded-full border-2 border-blueTheme-600 bg-zinc-100'
      style={{
        width: variant === "cartao" ? RFValue(60) :  variant === "menu" ? RFValue(50) : RFValue(150),  
        height: variant === "cartao" ? RFValue(60) :  variant === "menu" ? RFValue(50) : RFValue(150),
        marginLeft: variant === "menu" ? RFValue(-2) : undefined,
        marginTop: variant === "cartao" ? RFValue(16) : variant === "menu" ? RFValue(0) : RFValue(8)
      }}
      {...rest}
    />
  );
}
