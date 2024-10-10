import { useState, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useBackHandler } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { states } from '../utils/form/states';
import { genders } from '../utils/form/genders';
import { schema } from '../utils/form/schemaUser';

import { Input } from '../components/form/input';
import { Select } from '../components/form/select';
import { Button } from '../components/form/button';
import { Steps } from '../components/form/steps';
import DatePicker from '../components/form/datePicker';
import { PasswordInput } from '../components/form/passwordInput';
import { RFValue } from 'react-native-responsive-fontsize';

enum StepForm{
  PERSONAL_DATA = 1,
  ADD_ADDRESS = 2,
  ADD_EMAIL = 3
}

export default function Cadastro() {
  const navigation = useNavigation();

  const { control, setValue, handleSubmit, watch, formState: { errors }} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      nomeUsuario: '',
      dataNascUsuario: '',
      numTelefone: '',
      generoUsuario: '',
      emailUsuario: '',
      senhaUsuario: '',
      cpfUsuario: '',
      logUsuario: '',
      numLogUsuario: '',
      compUsuario: '',
      bairroUsuario: '',
      cidadeUsuario: '',
      estadoUsuario: '',
      cepUsuario: '',
      rgUsuario: '',
    }
  })
  
  interface SignInData {
    nomeUsuario: string,
    dataNascUsuario: string,
    numTelefone: string,
    generoUsuario: string,
    emailUsuario: string,
    senhaUsuario: string,
    cpfUsuario: string,
    logUsuario: string,
    numLogUsuario: string,
    compUsuario?: string,
    bairroUsuario: string,
    cidadeUsuario: string,
    estadoUsuario: string,
    cepUsuario: string,
    rgUsuario: string,
  }

  const [responseMessage, setResponseMessage] = useState('');

  const [stepForm, setStepForm] = useState(StepForm.PERSONAL_DATA)

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

  const SaveContinue = async (data: SignInData) => {
    try {
        const response = await fetch('http://179.63.40.44:8000/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept'  : 'application/json',
        },
        body: JSON.stringify(data),
      });
      

      const text = await response.text();
    console.log('Response Text:', text);

    navigation.navigate('Login');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = JSON.parse(text);
    setResponseMessage(json.message);
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
  }

  //
  }
  async function buscarCep(cep: string) {
    if (cep.length === 8) {  // Verifica se o CEP tem 8 dígitos
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data.erro) {
          alert('CEP não encontrado');
        } else {
          setValue('logUsuario', data.logradouro);
          setValue('bairroUsuario', data.bairro);
          setValue('cidadeUsuario', data.localidade);
          setValue('estadoUsuario', data.uf);
        }
      } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
      }
    }
  }

  const personalDataFields = watch([
    'nomeUsuario',
    'numTelefone',
    'dataNascUsuario',
    'generoUsuario',
    'cpfUsuario',
    'rgUsuario',
  ]);
  const addressFields = watch([
    'logUsuario',
    'numLogUsuario',
    'bairroUsuario',
    'cidadeUsuario',
    'estadoUsuario',
    'cepUsuario',
  ]);
  const emailPasswordFields = watch(['emailUsuario', 'senhaUsuario']);

  const isPersonalDataStepValid = personalDataFields.every((field) => field !== '');
  const isAddressStepValid = addressFields.every((field) => field !== '');
  const isEmailPasswordStepValid = emailPasswordFields.every((field) => field !== '');

  return (
    <View className='bg-white flex-1'>

      {/* tela de dados pessoais */}
      {stepForm === StepForm.PERSONAL_DATA && (
        <>
          <Steps
            variant='StepOne'
            visible={stepForm === StepForm.PERSONAL_DATA}
          />
          <View className='justify-start mt-2 flex-1 w-full bg-white'>
            <ScrollView>
              <Text className='text-blueTheme-700 font-semibold'
                style={{
                  fontSize: RFValue(18),
                  marginBottom: RFValue(4),
                  marginTop: RFValue(5),
                  marginHorizontal: RFValue(30)
                }}
              >Dados Pessoais</Text>
                <Controller
                  control={control}
                  name='nomeUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Input
                        text='Nome'
                        visible={stepForm === StepForm.PERSONAL_DATA}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {errors.nomeUsuario && <Text className='color-red-600 self-start' style={{
                        fontSize: RFValue(12),
                        marginLeft: RFValue(30)
                      }}>{errors.nomeUsuario?.message}</Text>}
                    </>
                  )}
                />
                
                <Controller
                  control={control}
                  name='numTelefone'
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Input
                        text='Telefone'
                        visible={stepForm === StepForm.PERSONAL_DATA}
                        value={value}
                        onChangeText={onChange}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                      {errors.numTelefone && <Text className='color-red-600 self-start' style={{
                        fontSize: RFValue(12),
                        marginLeft: RFValue(30)
                      }}>{errors.numTelefone?.message}</Text>}
                    </>
                  )}
                />

                <View className='flex-row'>
                  <Controller
                    control={control}
                    name="dataNascUsuario"
                    render={({ field: { onChange, value } }) => {
                      const dateValue = value ? new Date(value) : new Date(); 
                      return (
                        <>
                          <DatePicker
                            text="Data de Nascimento"
                            visible={stepForm === StepForm.PERSONAL_DATA}
                            editable={true}
                            value={dateValue}
                            onChange={(selectedDate) => onChange(selectedDate.toISOString())} 
                          />
                          {errors.dataNascUsuario &&
                            <Text className='color-red-600 self-start' style={{
                              fontSize: RFValue(12),
                              marginLeft: RFValue(30)
                          }}>{errors.dataNascUsuario?.message}</Text>}
                        </>
                      );
                    }}
                  />
                  <Controller
                    control={control}
                    name="generoUsuario"
                    render={({ field: { onChange, value } }) => (
                      <>
                        <Select
                          variant="view20"
                          text="Sexo"
                          utilImport={genders}
                          onSelect={(sigla) => onChange(sigla)} 
                          visible={stepForm === StepForm.PERSONAL_DATA}
                          editable={true}
                          selectedValue={value} 
                        />
                        {errors.generoUsuario && 
                          <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.generoUsuario?.message}</Text>
                        }
                      </>
                    )}
                  />
                </View>
                <Controller
                    control={control}
                    name='cpfUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                        <Input
                          text='CPF'
                          visible={stepForm === StepForm.PERSONAL_DATA}
                          value={value.toString()}
                          onChangeText={onChange}
                          keyboardType='numeric'
                          onBlur={onBlur}
                        />
                        {errors.cpfUsuario &&  <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.cpfUsuario?.message}</Text>}
                      </>
                    )}
                />

                <Controller
                    control={control}
                    name='rgUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                        <Input
                          text='RG'
                          visible={stepForm === StepForm.PERSONAL_DATA}
                          value={value.toString()}
                          onChangeText={(text) => {
                            const rg = text.replace(/\D+/g, '');
                            onChange(rg)
                          }}
                          keyboardType='numeric'
                          onBlur={onBlur}
                        />
                        {errors.rgUsuario &&  <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.rgUsuario?.message}</Text>}
                      </>
                    )}
                />
              
              <Button text='Próxima Etapa' onPress={handleNextStepForm} disabled={Object.keys(errors).length > 0 || !isPersonalDataStepValid}/>
            </ScrollView>
          </View>
        </>
      )}

      {/* tela de endereço */}
      {stepForm === StepForm.ADD_ADDRESS &&(
        <>
          <Steps
            variant='StepTwo'
            visible={stepForm === StepForm.ADD_ADDRESS}
          />
          <View className='justify-start mt-2 flex-1 bg-white'>
            <ScrollView>
              <Text className='text-blueTheme-700 font-semibold'
                style={{
                  fontSize: RFValue(18),
                  marginBottom: RFValue(4),
                  marginTop: RFValue(5),
                  marginHorizontal: RFValue(30)
                }}
              >Endereço</Text>
                <View className='flex-row items-end'>
                  <Controller
                      control={control}
                      name='cepUsuario'
                      render={({field: {onChange, onBlur, value}}) => (
                        <>
                        <Input
                          text='CEP'
                          visible={stepForm === StepForm.ADD_ADDRESS}
                          value={value}
                          onChangeText={(text) => {
                            const cep = text.replace(/\D+/g, '');
                            onChange(cep)
                            if (cep.length === 8) {
                              buscarCep(cep);
                            }
                          }}
                          keyboardType='numeric'
                          onBlur={onBlur}
                        />
                        {errors.cepUsuario && <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.cepUsuario?.message}</Text>}
                        </>
                      )}
                  />
                </View>

                <Controller
                  control={control}
                  name='logUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                    <Input
                      text='Rua'
                      visible={stepForm === StepForm.ADD_ADDRESS}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                    {errors.logUsuario && <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.logUsuario?.message}</Text>}
                    </>
                  )}
                />

                <View className='flex-row justify-start'>
                <Controller
                    control={control}
                    name='numLogUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                      <Input
                        variant='input20'
                        text='Nº'
                        visible={stepForm === StepForm.ADD_ADDRESS}
                        value={value.toString()}
                        onChangeText={(text) => onChange(Number(text))}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                      {errors.numLogUsuario && <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.numLogUsuario?.message}</Text>}
                      </>
                    )}
                  />
                  <Controller
                    control={control}
                    name='estadoUsuario'
                    render={({field: {onChange, value}}) => (
                      <>
                      <Select
                        utilImport={states}
                        variant='view40'
                        onSelect={(sigla) => {
                          onChange(sigla); 
                        }}
                        text='Estado'
                        visible={stepForm === StepForm.ADD_ADDRESS}
                        editable={true}
                        selectedValue={value}
                      />
                      {errors.estadoUsuario && 
                        <Text className='color-red-600 self-start' style={{
                          fontSize: RFValue(12),
                          marginLeft: RFValue(30)
                        }}>{errors.estadoUsuario?.message}</Text>
                      }
                      </>
                    )}
                  />
                </View>
                <View className='flex-row'>
                  
                </View>
                <Controller
                    control={control}
                    name='compUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        text='Complemento'
                        visible={stepForm === StepForm.ADD_ADDRESS}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                />         

                <Controller
                  control={control}
                  name='bairroUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                    <Input
                      text='Bairro'
                      visible={stepForm === StepForm.ADD_ADDRESS}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                    {errors.bairroUsuario && <Text className='color-red-600 self-start' style={{
                            fontSize: RFValue(12),
                            marginLeft: RFValue(30)
                          }}>{errors.bairroUsuario?.message}</Text>}
                    </>
                  )}
                />

                <Controller
                    control={control}
                    name='cidadeUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <>
                      <Input
                        text='Cidade'
                        visible={stepForm === StepForm.ADD_ADDRESS}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {errors.cidadeUsuario && <Text className='color-red-600 self-start' style={{
                          fontSize: RFValue(12),
                          marginLeft: RFValue(30)
                      }}>{errors.cidadeUsuario?.message}</Text>}
                      </>
                    )}
                />

              <Button text='Próxima Etapa' onPress={handleNextStepForm} disabled={Object.keys(errors).length > 0 || !isAddressStepValid}/>
            </ScrollView>
          </View>
        </>
      )}

      {/* tela de email e senha*/}
      {stepForm === StepForm.ADD_EMAIL && (
        <>
         <Steps
            variant='StepThree'
            visible={stepForm === StepForm.ADD_EMAIL}
          />
          <View className='flex-1 justify-start mt-4'>
            <ScrollView>
            <Text className='text-blueTheme-700 font-semibold'
              style={{
                fontSize: RFValue(18),
                marginBottom: RFValue(4),
                marginTop: RFValue(5),
                marginHorizontal: RFValue(30)
              }}
            >Crie sua conta</Text>
            <Controller
                control={control}
                name='emailUsuario'
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                  <Input
                    text='Email'
                    visible={stepForm === StepForm.ADD_EMAIL}
                    value={value}
                    onChangeText={onChange}
                    keyboardType='email-address'
                    onBlur={onBlur}
                  />
                  {errors.emailUsuario && <Text className='color-red-600 self-start' style={{
                    fontSize: RFValue(12),
                    marginLeft: RFValue(30)
                  }}>{errors.emailUsuario?.message}</Text>}
                  </>
                )}
            />
            
            <Controller
                control={control}
                name='senhaUsuario'
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                  <PasswordInput
                    text='Senha'
                    visible={stepForm === StepForm.ADD_EMAIL}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {errors.senhaUsuario && <Text className='color-red-600 self-start' style={{
                      fontSize: RFValue(12),
                      marginLeft: RFValue(30)
                  }}>{errors.senhaUsuario?.message}</Text>}
                  </>
                )}
            />

            <Controller
                control={control}
                name='passwordConfirmation'
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                  <PasswordInput
                    text='Confirme a senha'
                    visible={stepForm === StepForm.ADD_EMAIL}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  {errors.passwordConfirmation && <Text className='color-red-600 self-start' style={{
                      fontSize: RFValue(12),
                      marginLeft: RFValue(30)
                  }}>{errors.passwordConfirmation?.message}</Text>}
                  </>
                )}
            />

            <Button variant="SalvarContinuar" text='Finalizar' onPress={handleSubmit(SaveContinue)} disabled={Object.keys(errors).length > 0 || !isEmailPasswordStepValid}/>
            {responseMessage ? <Text>{responseMessage}</Text> : null}
            </ScrollView>
          </View>
        </>
      )}

    </View>
  );
}