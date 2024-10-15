import { ComponentProps } from 'react';
import { Image } from 'react-native';
import clsx from "clsx";
import { RFValue } from 'react-native-responsive-fontsize';

type Variants = "menu" | "profile"

type VProps = {
  variant?: Variants
}

type Props = ComponentProps<typeof Image>

export function UserPhoto({ variant = 'menu', ...rest }: Props & VProps) {
  return (
    <Image
      className='rounded-full border-2 border-blueTheme-600 bg-zinc-100'
      style={{
        width: variant === "menu" ? RFValue(60) : RFValue(150),  
        height: variant === "menu" ? RFValue(60) : RFValue(150),
        marginTop: variant === "menu" ? RFValue(16) : RFValue(8)
      }}
      {...rest}
    />
  );
}
