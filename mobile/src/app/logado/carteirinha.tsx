import React, { useEffect, useState } from 'react';
import { View, Image, Text, StatusBar, ScrollView, ImageBackground } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import * as ScreenOrientation from 'expo-screen-orientation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { dadosDoador } from '../../utils/feed/carteirinha'

export type ItemProps = {
  id: string,
  nomeUsuario: string,
  dataNascUsuario: string,
  codDoador: string,
  proximaDoacao: string,
  dataUltimaDoacao: string,
  tipoSanguineo: string,
  observacoes: string
};

export function Carteirinha() {
  const [dadosCarteirinha, setDadosCarteirinha] = useState<ItemProps>({
    id: '',
    nomeUsuario: '',
    dataNascUsuario: '',
    codDoador: '',
    proximaDoacao: '',
    dataUltimaDoacao: '',
    tipoSanguineo: '',
    observacoes: ''
  })

  const [orientation, setOrientation] = useState<ScreenOrientation.Orientation>(ScreenOrientation.Orientation.PORTRAIT_UP);

  useEffect(() => {
    ScreenOrientation.unlockAsync();

    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };
  }, []);

  const getOrientation = async () => {
    try {
      const orientationInfo = await ScreenOrientation.getOrientationAsync();
      setOrientation(orientationInfo); 
    } catch (error) {
      console.log('Erro ao obter a orientação:', error);
    }
  };

  useEffect(() => {
    getOrientation(); 

    const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
      setOrientation(event.orientationInfo.orientation); 
    });

    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  const isPortrait =
    orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
    orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN;


  const [corCapa, setCorCapa] = useState(true)
  function handleCorCapa(){
    setCorCapa(!corCapa)
  } 

  function handleOrientation() {
    if (isPortrait) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    }
  }

  return (
    <View className='bg-white flex-1 justify-center items-center'>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
        <ImageBackground
          style={{
            width: isPortrait ? RFPercentage(60) : RFPercentage(105),
            height: isPortrait ? RFPercentage(102) : RFPercentage(55),
          }}
          source={corCapa ? require('../../assets/images/CapasCarteirinha/1.png') : require('../../assets/images/CapasCarteirinha/2.png')}
          defaultSource={corCapa ? require('../../assets/images/CapasCarteirinha/1.png') : require('../../assets/images/CapasCarteirinha/2.png')}
          resizeMode="cover" 
        >
        {isPortrait ? (
        <ScrollView>
            <View className='flex-row items-center justify-center'>
              <MaterialCommunityIcons onPress={handleOrientation} name="phone-rotate-landscape" size={24} color="white" 
                style={{
                  marginRight: RFValue(70),
                  marginBottom: RFValue(50)
                }}
              />
              <Image className='self-center'
                style={{
                  height: RFPercentage(7),
                  width: RFPercentage(20),
                  marginBottom: RFValue(80),
                  marginLeft: RFValue(0),
                  marginTop: RFValue(50)
                }}
                source={require('../../assets/images/Logos/LogoAppTextoIconeBranco.png')}
                defaultSource={require('../../assets/images/Logos/LogoAppTextoIconeBranco.png')}
                resizeMode="contain"
              />
              <MaterialIcons onPress={handleCorCapa} name="color-lens" size={24} color="white"
                style={{
                  marginLeft: RFValue(70),
                  marginBottom: RFValue(50)
                }}
              />
            </View>
            <View
              style={{
                height: RFValue(11),
                width: RFPercentage(60),
                backgroundColor: corCapa ? '#7d0c0c' : '#05616a',
              }}
            >
            </View>
            <View className='bg-white self-center justify-start'
                style={{
                    height: RFPercentage(100),
                    width: RFPercentage(58),
                }}
            >
                <View className='bg-white self-center shadow-slate-900 shadow-lg justify-center items-center'
                    style={{
                        borderRadius: RFPercentage(4),
                        marginTop: RFPercentage(-10),
                        height: RFPercentage(25),
                        width: RFPercentage(20),
                    }}
                >
                    <Text className='font-semibold self-center'
                      style={{
                        fontSize: RFValue(30),
                        marginTop: RFValue(8)
                      }}
                    >{dadosCarteirinha.tipoSanguineo}</Text>
                </View>

                <Text className='font-semibold self-center text-black'
                  style={{
                    fontSize: RFValue(14),
                    marginTop: RFValue(20)
                  }}
                >{dadosCarteirinha.nomeUsuario}</Text>

                <View
                  style={{
                    marginHorizontal:RFValue(24),
                    marginLeft: RFValue(22)
                  }}
                >
                  <View className='flex-row justify-around'
                    style={{
                      marginTop: RFValue(30)
                    }}
                  >
                    <View>
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Data de Nascimento</Text>
                      <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.dataNascUsuario}</Text>
                    </View>
                    <View>
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Código Doador</Text>
                        <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.codDoador}</Text>
                    </View>
                  </View>

                  <View className='flex-row justify-around items-center'
                    style={{
                      marginTop: RFValue(30),
                      marginLeft: RFValue(8)
                    }}
                  >
                    <View>
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Data da última doação</Text>
                      <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.dataUltimaDoacao}</Text>
                    </View>
                    <View>
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Próxima doação</Text>
                        <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.proximaDoacao}</Text>
                    </View>
                  </View>
                  <Text className='font-semibold self-center text-black'
                    style={{
                      fontSize: RFValue(13),
                      marginTop: RFValue(40)
                    }}
                  >{dadosCarteirinha.observacoes}</Text>
                </View>
                <Image className='self-center bg-black'
                  style={{
                    marginTop: RFValue(40),
                    marginBottom: RFValue(50),
                    width: RFPercentage(25),
                    height: RFPercentage(6),
                  }}
                  source={require('../../assets/images/codigo-de-barras.png')}
                  defaultSource={require('../../assets/images/codigo-de-barras.png')}
                />
            </View>
        </ScrollView>
        ) : (
        <View className='justify-center items-center flex-row'>
            <MaterialIcons className='self-start' onPress={handleCorCapa} name="color-lens" size={28} color="white"
              style={{
                marginTop: RFValue(50),
                marginRight: RFValue(-24),
              }}
            />
            <MaterialCommunityIcons className='self-end' onPress={handleOrientation} name="phone-rotate-portrait" size={24} color="white" 
              style={{
                marginRight: RFValue(24),
                marginBottom: RFValue(15)
              }}
            />
            <View className='bg-white self-center justify-center'
                style={{
                    marginTop: RFValue(35),
                    marginLeft: RFValue(40),
                    height: RFPercentage(45),
                    width: RFPercentage(80),
                    borderRadius: RFValue(20)
                }}
            >
              <View className='flex-row'>
                <View>
                  {corCapa ?
                  <Image className='self-start'
                    style={{
                      width: RFPercentage(6),
                      height: RFPercentage(6),
                      marginLeft: RFValue(20),
                      marginTop: RFValue(16),
                      marginBottom: RFValue(55)
                    }}
                    source={require('../../assets/images/Logos/IconeAmigoSangueVermelho.png')}
                    defaultSource={require('../../assets/images/Logos/IconeAmigoSangueVermelho.png')}
                    resizeMode="contain"
                  />
                  : 
                  <Image className='self-start'
                    style={{
                      width: RFPercentage(6),
                      height: RFPercentage(6),
                      marginLeft: RFValue(20),
                      marginTop: RFValue(16),
                      marginBottom: RFValue(55)
                    }}
                    source={require('../../assets/images/Logos/IconeAmigoSangueBranco.png')}
                    defaultSource={require('../../assets/images/Logos/IconeAmigoSangueBranco.png')}
                    resizeMode="contain"
                  />
                  }
                  
                  <View className='bg-white self-center shadow-slate-900 shadow-lg justify-center items-center'
                      style={{
                          borderRadius: RFPercentage(4),
                          marginLeft: RFPercentage(-8),
                          marginTop: RFValue(-25),
                          height: RFPercentage(20),
                          width: RFPercentage(25),
                      }}
                  >
                      <Text className='font-semibold self-center'
                        style={{
                          fontSize: RFValue(30),
                          marginTop: RFValue(8)
                        }}
                      >{dadosCarteirinha.tipoSanguineo}</Text>
                  </View>
                </View>
                <View className='items-start justify-center'
                  style={{
                    height: RFPercentage(45),
                    width: RFPercentage(63),
                  }}
                >
                  <Text className='font-semibold self-center text-black'
                    style={{
                      fontSize: RFValue(14),
                    }}
                  >{dadosCarteirinha.nomeUsuario}</Text>
                  <Text className='font-medium self-center text-black'
                    style={{
                      fontSize: RFValue(13),
                      marginBottom: RFValue(28)
                    }}
                  >Doador de Sangue</Text>
                  <View className='flex-row justify-around'
                    style={{
                      marginLeft: RFValue(40)
                    }}
                  >
                    <View 
                      style={{
                        marginLeft: RFValue(15),
                        marginBottom:RFValue(15),
                        marginRight: RFValue(15)
                      }}

                    >
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Data de Nascimento</Text>
                      <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.dataNascUsuario}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: RFValue(46),
                        marginBottom:RFValue(15),
                        marginRight: RFValue(15)
                      }}
                    >
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Código Doador</Text>
                        <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.codDoador}</Text>
                    </View>
                  </View>

                  <View className='flex-row justify-around'
                    style={{
                      marginLeft: RFValue(39)
                    }}
                  >
                    <View
                      style={{
                        marginLeft: RFValue(15),
                        marginBottom:RFValue(15),
                        marginRight: RFValue(15)
                      }}
                    >
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Data da última doação</Text>
                      <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.dataUltimaDoacao}</Text>
                    </View>
                    <View
                      style={{
                        marginLeft: RFValue(30),
                        marginBottom:RFValue(15),
                        marginRight: RFValue(15)
                      }}
                    >
                      <Text className='font-semibold self-center text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >Próxima doação</Text>
                        <Text className='font-medium self-start text-black'
                        style={{
                          fontSize: RFValue(13),
                        }}
                      >{dadosCarteirinha.proximaDoacao}</Text>
                    </View>
                  </View>
                  <Text className='font-semibold self-center text-black'
                    style={{
                      fontSize: RFValue(13),
                      marginBottom: RFValue(15)
                    }}
                  >{dadosCarteirinha.observacoes}</Text>
                
                  <Image className='self-center'
                    style={{
                      width: RFPercentage(25),
                      height: RFPercentage(6),
                    }}
                    source={require('../../assets/images/codigo-de-barras.png')}
                    defaultSource={require('../../assets/images/codigo-de-barras.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
        </ImageBackground>
    </View>
  );
}