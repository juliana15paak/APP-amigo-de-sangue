import { View, Image, TouchableOpacity, ScrollView, StatusBar, Alert } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Header } from "../../components/form/header";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Campanha } from "../../components/feed/campanha";
import { FeedHemocentros } from "../../components/feed/feedHemocentros";
import { CartaoLogado } from "../../components/feed/cartaoLogado";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function HomeLogado() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-start bg-white">
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      <ScrollView>
      <Header>
          <View
            className="flex-row justify-between items-center"
            style={{
              marginHorizontal: RFValue(20),
              marginTop: RFValue(40),
              marginBottom: RFValue(100),
            }}
          >
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialIcons
                name="menu"
                size={RFValue(28)}
                color="white"
                style={{
                  marginTop: RFValue(-6),
                }}
              />
            </TouchableOpacity>
            <Image
              style={{
                height: RFPercentage(7),
                width: RFPercentage(20),
                marginTop: RFValue(-5)
              }}
              source={require('../../assets/images/Logos/LogoAppTextoIconeBranco.png')}
              resizeMode='contain'
            />
            <TouchableOpacity
              style={{
                marginBottom: RFValue(16),
              }}
            >
              <MaterialIcons
                name="notifications"
                size={RFValue(28)}
                color="white"
                style={{
                  marginTop: RFValue(6),
                }}
              />
            </TouchableOpacity>
          </View>
        </Header>
        <CartaoLogado/>
        <Campanha />
        <FeedHemocentros />
      </ScrollView>
    </View>
  );
}
