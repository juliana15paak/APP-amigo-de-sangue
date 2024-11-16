import React, { useState, useEffect, useRef, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Text, TextInput, ActivityIndicator, Alert, FlatList } from 'react-native';
import { StatusBar } from 'react-native';

import { Button } from '../../components/form/button';
import { Loading } from '../../components/form/loading';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { HeaderFeed } from '../../components/feed/headerFeed';
import Ionicons from '@expo/vector-icons/Ionicons';

interface data {
  nomeUsuario: string;
  dataNascUsuario: string; 
  numTelefone: string;
  generoUsuario: string;
  emailUsuario: string;
  senhaUsuario: string;
  cpfUsuario: string;
  logUsuario: string;
  numLogUsuario: string;
  compUsuario: string;
  bairroUsuario: string;
  cidadeUsuario: string;
  estadoUsuario: string;
  cepUsuario: string;
  rgUsuario: string;
  descTipoSanguineo: string;
  statusUsuario: string;
}

export function Perfil() {
  const navigation = useNavigation();
  const [data, setData] = useState<data | null>(null);
  const [loading, setLoading] = useState(true); 
  
  const [tDoacaoUsuario, setTDoacaoUsuario] = useState('');
  const [ultimaDoacao, setUltimaDoacao] = useState(null);
  const [proximaDoacao, setProximaDoacao] = useState('');

  const flatListRef = useRef<FlatList>(null); 

  useEffect(() => {
    const pegarDados = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch('http://179.63.40.44:8000/api/usuario/retornar/total-doacoes', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token},`
          },
        });

        console.log("Status da resposta:", response.status);

        if (response.ok) {
          const data = await response.json();

          console.log(data);
          setTDoacaoUsuario(data.totalDoacoes);

        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      } 
    }

    const calcProximaDoacao = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const response = await fetch('http://179.63.40.44:8000/api/usuario/retornar/ultima-doacao', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        });

        console.log("Status da resposta:", response.status);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          if (data.ultimaDoacao && isDateValid(data.ultimaDoacao)) {
            setUltimaDoacao(data.ultimaDoacao);
            calcularProximaDoacao(data.ultimaDoacao);
        } else {
            setProximaDoacao("Disponível");
            
        }
        }
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      } finally {
        setLoading(false); // Define isLoading como falso após o carregamento dos dados
      }
    }

    pegarDados()
    calcProximaDoacao()
  }, [])


  const isDateValid = (dateString: string) => {
    const date = new Date(dateString);
    return !isNaN(date.getTime()); // Verifica se é uma data válida
};


  const calcularProximaDoacao = (dataUltimaDoacao: any) => {
    const diasIntervalo = 90; // Exemplo: 90 dias para nova doação
    const ultimaData = new Date(dataUltimaDoacao);
    ultimaData.setDate(ultimaData.getDate() + diasIntervalo);

    const hoje = new Date();
    const diasRestantes = Math.ceil((ultimaData.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diasRestantes > 0) {
        setProximaDoacao(`${diasRestantes} dias`);
    } else {
        setProximaDoacao("Disponível");
    }
};

  // Função para buscar os dados do perfil
  const fetchPerfilData = useCallback(async () => {
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
        setData(data);
        console.log("Dados recebidos", data); 

      } else {
        Alert.alert("Erro", "Falha ao carregar os dados do perfil. Redirecionando para o login.");
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro inesperado. Verifique sua conexão.");
      console.error("Erro ao buscar dados do perfil:", error); 
      navigation.navigate('Login');
    } finally {
      setLoading(false); 
    }
  }, [navigation]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          console.log("Token não encontrado, redirecionando para login.");
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });  
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


  const userInfo = [
    { label: 'Nome', value: data?.nomeUsuario ?? '' },
    { label: 'Data de Nascimento', value: data?.dataNascUsuario ?? '' },
    { label: 'Telefone', value: data?.numTelefone ?? '' },
    { label: 'Sexo', value: data?.generoUsuario ?? '' },
    { label: 'Email', value: data?.emailUsuario ?? '' },
    { label: 'CPF', value: data?.cpfUsuario ?? '' },
    { label: 'Rua', value: data?.logUsuario ?? '' },
    { label: 'Número', value: data?.numLogUsuario ?? '' },
    { label: 'Complemento', value: data?.compUsuario ?? '' },
    { label: 'Bairro', value: data?.bairroUsuario ?? '' },
    { label: 'Cidade', value: data?.cidadeUsuario ?? '' },
    { label: 'Estado', value: data?.estadoUsuario ?? '' },
    { label: 'CEP', value: data?.cepUsuario ?? '' },
    { label: 'RG', value: data?.rgUsuario ?? '' },
    { label: 'Tipo Sanguíneo', value: data?.descTipoSanguineo ?? '' },
    { label: 'Status', value: data?.statusUsuario ?? '' },
  ].filter(item => item.value);

  if (loading) {
    return <Loading/>;
  }

  return (
    <View className="bg-white flex-1">
        <HeaderFeed />
        <View className='justify-start items-center'
          style={{
            marginTop: RFValue(-310),
            marginBottom: RFValue(-15)
          }}
        >
          <Text className="font-semibold" style={{
            fontSize: 18,
          }}>{data?.nomeUsuario ? data.nomeUsuario.charAt(0).toUpperCase() + data.nomeUsuario.slice(1).toLowerCase(): ''}</Text>
          <View className='flex-row'>
            <Ionicons name="location-sharp" size={RFValue(16)} color="gray" style={{marginTop: RFValue(3)}}/>
            <Text className='font-semibold' style={{ marginLeft: RFValue(5), color: "#737373", fontSize: RFValue(16) }}>
              {data?.cidadeUsuario}, 
            </Text>
            <Text className='font-semibold' style={{ marginLeft: RFValue(5), color: "#737373", fontSize: RFValue(16) }}>
              {data?.estadoUsuario}
            </Text>
          </View>
        </View>

        <View className='flex-row justify-evenly' style={{
          marginTop: RFValue(25)
        }}>
          <View className='justify-center items-center'>
            <Text className='text-blueTheme-700 font-semibold' style={{
              fontSize: RFValue(18)
            }}>{tDoacaoUsuario}</Text>
            <Text className='text-black font-regular' style={{
              fontSize: RFValue(12)
            }}>Doações</Text>
          </View>
          <View className='justify-center items-center'>
            <Text className='text-blueTheme-700 font-semibold' style={{
              fontSize: RFValue(18)
            }}>{proximaDoacao}</Text>
            <Text className='text-black font-regular' style={{
              fontSize: RFValue(12)
            }}>Próxima doação</Text>
          </View>
          <View className='justify-center items-center'>
            <Text className='text-blueTheme-700 font-semibold' style={{
              fontSize: RFValue(18)
            }}>{data?.statusUsuario ? data.statusUsuario.charAt(0).toUpperCase() + data.statusUsuario.slice(1).toLowerCase(): ''}</Text>
            <Text className='text-black font-regular' style={{
              fontSize: RFValue(12)
            }}>Status</Text>
          </View>

        </View>

          <View className='flex-row justify-evenly' style={{
            marginTop: RFValue(22),
            marginBottom: RFValue(10)
          }}>
            <Text className='text-blueTheme-700 font-semibold'
              style={{
                fontSize: RFValue(18),
              }}
            >Dados Pessoais</Text>
            <View className='bg-blueTheme-600 justify-center items-center' style={{
              borderRadius: RFValue(8), 
              paddingHorizontal: RFValue(30),
            }}>
              <TouchableOpacity onPress={() => navigation.navigate('EditarPerfilDados')}>
                <Text className='text-white font-semibold' style={{
                  fontSize: RFValue(14),
                  marginTop: RFValue(2)
                }}>Editar Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className='flex-1 justify-center'
            style={{
              marginBottom: RFValue(10)
            }}
          >
            <FlatList
              ref={flatListRef}
              showsVerticalScrollIndicator= {false}
              data={userInfo}
              renderItem={({ item }: { item: { label: string; value: string } }) => (
                <View style={{ marginLeft: RFValue(24) }}>
                  <Text className='font-medium text-blueTheme-700'
                    style={{
                      fontSize: RFValue(14),
                      marginTop: RFValue(4),
                    }}
                  >
                    {item.label}:
                  </Text>
                  <Text className='font-regular'
                    style={{
                      fontSize: RFValue(13),
                    }}
                  >
                    {item.value.toString()}
                  </Text>
                </View>
              )}
              keyExtractor={(item) => item.label}
              removeClippedSubviews={false}
              contentContainerStyle={{ paddingHorizontal: RFValue(8) }}
            />
          </View>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
    </View>
  );
}