import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from '../../app/cadastro';
import Login from '../../app/login';
import { EditarPerfilDados } from '@/src/app/logado/EditarPerfilDados';

const Stack = createStackNavigator();

export default function StackAppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={EditarPerfilDados} options={{headerShown: false}}
            />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}