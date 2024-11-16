import AntDesign from '@expo/vector-icons/AntDesign';
import React, { ReactNode, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
    pergunta: string;
    children: ReactNode
}

export function InfoaskRetangulo({pergunta, children}: Props) {
  const [resposta, setResposta] = useState(false)

  return (
    <>
      <TouchableOpacity onPress={()=> setResposta(!resposta)}>
        <View className='bg-white flex-row justify-between items-center'
            style={{
                marginHorizontal: RFValue(26),
                marginTop: RFValue(8),
                marginBottom: RFValue(8)
            }}
        >
            <Text className='text-black font-semibold'
              style={{
                fontSize: RFValue(13),
                paddingLeft: RFValue(10),
                paddingVertical: RFValue(8),
                width: RFPercentage(40)
              }}
            >{pergunta}</Text>
            <AntDesign
                name={resposta === true? "up": "down"}
                size={18}
                className='justify-start items-start'
                style={{
                    width: RFValue(26),
                    height: RFValue(26),
                    paddingTop: RFValue(5),
                    marginRight:RFValue(2)
                }}
              color="gray"
            />
        </View>
      </TouchableOpacity>
      {resposta === true && (
      <View className='bg-white'
        style={{
          marginHorizontal: RFValue(26),
          marginTop: RFValue(-7),
          marginBottom: RFValue(8)
        }}
      >
        <Text className='text-black font-semibold'
          style={{
            fontSize: RFValue(13),
            paddingHorizontal: RFValue(10),
            paddingVertical: RFValue(8),
          }}
        >{children}</Text>
      </View>
      )}
    </>
  );
}