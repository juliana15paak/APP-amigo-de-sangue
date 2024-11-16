import React from 'react';
import { Image, View, Text, StatusBar } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ItemProps } from '../../utils/feed/campanhas';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface ModalPickerProps {
  setIsModalVisible: (isVisible: boolean) => void;
  campanha: ItemProps;
}

export function CampanhaModal({ setIsModalVisible, campanha }: ModalPickerProps) {
  return (
    <View className='flex-1 justify-center items-center bg-zinc-100'>
      <View className='bg-white rounded-lg p-6 w-full max-w-md'>
        <View className='items-end flex-row justify-between'>
          <MaterialIcons name="report-gmailerrorred" size={20} color="#ED1C24" />
          <AntDesign name="close" size={24} color="#ED1C24" onPress={() => setIsModalVisible(false)} />
        </View>
        <View className='items-center'>
          <Image className='rounded-3xl h-96 w-72'
            source={campanha.imgCampanha}
            resizeMode='contain'
          />
          <Text className="font-semibold mt-4 text-lg">{campanha.tituloCampanha}</Text>
          <Text className="text-base text-center font-medium mt-3">{campanha.descricaoCampanha}</Text>
          <Text className="text-base font-regular mt-3">Hemocentro: {campanha.nomeHemocentro}</Text>
          <Text className="text-base font-regular mt-1">Período: {campanha.dataInicioCampanha} - {campanha.dataFimCampanha}</Text>
        </View>
      </View>
      <StatusBar backgroundColor='#f1f5f9'/>
    </View>
  );
}
