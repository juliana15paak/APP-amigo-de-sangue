import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ModalPickerProps {
  util: { sigla: string; name: string; }[];
  setIsModalVisible: (isVisible: boolean) => void;
  onSelect: (sigla: string) => void;
}

export function SelectModal({ util, setIsModalVisible, onSelect }: ModalPickerProps) {

  return (
    <View className='flex-1 justify-center items-center bg-zinc-50'>
      <TouchableOpacity 
        onPress={() => setIsModalVisible(false)}
      >
        <View className='flex-row justify-center'>
          <View className='bg-white rounded-lg justify-center p-6 mb-10 mt-6 w-full max-w-md'>
            <View className='items-end'>
            <AntDesign name="close" size={24} color="#ED1C24" onPress={() => setIsModalVisible(false)}/>
            </View>
              <FlatList
                data={util}
                renderItem={({ item }) => (
                  <View>
                    <TouchableOpacity 
                      onPress={() => {onSelect(item.sigla); setIsModalVisible(false);}}
                    >
                        <Text className='p-4 pl-0 pb-1 mt-2 border-b-black border-b-2'>{item.name}</Text>
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