import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SelectModal } from './selectModal'; 
import clsx from "clsx";

interface Props {
    visible: boolean,
    text: string,
    utilImport: { sigla: string; name: string; }[]
    onSelect: (sigla: string) => void;
}

type Variants = "view20" | "view40" 

type VProps = {
  variant?: Variants
}

export function Select({variant, visible, text, utilImport, onSelect}: Props & VProps ) {
  if (!visible) return null

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const changeModalVisibility = (isVisible: boolean) => {
    setIsModalVisible(isVisible);
};

const handleSelect = (sigla: string) => {
    setSelected(sigla);
    onSelect(sigla);
    changeModalVisibility(false);
};

  return (
    <View className='flex-3 mt-2 -ml-5 mb-0 justify-start'>
      <Text className='font-medium text-red-600 mx-2'>{text}</Text>  
      <View className={clsx('flex-row border-2 border-red-500 rounded-md w-36 h-12',
        {
          "w-24": variant === "view20",
        }
      )}>
        <TouchableOpacity
          className='w-full h-full'
          onPress={() => setIsModalVisible(true)}
        >
          <View className='w-36 h-12 flex-row justify-between items-center'>
            <Text className={`ml-3 font-medium ${selected ? '' : 'text-red-600'}`}>{selected || 'Selecionar'}</Text>
            <AntDesign name="down" size={18} color="#ED1C24" className='mr-4'/>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SelectModal
          util={utilImport}
          setIsModalVisible={changeModalVisibility} 
          onSelect={handleSelect}
        />
      </Modal>
    </View>
  );
}