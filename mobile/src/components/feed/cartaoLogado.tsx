import { Text, View } from 'react-native';
import { UserPhoto } from '../userPhoto';
import Ionicons from '@expo/vector-icons/Ionicons';
import clsx from "clsx";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
  text: string,
  estado: string,
  cidade: string,
  totalDoacoes: string,
  proximaDoacao: string,
  tipoSanguineo: string
}

export function CartaoLogado({ text, estado, cidade, tipoSanguineo, totalDoacoes, proximaDoacao }: Props) {
  return (
    <View 
      className='flex-1 shadow-2xl shadow-slate-900 bg-white rounded-3xl justify-between items-center self-center'
      style={{
        marginTop: RFPercentage(-12),
        paddingHorizontal: RFValue(15),
        width: RFPercentage(42),
      }}
    >
      <View className='flex-row justify-end'>
        <UserPhoto />
        <View 
          className='items-start'
          style={{
            paddingVertical: RFValue(14),
            paddingHorizontal: RFValue(12),
            width: '60%',
          }}
        >
          <Text 
            className='font-medium'
            style={{
              fontSize: RFValue(14),
              marginRight: RFValue(10),
            }}
          >
            Bem Vindo,
          </Text>
          <Text 
            className='font-semibold'
            style={{
              fontSize: RFValue(13),
              marginRight: RFValue(0),
            }}
          >
            {text}
          </Text>
          <View className='flex-row'>
            <Ionicons name="location-sharp" size={RFValue(14)} color="gray" />
            <Text 
              className='font-regular text-center'
              style={{
                fontSize: RFValue(12),
                marginLeft: RFValue(4),
              }}
            >
              {estado}
            </Text>
            <Text 
              className='font-regular text-center'
              style={{
                fontSize: RFValue(12),
                marginLeft: RFValue(1),
              }}
            >
              {cidade}
            </Text>
          </View>
        </View>

        <View 
          className='self-end py-1 px-4 rounded-lg bg-green-600'
          style={{
            marginRight: RFValue(-40),
            marginBottom: RFValue(48)
          }}
        >
          <Text 
            className='text-white font-semibold'
            style={{ fontSize: RFValue(13) }}
          >
            {tipoSanguineo}
          </Text>
        </View>
      </View>

      <View 
        className='flex-row'
        style={{ marginHorizontal: RFValue(24) }}
      >
        <View style={{ marginRight: RFValue(12) }}>
          <Text 
            className='font-medium'
            style={{ fontSize: RFValue(12) }}
          >
            Total de Doações
          </Text>
          <Text 
            className='text-red-600 font-semibold text-center'
            style={{
              fontSize: RFValue(16),
              marginBottom: RFValue(8),
              marginTop: RFValue(5)
            }}
          >
            {totalDoacoes}
          </Text>
        </View>

        <View style={{ marginLeft: RFValue(12) }}>
          <Text 
            className='font-medium'
            style={{ fontSize: RFValue(12) }}
          >
            Próxima Doação em
          </Text>
          <Text 
            className='text-emerald-600 text-center font-semibold'
            style={{
              fontSize: RFValue(16),
              marginBottom: RFValue(8),
              marginTop: RFValue(5)
            }}
          >
            {proximaDoacao}
          </Text>
        </View>
      </View>
    </View>
  );
}
