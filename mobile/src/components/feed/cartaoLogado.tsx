import { ActivityIndicator, Text, View } from 'react-native';
import { UserPhoto } from '../userPhoto';
import Ionicons from '@expo/vector-icons/Ionicons';
import clsx from "clsx";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from '../form/loading';

export function CartaoLogado() {
  
  const [cartaoLoading, setCartaoLoading] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [cidadeUsuario, setCidadeUsuario] = useState('');
  const [estadoUsuario, setEstadoUsuario] = useState('');
  const [statusUsuario, setStatusUsuario] = useState('');
  const [tDoacaoUsuario, setTDoacaoUsuario] = useState('');
  const [ultimaDoacao, setUltimaDoacao] = useState(null);
  const [proximaDoacao, setProximaDoacao] = useState('');
  const [userPhoto, setUserPhoto] = useState(require('../../assets/images/perfilFotoDefault.png'));

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
          setNomeUsuario(data.usuario.nomeUsuario);
          setCidadeUsuario(data.usuario.cidadeUsuario);
          setEstadoUsuario(data.usuario.estadoUsuario);
          setStatusUsuario(data.usuario.statusUsuario);
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
        setCartaoLoading(false); // Define isLoading como falso após o carregamento dos dados
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
  
  if(cartaoLoading){
    return <Loading/>;
  }

  return (
    <View 
      className='flex-1 shadow-2xl shadow-slate-900 bg-white rounded-3xl justify-between items-center self-center'
      style={{
        marginTop: RFPercentage(-12),
        paddingHorizontal: RFValue(15),
        width: RFPercentage(42),
      }}
    >
      <View className='flex-row justify-end'>
        <UserPhoto variant="cartao" source={{ uri: userPhoto.toString() }} alt="Imagem do usuário" />
        <View 
          className='items-start'
          style={{
            marginLeft: RFValue(5),
            paddingVertical: RFValue(14),
            paddingHorizontal: RFValue(12),
            width: '60%',
          }}
        >
          <Text 
            className='font-medium'
            style={{
              fontSize: RFValue(14),
              marginRight: RFValue(10),
            }}
          >
            Bem Vindo,
          </Text>
          <Text 
            className='font-semibold'
            style={{
              fontSize: RFValue(13),
              marginRight: RFValue(0),
            }}
          >
            {nomeUsuario}
          </Text>
          <View className='flex-row'>
            <Ionicons name="location-sharp" size={RFValue(14)} color="gray" />
            <Text 
              className='font-regular text-center ml-1'
              style={{
                fontSize: RFValue(12),
                marginLeft: RFValue(4),
              }}
            >
              {cidadeUsuario}, {estadoUsuario}
            </Text>
          </View>
        </View>

        <View 
          className={clsx('self-end py-1 px-4 rounded-lg', {
            "bg-green-600": statusUsuario == "ativo",
            "bg-red-500": statusUsuario == "inativo",
          })}
          style={{
            marginRight: RFValue(-40),
            marginBottom: RFValue(48)
          }}
        >
          <Text 
            className='text-white font-semibold'
            style={{ 
              fontSize: RFValue(13),
              textTransform: 'uppercase'
             }}
          >
            {statusUsuario}
          </Text>
        </View>
      </View>

      <View 
        className='flex-row'
        style={{ marginHorizontal: RFValue(24) }}
      >
        <View style={{ marginRight: RFValue(12) }}>
          <Text 
            className='font-medium'
            style={{ fontSize: RFValue(12) }}
          >
            Total de Doações
          </Text>
          <Text 
            className='text-red-600 font-semibold text-center'
            style={{
              fontSize: RFValue(16),
              marginBottom: RFValue(8),
              marginTop: RFValue(5)
            }}
          >
            {tDoacaoUsuario}
          </Text>
        </View>

        <View style={{ marginLeft: RFValue(12) }}>
          <Text 
            className='font-medium'
            style={{ fontSize: RFValue(12) }}
          >
            Próxima Doação em
          </Text>
          <Text 
            className='text-emerald-600 text-center font-semibold'
            style={{
              fontSize: RFValue(16),
              marginBottom: RFValue(8),
              marginTop: RFValue(5)
            }}
          >
            {proximaDoacao}
          </Text>
        </View>
      </View>
    </View>
  );
}
