import { ReactNode } from 'react';
import { View } from 'react-native';
import clsx from "clsx";
import '../styles/theme';

type Variants = "header-form-red" | "header-form-white"

type VProps = {
  children: ReactNode
  variant?: Variants
}

export function Header({children, variant = "header-form-red"}: VProps) {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className={clsx('flex-1 w-full h-full',
        {
          'bg-red-600': variant === "header-form-red",
          'bg-white': variant === "header-form-white",
        }
        )}>{children}
      </View>
    </View>
  );
}