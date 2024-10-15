import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './auth/drawer.routes';
import DrawerRoutesApp from './app/drawerApp.routes';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function Routes(){
    const { isAuthenticated, checkAuth } = useAuth();
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);
    return(
        <NavigationContainer independent={true}>
            {isAuthenticated ? <DrawerRoutesApp/> : <DrawerRoutes/>}
        </NavigationContainer>
    )
}