import "../styles/global.css"
import { Slot } from 'expo-router';
import { StatusBar } from 'react-native';
import '../styles/theme';

export default function Layout() {
  return (
    <>
      <Slot/>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </>
  );
}