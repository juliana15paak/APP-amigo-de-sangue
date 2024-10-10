import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TabRoutes from '../auth/tab.routes';
import StackAppRoutes from './stackApp.routes';
import { RFValue } from 'react-native-responsive-fontsize';

const Drawer = createDrawerNavigator();

export default function DrawerAppRoutes(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="InicioLogado" component={TabRoutes}
               options={{
                drawerLabel: 'Início',
                drawerIcon: ({focused, size}) => <Ionicons name="home" style={{marginLeft:RFValue(2), marginRight:RFValue(-4)}} size={size} color={focused? "#00a495": "black"} />,
                drawerActiveBackgroundColor: "#f0fdfa",
                drawerLabelStyle: {color: "black"},
               }}
            />
            <Drawer.Screen name="StackPerfil" component={StackAppRoutes}
                options={{
                    drawerLabel: 'Meu Perfil',
                    drawerIcon: ({focused, size}) => <FontAwesome name="user" size={size} style={{marginLeft:RFValue(4)}} color={focused? "#00a495": "black"} />,
                    drawerActiveBackgroundColor: "#f0fdfa",
                    drawerLabelStyle: {color: "black"},
                }}
            />
        </Drawer.Navigator>
    )
}