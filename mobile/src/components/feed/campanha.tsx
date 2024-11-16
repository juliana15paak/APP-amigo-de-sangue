import { Image, View, FlatList, Modal, Text, TouchableOpacity } from 'react-native';
import { campanhas, ItemProps } from '../../utils/feed/campanhas';
import { useState } from 'react';
import { CampanhaModal } from './campanhaModal';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

type PropsModal = {
  onPress: () => void;
};

export function Campanha() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCampanha, setSelectedCampanha] = useState<ItemProps | null>(null);

  const changeModalVisibility = (isVisible: boolean) => {
    setIsModalVisible(isVisible);
  };

  const Item = ({ onPress, imgCampanha }: ItemProps & PropsModal) => (
    <View 
      className='flex-1 flex-row' 
      style={{ marginLeft: RFValue(6) }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image
          className='rounded-3xl'
          style={{
            height: RFPercentage(48),
            width: RFPercentage(35),
          }}
          source={imgCampanha}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ marginTop: RFValue(24) }}>
      <Text
        className="font-semibold"
        style={{
          marginHorizontal: RFValue(10),
          fontSize: RFValue(14),
          marginLeft: RFValue(28),
          marginBottom: RFValue(10)
        }}
      >
        Campanhas
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={campanhas}
        renderItem={({ item }) => (
          <Item
            {...item}
            onPress={() => {
              setSelectedCampanha(item);
              setIsModalVisible(true);
            }}
            imgCampanha={item.imgCampanha}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: RFValue(8) }}
      />

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        {selectedCampanha && (
          <CampanhaModal
            setIsModalVisible={changeModalVisibility}
            campanha={selectedCampanha}
          />
        )}
      </Modal>
    </View>
  );
}
