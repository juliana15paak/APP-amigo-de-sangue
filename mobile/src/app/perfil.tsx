import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { states } from '../utils/form/states';
import { bloodTypes } from '../utils/form/bloodTypes';
import { genders } from '../utils/form/genders';

import { UserPhoto } from '../components/userPhoto';
import { Input } from '../components/form/input';
import { Select } from '../components/form/select';
import { Button } from '../components/form/button';
import { Search } from '../components/form/search';
import DatePicker from '../components/form/datePicker';

export default function Perfil() {

  const [userPhoto, setUserPhoto] = useState(require('../assets/images/perfilFotoDefault.png'));

  async function handleUserPhotoSelect(){
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4,4],
      allowsEditing: true
    });
    if(photoSelected.canceled){
      return
    }
    setUserPhoto(photoSelected.assets[0].uri)
  }

  return (
    <View className='bg-white flex-1'>
      <ScrollView className='pb-8'>

        <View className='flex-1 items-center justify-center w-full h-full'>
          <UserPhoto variant='profile' source={{ uri: userPhoto }} alt='Imagem do usuário'/>
          <Button
            variant='ChangeProfile'
            text='Alterar foto'
            onPress={handleUserPhotoSelect}
          />
        </View>

        <View className='justify-start'>
          <Text className='text-red-600 text-2xl font-semibold mb-1 mx-12'>Dados Pessoais</Text>
              <Input
                text='Nome'
                visible={true}
              />
              <View className='flex-row justify-between items-center'>
                <Input
                  variant='input40'
                  text='Telefone'
                  visible={true}
                  keyboardType='numeric'
                />
                <DatePicker
                  text='Data de Nascimento'
                  visible={true}
                  // onChange={(selectedDate: Date) => setUserData({ ...userData, dataNascUser: selectedDate })}
                />
              </View>
              <View className='flex-row'>
                <Input
                  variant='input60'
                  text='CPF'
                  visible={true}
                />
                <Select
                  variant='view20'
                  text='Sexo'
                  utilImport={genders}
                  onSelect={(selectedGender) => setUserData({ ...userData, generoUser: selectedGender })}
                  visible={true}
                />
              </View>
              <View className='flex-row'>
                <Input
                  text='RG'
                  variant='input60'
                  visible={true}
                />
                <Select
                  variant='view20'
                  text='Tipo Sanguíneo'
                  utilImport={bloodTypes}
                  onSelect={(selectedBloodType) => setUserData({ ...userData, descTipoSanguineo: selectedBloodType })}
                  visible={true}
                />
              </View>
          </View>

      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </View>
  );
}