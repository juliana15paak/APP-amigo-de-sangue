import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModalPickerProps {
  setIsModalVisible: (isVisible: boolean) => void;
  onSelectState: (stateSigla: string) => void;
}

export function SelectGenModal({ setIsModalVisible, onSelectState }: ModalPickerProps) {

  const genders = [
    { sigla: 'F', name: 'Feminino' },
    { sigla: 'M', name: 'Masculino' },
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
              data={genders}
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