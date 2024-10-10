import "../styles/global.css"
// import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'

import { Loading } from '../components/form/loading'
import Routes from "../routes";
import { AuthProvider } from "../context/AuthContext";
import * as Font from 'expo-font';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  })

  if(!fontsLoaded){
    return <Loading/>
  }

  return (
    <AuthProvider>
      <Routes/>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </AuthProvider>
  );
}