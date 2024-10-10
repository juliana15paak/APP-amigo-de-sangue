import React, {useState} from 'react';
import { View, Image, Text, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Header } from '../components/form/header';
import { Input } from '../components/form/input';
import { Button } from '../components/form/button';
import { PasswordInput } from '../components/form/passwordInput';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default function Login() {
    const navigation = useNavigation();

    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const handleLogin = async() => {
        try{
            const response = await fetch('http://179.63.40.44:8000/api/usuario/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ emailUsuario, senhaUsuario}),
            });

            const result = await response.json();

            if(!response.ok){
                throw new Error(result.message || 'Login falhou');
            }

            //Armazenar token
            await AsyncStorage.setItem('token', result.token);


            Alert.alert('Sucesso ', 'Login realizado com sucesso!');

            navigation.navigate('HomeLogado');  
        } catch (error){
            const message = (error instanceof Error) ? error.message : 'Ocorreu um erro ao fazer login';
            Alert.alert('Erro', message);
        }
    }

  return (
    <View className='bg-red-600 flex-1'>
        <Header variant='header-form-white'>
            <AntDesign
                name="left"
                size={26}
                className='justify-start items-start'
                style={{
                    width: RFValue(26),
                    height: RFValue(26),
                    marginHorizontal: RFValue(20),
                    marginTop: RFValue(40)
                }}
                color="#ED1C24"
                onPress={()=>navigation.goBack()}
            />
            <Image className='self-center'
                source={require('../assets/images/Logos/LogoAppTextoIconeVermelho.png')}
                defaultSource={require('../assets/images/Logos/LogoAppTextoIconeVermelho.png')}
                resizeMode='contain'
                style={{
                    width: RFPercentage(18),
                    height: RFPercentage(9),
                    marginHorizontal: RFValue(28),
                    marginBottom: RFValue(20)
                }}
            />
            <Image
                source={require('../assets/images/Header/HeaderRed.png')}
                defaultSource={require('../assets/images/Header/HeaderRed.png')}
                resizeMode='contain'
            />
        </Header>

        <View className='flex-1 justify-start absolute bg-red-600 h-full w-full'
            style={{
                marginTop: RFPercentage(34)
            }}
        >
            <Text className='text-white font-semibold'
                style={{
                    fontSize: RFValue(18),
                    marginHorizontal: RFValue(40),
                    marginBottom: RFValue(4)
                }}
            >Login</Text>
            <View className='my-1'>
            <Input
                text='Email'
                variant='input100white'
                visible={true}
                keyboardType='email-address'
                value={emailUsuario}
                onChangeText={setEmailUsuario}
            />
            <PasswordInput
                text='Senha'
                variant='white'
                visible={true}
                value={senhaUsuario}
                onChangeText={setSenhaUsuario}
            />
            </View>
            <Button text='Login' variant='White' onPress={handleLogin}/>
            <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                <Text className='text-white text-base font-medium self-center'>Fazer Cadastro</Text>
            </TouchableOpacity>
        </View>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    </View>
  );
}