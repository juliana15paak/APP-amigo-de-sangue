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
import { HeaderFeed } from '@/src/components/feed/headerFeed';

export function EditarPerfilDados() {
  const navigation = useNavigation();
 
  const { control, setValue, getValues, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      senhaUsuario: '',
    }
  })

  const [loading, setLoading] = useState(true); // Estado de carregamento
  
  const data = getValues();

  // Função para buscar os dados do perfil
  const fetchPerfilData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
      });
        return;
      }

      console.log("Token encontrado:", token); // Log do token

      const response = await fetch('http://179.63.40.44:8000/api/usuario/perfil', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Status da resposta:", response.status); 

      if (response.ok) {
        const data = await response.json();

        setValue('senhaUsuario', data.senhaUsuario || '');

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

  // Função para salvar os dados
  const handleSaveUser = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
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
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });// Redirecionar para a tela de login
        Alert.alert("Sucesso", "Dados atualizados com sucesso.");
      } else {
        Alert.alert("Erro", "Falha ao atualizar os dados.");
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao salvar os dados.");
    }
  };


  if (loading) {
    return <Loading/>;
  }

  return (
    <View className="bg-white flex-1">
      <HeaderFeed/>
      <ScrollView className="pb-8">
        <View className='justify-start flex-1 w-full bg-white'
          style={{
            marginTop: RFValue(3)
          }}
        >
            <ScrollView>
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

      </ScrollView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  );
}