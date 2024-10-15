import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { HeaderFeed } from '../components/feed/headerFeed'

export function Informacoes() {
  const navigation = useNavigation();

  return (
    <View className='bg-white flex-1 justify-start'>
      <HeaderFeed/>
      <View className='justify-center items-center bg-white'>
        <ScrollView>
          <TouchableOpacity>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardRed.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardPurple.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardOrange.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardBlue.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}