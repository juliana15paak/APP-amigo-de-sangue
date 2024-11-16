import React from 'react';
import { View } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { HeaderFeed } from '../components/feed/headerFeed';


export function Hemocentros() {
  return (
    <View className='bg-white' 
      style={{
        height: RFPercentage(100)
      }}
    >
      <HeaderFeed/>
      {/* mapa */}

    </View>
  );
}