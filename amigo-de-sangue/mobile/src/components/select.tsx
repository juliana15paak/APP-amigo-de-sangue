import { useState } from 'react';
import { View } from 'react-native';
import { Picker, PickerProps } from "@react-native-picker/picker"

import '../styles/theme'

interface Props {
    visible: boolean,
}

export function Select({visible, ...rest}: Props & PickerProps) {
  if (!visible) return null

  const [selectedState, setSelectedState] = useState();

  return (
    <View className='flex-3 m-9 mt-4 mb-0 justify-start'>
        <Picker
            {...rest} className='p-2 px-4 border-2 border-red-500 rounded-md'
            selectedValue={selectedState}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedState(itemValue)
            }>
            <Picker.Item label="AC" value="AC" />
            <Picker.Item label="AL" value="AL" />
            <Picker.Item label="AP" value="AP" />
            <Picker.Item label="AM" value="AM" />
            <Picker.Item label="BA" value="BA" />
            <Picker.Item label="CE" value="CE" />
            <Picker.Item label="DF" value="DF" />
            <Picker.Item label="ES" value="ES" />
            <Picker.Item label="GO" value="GO" />
            <Picker.Item label="MA" value="MA" />
            <Picker.Item label="MG" value="MG" />
            <Picker.Item label="MS" value="MS" />
            <Picker.Item label="MT" value="MT" />
            <Picker.Item label="PA" value="PA" />
            <Picker.Item label="PB" value="PB" />
            <Picker.Item label="PE" value="PE" />
            <Picker.Item label="PI" value="PI" />
            <Picker.Item label="PR" value="PR" />
            <Picker.Item label="RJ" value="RJ" />
            <Picker.Item label="RO" value="RO" />
            <Picker.Item label="RR" value="RR" />
            <Picker.Item label="RS" value="RS" />
            <Picker.Item label="SC" value="SC" />
            <Picker.Item label="SE" value="SE" />
            <Picker.Item label="SP" value="SP" />
            <Picker.Item label="TO" value="TO" />
        </Picker>
    </View>
  );
}