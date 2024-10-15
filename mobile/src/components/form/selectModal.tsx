import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';

interface ModalPickerProps {
  util: { sigla: string; name: string; }[];
  setIsModalVisible: (isVisible: boolean) => void;
  onSelect: (sigla: string) => void;
}

export function SelectModal({ util, setIsModalVisible, onSelect }: ModalPickerProps) {

  return (
    <View className='flex-1 justify-center items-center bg-zinc-100'>
      <TouchableOpacity 
        onPress={() => setIsModalVisible(false)}
      >
        <View className='flex-row justify-center'>
          <View className='bg-white rounded-lg justify-center w-full max-w-md'
            style={{
              padding: RFValue(18),
              marginBottom: RFValue(28),
              marginTop: RFValue(24),
              marginHorizontal: RFValue(-24)
            }}
          >
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
                        <Text className='p-4 pl-0 pb-1 mt-2 border-b-black'
                          style={{
                            borderBottomWidth: RFValue(1)
                          }}
                        >{item.name}</Text>
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