// InformacoesStack.js
import { InfoMedulaOssea } from '@/src/app/info/infoMedulaOssea';
import { InfoOutros } from '@/src/app/info/infoOutros';
import { InfoRin } from '@/src/app/info/infoRin';
import { InfoSangue } from '@/src/app/info/infoSangue';
import { Informacoes } from '@/src/app/informacoes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function InfoStackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Informacoes" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Informacoes" component={Informacoes} />
      <Stack.Screen name="InfoSangue" component={InfoSangue} />
      <Stack.Screen name="InfoMedulaOssea" component={InfoMedulaOssea} />
      <Stack.Screen name="InfoRin" component={InfoRin} />
      <Stack.Screen name="InfoOutros" component={InfoOutros} />
    </Stack.Navigator>
  );
}
