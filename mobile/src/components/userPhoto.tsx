import { ComponentProps } from 'react';
import { Image } from 'react-native';
import clsx from "clsx";

type Variants = "menu" | "profile"

type VProps = {
  variant?: Variants
}

type Props = ComponentProps<typeof Image>

export function UserPhoto({variant = 'menu', ...rest}: Props & VProps) {
  return <Image className={clsx('rounded-full border-2 border-red-600 bg-red-200 mt-14',
    {
      'w-16 h-16': variant === "menu",
      'w-44 h-44': variant === "profile",
    }
  )}{...rest}/>
}