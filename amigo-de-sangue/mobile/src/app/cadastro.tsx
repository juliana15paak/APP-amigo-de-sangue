import { useState, useCallback } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import AntDesign from '@expo/vector-icons/AntDesign';

import '../styles/theme'
import { Header } from '../components/form/header';
import { Input } from '../components/form/input';
import { SelectState } from '../components/form/selectState';
import { Button } from '../components/form/button';
import { Steps } from '../components/form/steps';
import { Search } from '../components/form/search';

import DatePicker from '../components/form/datePicker';
import { SelectGen } from '../components/form/selectGen';

enum StepForm{
  PERSONAL_DATA = 1,
  ADD_ADDRESS = 2,
}

export default function Cadastro() {
  const [stepForm, setStepForm] = useState(StepForm.PERSONAL_DATA)
  const [personalData, setPersonalData] = useState({

  }); 
  const [addressData, setAddressData] = useState({

  });


  const [selectedState, setSelectedState] = useState<string | null>(null);
  const handleStateSelect = (stateSigla: string) => {
    setSelectedState(stateSigla);
  };


  const handleBackPress = useCallback(() => {
    if (stepForm === StepForm.ADD_ADDRESS) {
      handlePreviousStepForm();
      return true;
    }
    return false;
  }, [stepForm]);
  useBackHandler(handleBackPress);


  function handleNextStepForm(){
    if(stepForm === StepForm.PERSONAL_DATA){
      return setStepForm(StepForm.ADD_ADDRESS)
    }
  }

  function handlePreviousStepForm() {
    if (stepForm === StepForm.ADD_ADDRESS) {
      setStepForm(StepForm.PERSONAL_DATA);
    }
  }

  return (
    <View className='bg-white flex-1'>

      <Header>
        <AntDesign
          name="left"
          size={30}
          className='justify-start w-10 h-10 items-start mx-6 mt-12'
          color="white"
          onPress={handlePreviousStepForm}
        />
        <Image className='h-24 w-44 mb-9 self-center'
          source={require('../assets/images/Logos/LogoAppTextoIconeBranco.png')}
          resizeMode='contain'
        />
        <Image className=''
          source={require('../assets/images/Login/HeaderWhite.png')}
          resizeMode='contain'
        />
      </Header>

      {stepForm === StepForm.PERSONAL_DATA && (
        <View className='mb-10'>
          <Text className='text-red-600 text-2xl font-semibold mx-12'>Dados Pessoais</Text>
          <Input
            text='Nome'
            visible={stepForm === StepForm.PERSONAL_DATA}
            value={personalData.name}
            onChangeText={(text) => setPersonalData({ ...personalData, name: text })}
          />
          <View className='flex-row justify-between items-center'>
            <Input
              variant='input40'
              text='Telefone'
              visible={stepForm === StepForm.PERSONAL_DATA}
              value={personalData.phone}
              onChangeText={(text) => setPersonalData({ ...personalData, phone: text })}
              keyboardType='numeric'
            />
            <DatePicker 
              text='Data de Nascimento'
              visible={stepForm === StepForm.PERSONAL_DATA}
            />
          </View>
          <View className='flex-row justify-between'>
            <Input
              variant='input60'
              text='CPF'
              visible={stepForm === StepForm.PERSONAL_DATA}
              value={personalData.cpf}
              onChangeText={(text) => setPersonalData({ ...personalData, cpf: text })}
            />
            <SelectGen
              onStateSelect={handleStateSelect}
              visible={stepForm === StepForm.PERSONAL_DATA}
            />
          </View>
          <Input
            text='RG'
            visible={stepForm === StepForm.PERSONAL_DATA}
            value={personalData.rg}
            onChangeText={(text) => setPersonalData({ ...personalData, rg: text })}
          />
        </View>
      )}
      
      {stepForm === StepForm.ADD_ADDRESS &&(
        <View className='mb-8 bg-transparent'>
          <Text className='text-red-600 text-2xl font-semibold mx-12 w-64'>Endereço</Text>
          <ScrollView>
            <View className='flex-row items-end'>
              <Input
                variant='input60'
                text='CEP'
                visible={stepForm === StepForm.ADD_ADDRESS}
                value={addressData.cep}
                onChangeText={(text) => setAddressData({ ...addressData, cep: text })}
              />
              <Search/>
            </View>
            <Input
              text='Rua'
              visible={stepForm === StepForm.ADD_ADDRESS}
              value={addressData.rua}
              onChangeText={(text) => setAddressData({ ...addressData, rua: text })}
            />
            <View className='flex-row'>
              <Input
                variant='input20'
                text='Nº'
                visible={stepForm === StepForm.ADD_ADDRESS}
                value={addressData.numero}
                onChangeText={(text) => setAddressData({ ...addressData, numero: text })}
              />
              <Input
                variant='input60r'
                text='Complemento'
                visible={stepForm === StepForm.ADD_ADDRESS}
                value={addressData.complemento}
                onChangeText={(text) => setAddressData({ ...addressData, complemento: text })}
              />
            </View>
            <Input
              text='Bairro'
              visible={stepForm === StepForm.ADD_ADDRESS}
              value={addressData.bairro}
              onChangeText={(text) => setAddressData({ ...addressData, bairro: text })}
            />
            <View className='flex-row'>
              <Input
                variant='input60'
                text='Cidade'
                visible={stepForm === StepForm.ADD_ADDRESS}
                value={addressData.cidade}
                onChangeText={(text) => setAddressData({ ...addressData, cidade: text })}
              />
              <SelectState
                onStateSelect={handleStateSelect}
                visible={stepForm === StepForm.ADD_ADDRESS}
              />
            </View>
          </ScrollView>
        </View>
      )}

      {stepForm === StepForm.PERSONAL_DATA && (
        <Button text='Próxima Etapa' onPress={handleNextStepForm} />
      )}
      {stepForm === StepForm.ADD_ADDRESS && (
        <Button variant = "SalvarContinuar" text=' Salvar e Continuar ' onPress={() => { /* save address data and continue */ }} />
      )}

      {stepForm === StepForm.PERSONAL_DATA && (
        <Steps
          text='1/4'
          variant='StepOne'
          visible={stepForm === StepForm.PERSONAL_DATA}
        />
      )}
      {stepForm === StepForm.ADD_ADDRESS && (
        <Steps
          text='2/4'
          variant='StepTwo'
          visible={stepForm === StepForm.ADD_ADDRESS}
        />
      )}
    </View>
  );
}