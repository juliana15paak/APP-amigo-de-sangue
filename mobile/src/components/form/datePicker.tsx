import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
  text: string,
  visible: boolean,
}

export const DatePicker = ({visible, text}: Props) => {
  if (!visible) return null

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
      <View className='flex-3 mr-10 -ml-4 mt-3 mb-1 justify-start'>
        <Text className='font-medium text-red-600 mx-2'>{text}</Text>
        <View className='p-2 px-4 h-12 border-2 border-red-500 rounded-md'>
          <TouchableOpacity className='w-full h-full' onPress={showDatepicker}>
            <View className='flex-row justify-between items-center'>
              <Text className='font-medium text-red-600'>{date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</Text>
              <MaterialIcons name="date-range" size={24} color="#ED1C24" />
            </View>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              maximumDate={new Date()}
              minimumDate={new Date(1954,8,23)}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </View>
      </View>
  );
};

export default DatePicker;