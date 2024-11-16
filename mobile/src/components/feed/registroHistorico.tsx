import { Props } from '@/src/utils/feed/historico';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export function RegistroHistorico({dataDoacao, nomeHemocentro}: Props) {
  return (
    <View className='flex-1 flex-row items-center justify-start'
      style={{
        marginLeft: RFValue(26),
        marginVertical: RFValue(12)
      }}
    >
       <Image className='bg-red-600'
           source={require('../../../assets/images/icon.png')}
           resizeMode='contain'
           style={{
            width: RFPercentage(10),
            height: RFPercentage(10),
            borderRadius: RFValue(15)
           }}
        />
      <View
        style={{
          marginLeft: RFValue(25)
        }}
      >
        <Text className='font-semibold'
          style={{
            fontSize: RFValue(12)
          }}
        >{dataDoacao}</Text>
        <Text className='font-medium'
          style={{
            fontSize: RFValue(12)
          }}
        >{nomeHemocentro}</Text>
      </View>
      <AntDesign
        name="down"
        size={18}
        className='justify-start items-start'
        style={{
          width: RFValue(26),
          height: RFValue(26),
          marginLeft: RFValue(35),
          marginTop: RFValue(3)
        }}
        color="gray"
      />
    </View>
  );
}