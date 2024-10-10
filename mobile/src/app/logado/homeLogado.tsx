import { View, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Header } from "../../components/form/header";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Campanha } from "../../components/feed/campanha";
import { FeedHemocentros } from "../../components/feed/feedHemocentros";
import { CartaoLogado } from "../../components/feed/cartaoLogado";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Loading } from "@/src/components/form/loading";

interface cardDataProps {
  nomeUsuario: string,
  cidadeUsuario: string,
  estadoUsuario: string,
  totalDoacoes: string,
  proximaDoacao: string,
  tipoSanguineo: tipoSanguineoProps
}

type tipoSanguineoProps = 'O+' | 'O-' | 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'N/A';

export default function HomeLogado() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true); 

  const [cardData, setCardData] = useState<cardDataProps>({
    nomeUsuario: '',
    cidadeUsuario: '',
    estadoUsuario: '',
    totalDoacoes: '',
    proximaDoacao: '',
    tipoSanguineo: 'N/A'
  });

  const fetchPerfilData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        navigation.navigate('Login');
        return;
      }

      console.log("Token encontrado:", token); 

      const response = await fetch('http://apiamigodesangue.ddns.net/api/perfil', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      console.log("Status da resposta:", response.status); 

      if (response.ok) {
        const data = await response.json();
        setCardData(data);
        console.log("Dados recebidos e aplicados:", data); 

      } else {
        Alert.alert("Erro", "Falha ao carregar os dados do perfil. Redirecionando para o login.");
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro inesperado. Verifique sua conexão.");
      console.error("Erro ao buscar dados do perfil:", error); 
      navigation.navigate('Login');
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <Loading/>;
  }

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

  return (
    <View className="flex-1 justify-start bg-white">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <ScrollView>
      <Header>
          <View
            className="flex-row justify-between items-center"
            style={{
              marginHorizontal: RFValue(20),
              marginTop: RFValue(40),
              marginBottom: RFValue(100),
            }}
          >
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialIcons
                name="menu"
                size={RFValue(28)}
                color="white"
                style={{
                  marginTop: RFValue(-6),
                }}
              />
            </TouchableOpacity>
            <Image
              style={{
                height: RFPercentage(7),
                width: RFPercentage(20),
                marginTop: RFValue(-5)
              }}
              source={require('../../assets/images/Logos/LogoAppTextoIconeBranco.png')}
              resizeMode='contain'
            />
            <TouchableOpacity
              style={{
                marginBottom: RFValue(16),
              }}
            >
              <MaterialIcons
                name="notifications"
                size={RFValue(28)}
                color="white"
                style={{
                  marginTop: RFValue(6),
                }}
              />
            </TouchableOpacity>
          </View>
        </Header>
        <CartaoLogado
          text={cardData.nomeUsuario}
          tipoSanguineo={cardData.tipoSanguineo}
          estado={cardData.estadoUsuario}
          cidade={cardData.cidadeUsuario}
          totalDoacoes={cardData.totalDoacoes}
          proximaDoacao={cardData.proximaDoacao}
        />
        <Campanha />
        <FeedHemocentros />
      </ScrollView>
    </View>
  );
}
