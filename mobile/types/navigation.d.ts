export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            Sangue: undefined;
            Carteirinha: undefined;
            EditarPerfilDados: undefined;
            Historico: undefined;
            HomeLogado: undefined;
            Perfil: undefined;
            PerfilOculto: undefined;
            Routes: undefined;
            Cadastro: undefined;
            EntreCarteirinha: undefined;
            Hemocentros: undefined;
            Home: undefined;
            Informacoes: undefined;
            Login: undefined;
            DrawerRoutes: undefined;
            InfoRin: undefined;
            InfoMedulaOssea: undefined;
            InfoOutros: undefined;
            InfoSangue: undefined;
            TabRoutes:  { screen: 'Feed' | 'Hemocentros' | 'Carteirinha' | 'Informacoes' | 'Histórico' | 'Perfil' | undefined };
            DrawerAppRoutes: { screen: 'Home' | 'Hemocentros' | 'Carteirinha' | 'Informacoes' | 'Histórico' | undefined };
            StackAppRoutes: { screen: 'Login' | 'DrawerRoutes' | 'Perfil' | 'EditarPerfilDados' | 'DrawerAppRoutes' | undefined };
            InfoStackRoutes: { screen: 'Informacoes' | 'InfoSangue' | 'InfoMedulaOssea' | 'InfoRin' | 'InfoOutros' | undefined };
        }
    }
}