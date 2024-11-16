import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as ScreenOrientation from 'expo-screen-orientation';
import Home from '../../app/home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Hemocentros } from '@/src/app/hemocentros';
import { Carteirinha } from '@/src/app/doador/carteirinha';
import { Informacoes } from '@/src/app/informacoes';
import { useEffect, useState } from 'react';
import { useAuth } from '@/src/context/AuthContext';
import HomeLogado from '@/src/app/logado/homeLogado';
import { Historico } from '@/src/app/doador/historico';
import { EntreCarteirinha } from '../../app/entreCarteirinha';
import { InfoRin } from '@/src/app/info/infoRin';
import { InfoStackRoutes } from './infoStack.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    const { isAuthenticated, checkAuth } = useAuth();
    const [isPortrait, setIsPortrait] = useState(true);

    useEffect(() => {
        checkAuth();
    
        // Função para verificar a orientação e definir o estado
        const checkOrientation = async () => {
          const orientation = await ScreenOrientation.getOrientationAsync();
          if (
            orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
            orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
          ) {
            setIsPortrait(true);
          } else {
            setIsPortrait(false);
          }
        };
    
        // Detecta mudanças na orientação
        const subscription = ScreenOrientation.addOrientationChangeListener((event) => {
          if (
            event.orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
            event.orientationInfo.orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
          ) {
            setIsPortrait(true);
          } else {
            setIsPortrait(false);
          }
        });
        
        checkOrientation();
    
        return () => {
          ScreenOrientation.removeOrientationChangeListener(subscription);
        };
    }, [checkAuth]);

    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: route.name === "Carteirinha" && !isPortrait ? { display: 'none' } : {},
          })}
        >
            <Tab.Screen name="Feed" component={isAuthenticated ? HomeLogado : Home}
                options={{
                    title: "Início",
                    tabBarIcon: ({focused, size}) => <Ionicons name="home" size={size} color={focused? "#00a495": "black"} />,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
            <Tab.Screen name="Hemocentros" component={Hemocentros}
                options={{
                    title: "Onde doar",
                    tabBarIcon: ({focused, size}) =><Feather name="search" size={size} color={focused? "#00a495": "black"} /> ,
                    tabBarLabelStyle: {color: 'black'},
                }}
            />
            <Tab.Screen name="Carteirinha" component={isAuthenticated ? Carteirinha : EntreCarteirinha}
                options={{
                    title: "Carteirinha",
                    tabBarIcon: ({focused, size}) => <AntDesign name="idcard" size={size} color={focused? "#00a495": "black"}/>,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
            <Tab.Screen name={isAuthenticated ? "Histórico" : "Informações"} component={isAuthenticated ? Historico : InfoStackRoutes}
                options={{
                    title: isAuthenticated ? "Histórico" : "Informações",
                    tabBarIcon: ({focused, size}) => isAuthenticated ? <MaterialCommunityIcons name="clipboard-text-clock-outline" size={size} color={focused? "#00a495": "black"} /> : <Ionicons name="help-circle-outline" size={size} color={focused? "#00a495": "black"}/>,
                    tabBarLabelStyle: {color: 'black'}
                }}
            />
        </Tab.Navigator>
    )
}