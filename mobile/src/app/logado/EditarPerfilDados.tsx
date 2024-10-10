import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { states } from '../../utils/form/states';
import { genders } from '../../utils/form/genders';
import { schema } from '../../utils/form/schemaUser';

import { UserPhoto } from '../../components/userPhoto';
import { Input } from '../../components/form/input';
import { Select } from '../../components/form/select';
import { Button } from '../../components/form/button';
import DatePicker from '../../components/form/datePicker';
import { Loading } from '../../components/form/loading';
import { RFValue } from 'react-native-responsive-fontsize';
import { PasswordInput } from '../../components/form/passwordInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function EditarPerfilDados() {
  const navigation = useNavigation();

  // Estados
  const [userPhoto, setUserPhoto] = useState(require('../../assets/images/perfilFotoDefault.png'));
  const [editableBoolean, setEditableBoolean] = useState(false);
  const [titleButtonEdit, setTitleButtonEdit] = useState('Editar');
 
  const { control, setValue, getValues, handleSubmit, formState: { errors }} = useForm({
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

  const [loading, setLoading] = useState(true); // Estado de carregamento
  
  const data = getValues();

  // Função para buscar os dados do perfil
  const fetchPerfilData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      console.log("Token encontrado:", token); // Log do token

      const response = await fetch('http://apiamigodesangue.ddns.net/api/perfil', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Status da resposta:", response.status); 

      if (response.ok) {
        const data = await response.json();

        setValue('nomeUsuario', data.nome || '');
        setValue('dataNascUsuario', data.data_nascimento || '');
        setValue('numTelefone', data.telefone || '');
        setValue('generoUsuario', data.genero || '');
        setValue('emailUsuario', data.email || '');
        setValue('cpfUsuario', data.cpf || '');
        setValue('logUsuario', data.logradouro || '');
        setValue('numLogUsuario', data.numero_logradouro || '');
        setValue('compUsuario', data.complemento || '');
        setValue('bairroUsuario', data.bairro || '');
        setValue('cidadeUsuario', data.cidade || '');
        setValue('estadoUsuario', data.estado || '');
        setValue('cepUsuario', data.cep || '');
        setValue('rgUsuario', data.rg || '');

        console.log("Dados recebidos e aplicados:", data); 

      } else {
        Alert.alert("Erro", "Falha ao carregar os dados do perfil. Redirecionando para o login.");
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro inesperado. Verifique sua conexão.");
      console.error("Erro ao buscar dados do perfil:", error); // Log do erro
      navigation.navigate('Login');
    } finally {
      setLoading(false); // Carregamento finalizado
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          console.log("Token não encontrado, redirecionando para login.");
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });  // Reinicia a navegação para a tela de login
        } else {
          await fetchPerfilData();
        }
      } catch (error) {
        console.log('Erro ao verificar token:', error);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    };
  
    checkAuth();
  }, []);

  // Selecionar foto do usuário
  const handleUserPhotoSelect = async () => {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });
    if (!photoSelected.canceled) {
      setUserPhoto(photoSelected.assets[0].uri);
    }
  };

  // Função para salvar os dados
  const handleSaveUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      console.log("Token usado para autenticação:", token);

      const response = await fetch('http://179.63.40.44:8000/api/usuario/update', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data)
      if (response.ok) {
        navigation.navigate('Login'); // Redirecionar para a tela de login
        Alert.alert("Sucesso", "Dados atualizados com sucesso.");
      } else {
        Alert.alert("Erro", "Falha ao atualizar os dados.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar os dados.");
    }
  };

  //Função para "deletar" usuário
  const handleDeleteUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      console.log("Token usado para autenticação:", token);

      const response = await fetch('http://179.63.40.44:8000/api/usuario/delete', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "statusUsuario" : "arquivado"
        }
        ),
      });
      console.log(data)
      if (response.ok) {
        // Limpar o AsyncStorage
        await AsyncStorage.clear();
        Alert.alert('Sucesso', 'Usuário arquivado e deslogado com sucesso.');
        navigation.navigate('Login'); // Redirecionar para a tela de login
      } else {
        Alert.alert("Erro", "Falha ao deletar usuario.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao deletar usuario.");
    }
  }

  if (loading) {
    return <Loading/>;
  }

  const handleLogout = async () => {
    try {
      // Limpar o token do AsyncStorage
      await AsyncStorage.removeItem('token');
      
      
      navigation.navigate('Login');
  
      Alert.alert("Logout", "Você foi desconectado com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao tentar sair.");
      console.log(error)
    }
  };

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

  return (
    <View className="bg-white flex-1">
      <ScrollView className="pb-8">
        <View className="flex-1 items-center justify-center w-full h-full">
          <UserPhoto variant="profile" source={{ uri: userPhoto.toString() }} alt="Imagem do usuário" />
          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text className='text-black font-medium'
              style={{
                fontSize: RFValue(13),
                marginTop: RFValue(5)
              }}
            >Alterar foto</Text>
          </TouchableOpacity>
        </View>
        <View className='justify-start flex-1 w-full bg-white'>
            <ScrollView>
              <Text className='text-blueTheme-700 font-semibold'
                style={{
                  fontSize: RFValue(18),
                  marginBottom: RFValue(4),
                  marginTop: RFValue(20),
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
                        visible={true}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                      {errors.nomeUsuario && <Text className='color-red-600 self-start ml-10'>{errors.nomeUsuario?.message}</Text>}
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
                        visible={true}
                        value={value}
                        onChangeText={onChange}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                      {errors.numTelefone && <Text className='color-red-600 self-start ml-10'>{errors.numTelefone?.message}</Text>}
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
                        <DatePicker
                          text="Data de Nascimento"
                          visible={true}
                          editable={true}
                          value={dateValue}
                          onChange={(selectedDate) => onChange(selectedDate.toISOString())} 
                        />
                      );
                    }}
                  />
                  <Controller
                    control={control}
                    name="generoUsuario"
                    render={({ field: { onChange, value } }) => (
                      <Select
                        variant="view20"
                        text="Sexo"
                        utilImport={genders}
                        onSelect={(sigla) => onChange(sigla)} 
                        visible={true}
                        editable={true}
                        selectedValue={value} 
                      />
                    )}
                  />
                </View>

                <View className='flex-row'>
                  {errors.dataNascUsuario && <Text className='color-red-600 self-start ml-10'>{errors.dataNascUsuario?.message}</Text>}
                  {errors.generoUsuario && 
                    <Text className='color-red-600 self-start'
                      style={{
                        marginLeft: RFValue(108)
                      }}
                    >{errors.generoUsuario?.message}</Text>
                  }
                </View>

                <Controller
                    control={control}
                    name='cpfUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        text='CPF'
                        visible={true}
                        value={value.toString()}
                        onChangeText={onChange}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                    )}
                />
                {errors.cpfUsuario && <Text className='color-red-600 self-start ml-10'>{errors.cpfUsuario?.message}</Text>}

                <Controller
                    control={control}
                    name='rgUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        text='RG'
                        visible={true}
                        value={value.toString()}
                        onChangeText={(text) => onChange(Number(text))}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                    )}
                />
                {errors.rgUsuario && <Text className='color-red-600 self-start ml-10'>{errors.rgUsuario?.message}</Text>}
              
                <Text className='text-blueTheme-700 font-semibold'
                  style={{
                    fontSize: RFValue(18),
                    marginBottom: RFValue(4),
                    marginTop: RFValue(20),
                    marginHorizontal: RFValue(30)
                  }}
                >Endereço</Text>
                <View className='flex-row items-end'>
                  <Controller
                      control={control}
                      name='cepUsuario'
                      render={({field: {onChange, onBlur, value}}) => (
                        <Input
                          text='CEP'
                          visible={true}
                          value={value}
                          onChangeText={(text) => {
                            if (text.length === 8) {
                              const cep = text.replace(/\D+/g, '');
                              onChange(cep)
                              buscarCep(cep);
                            }
                          }}
                          onBlur={onBlur}
                        />
                      )}
                  />
                </View>
                {errors.cepUsuario && <Text className='color-red-600 self-start ml-10'>{errors.cepUsuario?.message}</Text>}

                <Controller
                  control={control}
                  name='logUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      text='Rua'
                      visible={true}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                {errors.logUsuario && <Text className='color-red-600 self-start ml-10'>{errors.logUsuario?.message}</Text>}

                <View className='flex-row justify-start'>
                <Controller
                    control={control}
                    name='numLogUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        variant='input20'
                        text='Nº'
                        visible={true}
                        value={value.toString()}
                        onChangeText={(text) => onChange(Number(text))}
                        keyboardType='numeric'
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name='estadoUsuario'
                    render={({field: {onChange, value}}) => (
                      <Select
                        utilImport={states}
                        variant='view40'
                        onSelect={(sigla) => {
                          onChange(sigla); 
                        }}
                        text='Estado'
                        visible={true}
                        editable={true}
                        selectedValue={value}
                      />
                    )}
                  />
                </View>
                <View className='flex-row'>
                  {errors.numLogUsuario && <Text className='color-red-600 self-start ml-10'>{errors.numLogUsuario?.message}</Text>}
                  {errors.estadoUsuario && 
                    <Text className='color-red-600 self-start'
                      style={{
                        marginLeft: RFValue(60)
                      }}
                    >{errors.estadoUsuario?.message}</Text>
                  }
                </View>
                <Controller
                    control={control}
                    name='compUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        text='Complemento'
                        visible={true}
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
                    <Input
                      text='Bairro'
                      visible={true}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                {errors.bairroUsuario && <Text className='color-red-600 self-start ml-10'>{errors.bairroUsuario?.message}</Text>}

                <Controller
                    control={control}
                    name='cidadeUsuario'
                    render={({field: {onChange, onBlur, value}}) => (
                      <Input
                        text='Cidade'
                        visible={true}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                      />
                    )}
                />
                {errors.cidadeUsuario && <Text className='color-red-600 self-start ml-10'>{errors.cidadeUsuario?.message}</Text>}
                <Text className='text-blueTheme-700 font-semibold'
                  style={{
                    fontSize: RFValue(18),
                    marginBottom: RFValue(4),
                    marginTop: RFValue(20),
                    marginHorizontal: RFValue(30)
                  }}
                >Email e senha</Text>
              <Controller
                  control={control}
                  name='emailUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      text='Email'
                      visible={true}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='email-address'
                      onBlur={onBlur}
                    />
                  )}
              />
              {errors.emailUsuario && <Text className='color-red-600 self-start ml-10'>{errors.emailUsuario?.message}</Text>}
              
              <Controller
                  control={control}
                  name='senhaUsuario'
                  render={({field: {onChange, onBlur, value}}) => (
                    <PasswordInput
                      text='Senha'
                      visible={true}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
              />
              {errors.senhaUsuario && <Text className='color-red-600 self-start ml-10'>{errors.senhaUsuario?.message}</Text>}

              <Controller
                  control={control}
                  name='passwordConfirmation'
                  render={({field: {onChange, onBlur, value}}) => (
                    <PasswordInput
                      text='Confirme a senha'
                      visible={true}
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                    />
                  )}
              />
              {errors.passwordConfirmation && <Text className='color-red-600 self-start ml-10'>{errors.passwordConfirmation?.message}</Text>}

            </ScrollView>
          </View>
          <View className="flex-row mt-10 justify-evenly mb-20">
            <Button
              text="Salvar"
              variant="Editar"
              onPress={handleSubmit(handleSaveUser)}
            />
          </View>

        <View className='mb-10'>
            <Button
              text='Sair da Conta'
              variant='Danger'
              onPress={handleLogout}
            />
            <Button
              text=' Excluir Conta '
              variant='Danger'
              onPress={handleDeleteUser}
            />
          </View>

      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  );
}