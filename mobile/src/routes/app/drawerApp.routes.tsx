import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import TabRoutes from '../auth/tab.routes';
import { RFValue } from 'react-native-responsive-fontsize';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Perfil } from '@/src/app/logado/perfil';
import { EditarPerfilDados } from '@/src/app/logado/editarPerfilDados';
import StackAppRoutes from './stackApp.routes';

const Drawer = createDrawerNavigator();

export default function DrawerAppRoutes(){
    const navigation = useNavigation();

    const [userData, setUserData] = useState({
        nomeUsuario: '',
        cidade: '',
        estado: ''
    })

    const handleLogout = async () => {
        try {
        await AsyncStorage.removeItem('token');
        
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    
        Alert.alert("Logout", "Você foi desconectado com sucesso.");
        } catch (error) {
        Alert.alert("Erro", "Ocorreu um erro ao tentar sair.");
        console.log(error)
        }
    };

    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={{
                        borderBottomWidth: RFValue(1),
                        borderColor: '#EFEFEF',
                        paddingVertical: RFValue(10),
                        paddingHorizontal: RFValue(20),
                        marginBottom: RFValue(15),
                    }}>
                        <Text className='font-semibold' style={{fontSize: RFValue(16)}}>Menu</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', paddingBottom: RFValue(25) }}>
                        <TouchableOpacity 
                            onPress={() => {
                                props.navigation.navigate('PerfilOculto');
                            }}
                            style={{ 
                                paddingTop: RFValue(10),
                                paddingLeft: RFValue(19), 
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                            {/* <UserPhoto variant='menu'/> */}
                            <View>
                                <Text className='font-semibold' style={{ marginLeft: RFValue(12), color: "black", fontSize: RFValue(13) }}>
                                    {userData.nomeUsuario}
                                </Text>
                                <View className='flex-row'>
                                    <Ionicons name="location-sharp" size={RFValue(14)} color="gray" style={{ marginLeft: RFValue(12) }}/>
                                    <Text className='font-regular' style={{ marginLeft: RFValue(5), color: "black", fontSize: RFValue(12) }}>
                                        {userData.cidade}, 
                                    </Text>
                                    <Text className='font-regular' style={{ marginLeft: RFValue(5), color: "black", fontSize: RFValue(12) }}>
                                        {userData.estado}
                                    </Text>
                                </View>
                            </View>
                            <AntDesign
                                name="right"
                                size={18}
                                className='justify-start items-start'
                                style={{
                                    width: RFValue(26),
                                    height: RFValue(26),
                                    marginLeft: RFValue(25),
                                    marginTop: RFValue(3)
                                }}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                    <DrawerItemList {...props} />
                    <TouchableOpacity onPress={handleLogout}
                        style={{ 
                            paddingTop: RFValue(10),
                            paddingLeft: RFValue(19), 
                            alignItems: 'center',
                            flexDirection: 'row',
                        }}>
                        <MaterialIcons name="logout" size={RFValue(20)} color="#ED1C24" />
                        <Text style={{ marginLeft: RFValue(20), color: "#ED1C24", fontSize: RFValue(13), fontWeight: 'bold' }}>
                            Sair
                        </Text>
                    </TouchableOpacity>
                </DrawerContentScrollView>
            )}
        >
            <Drawer.Screen name="Home" component={TabRoutes}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({focused, size}) => <Ionicons name="home" style={{marginLeft:RFValue(2), marginRight:RFValue(-4)}} size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
            />
            <Drawer.Screen name="Hemocentros" component={TabRoutes}
                options={{
                    drawerLabel: 'Hemocentros',
                    drawerIcon: ({focused, size}) => <Feather name="search" style={{marginLeft:RFValue(2), marginRight:RFValue(-4)}} size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                      e.preventDefault();
                      navigation.navigate('Home', { screen: 'Hemocentros' });
                    },
                })}
            />
            <Drawer.Screen name="Carteirinha" component={TabRoutes}
                options={{
                    drawerLabel: 'Carteirinha',
                    drawerIcon: ({focused, size}) => <AntDesign name="idcard" style={{marginLeft:RFValue(2), marginRight:RFValue(-4)}} size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                      e.preventDefault();
                      navigation.navigate('Home', { screen: 'Carteirinha' });
                    },
                })}
            />
            <Drawer.Screen name="Histórico" component={TabRoutes}
                options={{
                    drawerLabel: 'Histórico de doações',
                    drawerIcon: ({focused, size}) => <MaterialCommunityIcons name="clipboard-text-clock-outline" size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                    headerShown:true,
                    headerStyle: {backgroundColor:'#f8fafc'}
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                      e.preventDefault();
                      navigation.navigate('Home', { screen: 'Histórico' });
                    },
                })}
            />
             <Drawer.Screen name="Curiosidades" component={TabRoutes}
                options={{
                    drawerIcon: ({focused, size}) => <Ionicons name="help-circle-outline" size={size} color={focused? "#00a495": "black"}/>,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                      e.preventDefault();
                      navigation.navigate('Home', { screen: 'Informacoes' });
                    },
                })}
            />
            <Drawer.Screen 
                name="PerfilOculto" 
                component={StackAppRoutes}
                options={{
                    drawerLabel: () => null, 
                    drawerIcon: () => null, 
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                      e.preventDefault();
                      navigation.navigate('StackAppRoutes', {screen: 'Perfil'});
                    },
                })}
            />
        </Drawer.Navigator>
    )
}