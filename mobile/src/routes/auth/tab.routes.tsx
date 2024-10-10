import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../app/home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Hemocentros } from '@/src/app/hemocentros';
import { Carteirinha } from '@/src/app/carteirinha';
import { Informacoes } from '@/src/app/informacoes';
import { useEffect } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import HomeLogado from '@/src/app/logado/homeLogado';
import { Historico } from '@/src/app/historico';
import { RFValue } from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    const { isAuthenticated, checkAuth } = useAuth();
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name={isAuthenticated ? "FeedLogado" : "Feed"} component={isAuthenticated ? HomeLogado : Home}
                options={{
                    title: "Início",
                    tabBarIcon: ({focused, size}) => <Ionicons name="home" size={RFValue(size)} color={focused? "#00a495": "black"} />,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
            <Tab.Screen name="Hemocentros" component={Hemocentros}
                options={{
                    title: "Onde doar",
                    tabBarIcon: ({focused, size}) =><Feather name="search" size={RFValue(size)} color={focused? "#00a495": "black"} /> ,
                    tabBarLabelStyle: {color: 'black'},
                }}
            />
            <Tab.Screen name="Carteirinha" component={Carteirinha}
                options={{
                    title: "Carteirinha",
                    tabBarIcon: ({focused, size}) => <AntDesign name="idcard" size={RFValue(size)} color={focused? "#00a495": "black"}/>,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
            <Tab.Screen name={isAuthenticated ? "Histórico" : "Informações"} component={isAuthenticated ? Historico : Informacoes}
                options={{
                    title: isAuthenticated ? "Histórico" : "Informações",
                    tabBarIcon: ({focused, size}) => <Ionicons name="help-circle-outline" size={RFValue(size)} color={focused? "#00a495": "black"} />,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
        </Tab.Navigator>
    )
}