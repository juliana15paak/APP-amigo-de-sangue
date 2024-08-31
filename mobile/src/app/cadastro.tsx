import { useState, useCallback } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import AntDesign from '@expo/vector-icons/AntDesign';

import { states } from '../utils/form/states';
import { bloodTypes } from '../utils/form/bloodTypes';
import { genders } from '../utils/form/genders';

import { Header } from '../components/form/header';
import { Input } from '../components/form/input';
import { Select } from '../components/form/select';
import { Button } from '../components/form/button';
import { Steps } from '../components/form/steps';
import { Search } from '../components/form/search';
import DatePicker from '../components/form/datePicker';

enum StepForm{
  PERSONAL_DATA = 1,
  ADD_ADDRESS = 2,
  ADD_EMAIL = 3
}

export default function Cadastro() {
  const [stepForm, setStepForm] = useState(StepForm.PERSONAL_DATA)
  const [userData, setUserData] = useState({}); 

  const [selectedState, setSelectedState] = useState<string | null>(null);
  const handleStateSelect = (stateSigla: string) => {
    setSelectedState(stateSigla);
  };
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const handleGenderSelect = (genderSigla: string) => {
    setSelectedGender(genderSigla);
  };
  const [selectedBloodType, setSelectedBloodType] = useState<string | null>(null);
  const handleBloodTypeSelect = (bloodTypeSigla: string) => {
    setSelectedBloodType(bloodTypeSigla);
  };

  const handleBackPress = useCallback(() => {
    if (stepForm === StepForm.ADD_ADDRESS) {
      handlePreviousStepForm();
      return true;
    }
    if (stepForm === StepForm.ADD_EMAIL) {
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
    if(stepForm === StepForm.ADD_ADDRESS){
      return setStepForm(StepForm.ADD_EMAIL)
    }
  }

  function handlePreviousStepForm() {
    if (stepForm === StepForm.ADD_ADDRESS) {
      setStepForm(StepForm.PERSONAL_DATA);
    } 
    if (stepForm === StepForm.ADD_EMAIL) {
      setStepForm(StepForm.ADD_ADDRESS);
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

      {/* tela de dados pessoais */}
      {stepForm === StepForm.PERSONAL_DATA && (
        <>
          <View className='justify-start'>
              <Text className='text-red-600 text-2xl font-semibold mb-1 mx-12'>Dados Pessoais</Text>
              <Input
                text='Nome'
                visible={stepForm === StepForm.PERSONAL_DATA}
                value={userData.name}
                onChangeText={(text) => setUserData({ ...userData, name: text })}
              />
              <View className='flex-row justify-between items-center'>
                <Input
                  variant='input40'
                  text='Telefone'
                  visible={stepForm === StepForm.PERSONAL_DATA}
                  value={userData.phone}
                  onChangeText={(numeric) => setUserData({ ...userData, phone: numeric })}
                  keyboardType='numeric'
                />
                <DatePicker 
                  text='Data de Nascimento'
                  visible={stepForm === StepForm.PERSONAL_DATA}
                />
              </View>
              <View className='flex-row'>
                <Input
                  variant='input60'
                  text='CPF'
                  visible={stepForm === StepForm.PERSONAL_DATA}
                  value={userData.cpf}
                  onChangeText={(text) => setUserData({ ...userData, cpf: text })}
                />
                <Select
                  variant='view20'
                  text='Gênero'
                  utilImport={genders}
                  onSelect={handleGenderSelect}
                  visible={stepForm === StepForm.PERSONAL_DATA}
                />
              </View>
              <View className='flex-row'>
                <Input
                  text='RG'
                  variant='input60'
                  visible={stepForm === StepForm.PERSONAL_DATA}
                  value={userData.rg}
                  onChangeText={(text) => setUserData({ ...userData, rg: text })}
                />
                <Select
                  variant='view20'
                  text='Tipo Sanguíneo'
                  utilImport={bloodTypes}
                  onSelect={handleBloodTypeSelect}
                  visible={stepForm === StepForm.PERSONAL_DATA}
                />
              </View>
              <Button text='Próxima Etapa' variant='NextStep' onPress={handleNextStepForm}/>
          </View>
          <Steps
          text='1/3'
          variant='StepOne'
          visible={stepForm === StepForm.PERSONAL_DATA}
          />
        </>
      )}

      {/* tela de endereço */}
      {stepForm === StepForm.ADD_ADDRESS &&(
        <>
          <View className='justify-start'>
              <Text className='text-red-600 text-2xl font-semibold mx-12 mb-1 w-64'>Endereço</Text>
              <ScrollView>
                <View className='flex-row items-end'>
                  <Input
                    variant='input60'
                    text='CEP'
                    visible={stepForm === StepForm.ADD_ADDRESS}
                    value={userData.cep}
                    onChangeText={(text) => setUserData({ ...userData, cep: text })}
                    keyboardType='numeric'
                  />
                  <Search/>
                </View>
                <Input
                  text='Rua'
                  visible={stepForm === StepForm.ADD_ADDRESS}
                  value={userData.rua}
                  onChangeText={(text) => setUserData({ ...userData, rua: text })}
                />
                <View className='flex-row'>
                  <Input
                    variant='input20'
                    text='Nº'
                    visible={stepForm === StepForm.ADD_ADDRESS}
                    value={userData.numero}
                    onChangeText={(text) => setUserData({ ...userData, numero: text })}
                    keyboardType='numeric'
                  />
                  <Input
                    variant='input60r'
                    text='Complemento'
                    visible={stepForm === StepForm.ADD_ADDRESS}
                    value={userData.complemento}
                    onChangeText={(text) => setUserData({ ...userData, complemento: text })}
                  />
                </View>
                <Input
                  text='Bairro'
                  visible={stepForm === StepForm.ADD_ADDRESS}
                  value={userData.bairro}
                  onChangeText={(text) => setUserData({ ...userData, bairro: text })}
                />
                <View className='flex-row'>
                  <Input
                    variant='input60'
                    text='Cidade'
                    visible={stepForm === StepForm.ADD_ADDRESS}
                    value={userData.cidade}
                    onChangeText={(text) => setUserData({ ...userData, cidade: text })}
                  />
                  <Select
                    utilImport={states}
                    onSelect={handleStateSelect}
                    text='Estado'
                    visible={stepForm === StepForm.ADD_ADDRESS}
                  />
                </View>
              </ScrollView>
            <Button variant='1Address' text='Próxima Etapa' onPress={handleNextStepForm} />
          </View>
          <Steps
            text='2/3'
            variant='StepTwo'
            visible={stepForm === StepForm.ADD_ADDRESS}
          />
        </>
      )}

      {/* tela de email e senha*/}
      {stepForm === StepForm.ADD_EMAIL && (
        <>
          <View className='flex-1 justify-center mb-52 mt-28'>
              <Text className='text-red-600 text-2xl font-semibold mx-12 mb-1'>Email e Senha</Text>
              <Input
                text='Email'
                visible={stepForm === StepForm.ADD_EMAIL}
                value={userData.email}
                keyboardType='email-address'
              />
              <Input
                text='Senha'
                visible={stepForm === StepForm.ADD_EMAIL}
                value={userData.senha}
              />
            <Button variant="SalvarContinuar" text='   Salvar e Continuar   ' onPress={() =>  {/* salvar os dados e continuar */}} />
          </View>
          <Steps
            text='3/3'
            variant='StepThree'
            visible={stepForm === StepForm.ADD_EMAIL}
          />
        </>
      )}

    </View>
  );
}