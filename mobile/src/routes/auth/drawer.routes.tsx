import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabRoutes from './tab.routes';
import Cadastro from '../../app/cadastro';
import Login from '../../app/login';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={{
                        borderBottomWidth: RFValue(1),
                        borderColor: '#EFEFEF',
                        paddingVertical: RFValue(10),
                        paddingHorizontal: RFValue(20),
                        marginBottom: RFValue(15)
                    }}>
                        <Text className='font-semibold' style={{fontSize: RFValue(16)}}>Menu</Text>
                    </View>
                    <DrawerItemList {...props} />
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
           <Drawer.Screen name="Cadastro" component={Cadastro}
                options={{
                    drawerLabel: 'Cadastrar',
                    drawerIcon: ({focused, size}) => <FontAwesome name="user-plus" style={{marginLeft:RFValue(2), marginRight:RFValue(-8)}} size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                    headerShown:true,
                    headerStyle: {backgroundColor:'#f8fafc'}
                }}
            />
            <Drawer.Screen name="Login" component={Login}
                options={{
                    drawerIcon: ({focused, size}) => <Ionicons name="enter-outline" size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
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
                      navigation.navigate('Home', { screen: 'Informações' });
                    },
                })}
            />
        </Drawer.Navigator>
    )
}