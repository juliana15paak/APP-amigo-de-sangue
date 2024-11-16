import { StatusBar, TouchableOpacity, View } from 'react-native';
import '../../styles/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export function HeaderFeed() {
  const navigation = useNavigation();

  return (
    <View className='flex-1 justify-start w-full items-center absolute'>
      <StatusBar barStyle={'dark-content'}/>
      <View
        style={{
          height:RFPercentage(15),
          width: '100%'
        }}
      >
        <View className="flex-row justify-between items-center"
          style={{
            marginHorizontal: RFValue(20),
            marginTop: RFValue(40),
          }}
        >
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MaterialIcons
              name="menu"
              size={RFValue(28)}
              color="#9f9f9f"
              style={{
                marginTop: RFValue(-6),
              }}
            />
          </TouchableOpacity>
          <Image
            style={{
              height: RFPercentage(7),
              width: RFPercentage(20),
              marginTop: RFValue(-5)
            }}
            source={require('../../assets/images/Logos/LogoAppTextoIconeVermelho.png')}
            resizeMode='contain'
          />
          <TouchableOpacity
            style={{
              marginBottom: RFValue(16),
            }}
          >
            <MaterialIcons
              name="notifications"
              size={RFValue(28)}
              color="#9f9f9f"
              style={{
                marginTop: RFValue(6),
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: '#EFEFEF',
            borderBottomWidth: RFValue(1),
            marginTop: RFValue(8)
          }}
        ></View>
      </View>
    </View>
    
  );
}