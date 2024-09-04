import "../styles/global.css"
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Loading } from '../components/form/loading'

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium, Poppins_600SemiBold
  })

  if(!fontsLoaded){
    return <Loading/>
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="cadastro" options={{headerShown: false}}/>
        <Stack.Screen name="login" options={{headerShown: false}}/>
        <Stack.Screen name="perfil" options={{headerShown: false}}/>
      </Stack> 
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}