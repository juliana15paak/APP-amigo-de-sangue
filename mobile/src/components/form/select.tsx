import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SelectModal } from './selectModal';
import clsx from 'clsx';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  visible: boolean;
  text: string;
  editable: boolean;
  utilImport: { sigla: string; name: string }[];
  onSelect: (sigla: string) => void;
  selectedValue?: string;
}

type Variants = 'view20' | 'view40';

type VProps = {
  variant?: Variants;
};

export function Select({
  variant,
  visible,
  text,
  utilImport,
  onSelect,
  editable,
  selectedValue,
}: Props & VProps) {
  if (!visible) return null;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(selectedValue || null);

  const changeModalVisibility = (isVisible: boolean) => {
    setIsModalVisible(isVisible);
  };

  const handleSelect = (sigla: string) => {
    setSelected(sigla);
    onSelect(sigla);
    changeModalVisibility(false);
  };

  useEffect(() => {
    setSelected(selectedValue || null);
  }, [selectedValue]);

  return (
    <View
      style={{
        marginTop: variant === 'view20'? RFValue(8) : RFValue(5),
        marginBottom: RFValue(0),
        marginLeft: RFValue(0),
        justifyContent: 'flex-start',
      }}
    >
      <Text
        className='font-medium'
        style={{
          fontSize: RFValue(13), 
          marginLeft: RFValue(8), 
          color: 'black',
        }}
      >
        {text}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          borderWidth: RFValue(1), 
          borderColor: 'black',
          borderRadius: RFValue(4), 
          width: variant === 'view20' ? RFValue(112) : RFValue(118), 
          height: RFValue(40), 
        }}
      >
        <TouchableOpacity
          style={{ width: '100%', height: '100%' }}
          onPress={() => setIsModalVisible(editable)}
        >
          <View
            className='justify-between items-center'
            style={{
              flexDirection: 'row',
              width: RFValue(100), 
              height: RFValue(42), 
            }}
          >
            <Text
              style={{
                marginLeft: RFValue(10), 
                marginRight: RFValue(10),
                marginBottom: RFValue(4),
                fontSize: RFValue(13), 
                color: selected ? 'black' : '#71717a',
              }}
            >
              {selected || 'Selecionar'}
            </Text>
            <AntDesign
              name="down"
              size={RFValue(18)} 
              color="black"
              style={{ marginRight: RFValue(12) }} 
            />
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SelectModal util={utilImport} setIsModalVisible={changeModalVisibility} onSelect={handleSelect} />
      </Modal>
    </View>
  );
}

