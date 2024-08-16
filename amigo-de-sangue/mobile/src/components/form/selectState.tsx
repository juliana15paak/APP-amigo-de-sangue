import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SelectStateModal } from './selectStateModal'; 

import '../../styles/theme'

interface Props {
    visible: boolean,
    onStateSelect: (stateSigla: string) => void;
}

export function SelectState({visible, onStateSelect}: Props ) {
  if (!visible) return null

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const changeModalVisibility = (isVisible: boolean) => {
    setIsModalVisible(isVisible);
};

const handleSelectState = (stateSigla: string) => {
    setSelectedState(stateSigla);
    onStateSelect(stateSigla);
    changeModalVisibility(false);
};

  return (
    <View className='flex-3 mt-3 -ml-5 mb-0 justify-start'>
      <Text className='font-medium text-red-600 mx-2 mb-1'>Estado</Text>  
      <View className='flex-row border-2 border-red-500 rounded-md w-36 h-12'>
        <TouchableOpacity
          className='w-full h-full'
          onPress={() => setIsModalVisible(true)}
          accessibilityLabel="Selecionar estado"
          accessibilityHint="Abre uma lista de estados para selecionar"
        >
          <View className='w-36 h-12 flex-row justify-between items-center'>
            <View className=''>
              <Text className='ml-3 mb-1'>{selectedState || 'Selecionar'}</Text> 
            </View>
            <AntDesign name="down" size={18} color="#ED1C24" className='mr-4'/>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SelectStateModal
          setIsModalVisible={changeModalVisibility} 
          onSelectState={handleSelectState}
        />
      </Modal>
    </View>
  );
}