import "../styles/global.css"
// import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { Loading } from '../components/form/loading'
import Routes from "../routes";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";
import * as ScreenOrientation from 'expo-screen-orientation';
import { OneSignal } from 'react-native-onesignal'

OneSignal.initialize('e1d2e17c-4c38-4116-a16f-351e3dd353c4')
OneSignal.Notifications.requestPermission(true)

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold
  })

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }, []);

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