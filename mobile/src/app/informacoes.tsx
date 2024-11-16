import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { HeaderFeed } from '../components/feed/headerFeed'

export function Informacoes() {
  const navigation = useNavigation();

  return (
    <View className='bg-white flex-1 justify-start'>
      <HeaderFeed/>
      <ScrollView>
      <View className='justify-center items-center bg-white'
        style={{
          marginBottom: RFValue(0),
          marginTop: RFValue(120)
        }}
      >
          <TouchableOpacity onPress={ ()=> navigation.navigate('InfoSangue') }>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardRed.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> navigation.navigate('InfoMedulaOssea') }>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardPurple.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> navigation.navigate('InfoRin') }>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardOrange.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=> navigation.navigate('InfoOutros') }>
              <Image className='self-center'
                style={{
                  height: RFPercentage(20),
                  width: RFPercentage(40),
                }}
                source={require('../assets/images/Info/cardBlue.png')}
                resizeMode='contain'
              />
          </TouchableOpacity>
          <Text className='font-medium text-black text-center'
            style={{
              fontSize: RFValue(12),
              padding: RFValue(26)
            }}
          >Para mais informações consulte o site do governo ou o hemocentro mais próximo de sua região.</Text>
      </View>
      </ScrollView>
    </View>
  );
}