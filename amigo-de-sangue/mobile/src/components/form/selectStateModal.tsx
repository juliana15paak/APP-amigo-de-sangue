import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModalPickerProps {
  setIsModalVisible: (isVisible: boolean) => void;
  onSelectState: (stateSigla: string) => void;
}

export function SelectStateModal({ setIsModalVisible, onSelectState }: ModalPickerProps) {

  const states = [
    { sigla: 'AC', name: 'Acre' },
    { sigla: 'AL', name: 'Alagoas' },
    { sigla: 'AP', name: 'Amapá' },
    { sigla: 'AM', name: 'Amazonas' },
    { sigla: 'BA', name: 'Bahia' },
    { sigla: 'CE', name: 'Ceará' },
    { sigla: 'DF', name: 'Distrito Federal' },
    { sigla: 'ES', name: 'Espirito Santo' },
    { sigla: 'GO', name: 'Goiás' },
    { sigla: 'MA', name: 'Maranhão' },
    { sigla: 'MS', name: 'Mato Grosso do Sul' },
    { sigla: 'MT', name: 'Mato Grosso' },
    { sigla: 'MG', name: 'Minas Gerais' },
    { sigla: 'PA', name: 'Pará' },
    { sigla: 'PB', name: 'Paraíba' },
    { sigla: 'PR', name: 'Paraná' },
    { sigla: 'PE', name: 'Pernambuco' },
    { sigla: 'PI', name: 'Piauí' },
    { sigla: 'RJ', name: 'Rio de Janeiro' },
    { sigla: 'RN', name: 'Rio Grande do Norte' },
    { sigla: 'RS', name: 'Rio Grande do Sul' },
    { sigla: 'RO', name: 'Rondônia' },
    { sigla: 'RR', name: 'Roraima' },
    { sigla: 'SC', name: 'Santa Catarina' },
    { sigla: 'SP', name: 'São Paulo' },
    { sigla: 'SE', name: 'Sergipe' },
    { sigla: 'TO', name: 'Tocantins' },
  ];

  return (
    <View className='flex-1 justify-center items-center bg-red-600'>
    <TouchableOpacity 
      onPress={() => setIsModalVisible(false)}
    >
      <View className='flex-row justify-center'>
        <View className='bg-white rounded-lg justify-center p-6 mb-10 mt-6 w-full max-w-md'>
          <View className='items-end'>
          <AntDesign name="close" size={24} color="#ED1C24" onPress={() => setIsModalVisible(false)}/>
          </View>
            <FlatList
              data={states}
              renderItem={({ item }) => (
                <View>
                  <TouchableOpacity 
                    onPress={() => {onSelectState(item.sigla); setIsModalVisible(false);}}
                    accessibilityLabel={`Selecionar ${item.name}`}
                    accessibilityHint={`Seleciona o estado ${item.name}`}
                  >
                      <Text className='p-4 pl-0 pb-1 mt-2 border-b-red-600 border-b-2'>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.sigla}
            />
        </View>
      </View>
    </TouchableOpacity>
    </View>
  );
}