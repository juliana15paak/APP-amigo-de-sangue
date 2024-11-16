import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../app/login';
import { EditarPerfilDados } from '@/src/app/logado/editarPerfilDados';
import { Perfil } from '@/src/app/logado/perfil';
import DrawerRoutes from '../auth/drawer.routes';
import DrawerAppRoutes from './drawerApp.routes';
import { useAuth } from '@/src/context/AuthContext';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function StackAppRoutes(){
    const { isAuthenticated, checkAuth } = useAuth();
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}
                    />
                    <Stack.Screen name="EditarPerfilDados" component={EditarPerfilDados} options={{headerShown: false}}
                    />
                </>
            )}
        </Stack.Navigator>
    )
}