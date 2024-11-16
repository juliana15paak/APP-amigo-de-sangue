import { HeaderFeed } from '@/src/components/feed/headerFeed';
import { RegistroHistorico } from '@/src/components/feed/registroHistorico';
import { registroHistorico, Props } from '@/src/utils/feed/historico';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export function Historico() {
  const Item = ({dataDoacao, nomeHemocentro}: Props) => (
    <RegistroHistorico
      dataDoacao={dataDoacao}
      nomeHemocentro={nomeHemocentro}
    />
  );

  return (
    <View className='flex-1 justify-start bg-white'>
      <HeaderFeed/>
      <View className='flex-1'
        style={{
          marginTop: RFPercentage(-62)
        }}
      >
        <Text className='font-semibold'
          style={{
            fontSize: RFValue(14),
            marginLeft: RFValue(28),
            marginBottom: RFValue(12)
          }}
        >Últimas Doações</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={registroHistorico}
          renderItem={({item}) =>
          <Item {...item} 
            dataDoacao={item.dataDoacao}
            nomeHemocentro={item.nomeHemocentro}/>
          }
          keyExtractor={item => item.id}
        />   
      </View>
    </View>
  );
}