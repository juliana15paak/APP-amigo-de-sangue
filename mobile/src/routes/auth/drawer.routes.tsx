import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabRoutes from './tab.routes';
import Cadastro from '../../app/cadastro';
import Login from '../../app/login';
import { EditarPerfilDados } from '@/src/app/logado/EditarPerfilDados';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '@/src/context/AuthContext';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={TabRoutes}
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({focused, size}) => <Ionicons name="home" style={{marginLeft:RFValue(2), marginRight:RFValue(-4)}} size={size} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
            />
            <Drawer.Screen name="Perfil" component={EditarPerfilDados}
                options={{
                    headerShown: true,
                    drawerLabel: 'Meu Perfil',
                    drawerIcon: ({focused, size}) => <FontAwesome name="user" size={size} style={{marginLeft:RFValue(4)}} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                    headerStyle: {backgroundColor:'#f8fafc'}
                }}
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
        </Drawer.Navigator>
    )
}