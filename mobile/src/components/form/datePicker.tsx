import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface Props {
  text: string;
  visible: boolean;
  editable: boolean;
}

export const DatePicker = ({ visible, text, editable, value, onChange }: Props & { value: Date; onChange: (date: Date) => void }) => {
  if (!visible) return null;

  const [show, setShow] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);

  const onDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || value;
    currentDate.setHours(0, 0, 0, 0);
    setShow(false);
    onChange(currentDate); 
    setIsDateSelected(true);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() - 16);

  return (
    <View
      style={{
        marginBottom: RFValue(5),
        marginTop: RFValue(7), 
        marginLeft: RFValue(28), 
        marginRight: RFValue(13)
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
          paddingVertical: RFValue(8),
          paddingHorizontal: RFValue(10),
          width: RFPercentage(23), 
          height: RFValue(41), 
          borderWidth: RFValue(1), 
          borderColor: 'black', 
          borderRadius: RFValue(4), 
        }}
      >
        <TouchableOpacity
          style={{ width: '100%', height: '100%' }}
          onPress={editable ? showDatepicker : undefined}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text
              style={{
                fontSize: RFValue(14), 
                marginRight: RFValue(12),
                color: isDateSelected ? 'black' : '#929292',
              }}
            >
              {value.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </Text>
            <MaterialIcons name="date-range" size={RFValue(18)} color="black" />
          </View>
        </TouchableOpacity>
        
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode="date"
            maximumDate={maxDate}
            minimumDate={new Date(1954, 8, 23)}
            is24Hour={true}
            onChange={onDateChange}
          />
        )}
      </View>
    </View>
  );
};

export default DatePicker;
