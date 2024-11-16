import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { HemocentroCardFeed } from './hemocentroCardFeed';
import { hemocentros, ItemProps } from '../../utils/feed/hemocentros';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from 'expo-router';

export function FeedHemocentros(){
    const Item = ({id, nomeHemocentro, imgHemocentro}: ItemProps) => (
      <HemocentroCardFeed text={nomeHemocentro}>
        <Image className='rounded-full'
           source={imgHemocentro}
           resizeMode='contain'
           style={{
            width: RFPercentage(20),
            height: RFPercentage(20),
           }}
        />
      </HemocentroCardFeed>
    );

    const navigation = useNavigation();

    return(
    <View className="flex-1 bg-white">
        <Text className="font-semibold"
          style={{
            marginHorizontal: RFValue(10),
            fontSize: RFValue(14),
            marginLeft: RFValue(28),
            marginVertical: RFValue(15)
          }}
        >Hemocentros mais próximos</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={hemocentros}
          renderItem={({item}) => <Item {...item} imgHemocentro={item.imgHemocentro} />}
          keyExtractor={item => item.id}
        />   
        <View className="items-end m-4">
            <TouchableOpacity onPress={()=>navigation.navigate('Hemocentros')}>
                <Text className="text-blueTheme-600 font-medium"
                  style={{fontSize: RFValue(13)}}
                >Conferir todos</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}