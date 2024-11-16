## 0 - Execute 'npm i' no terminal dentro da pasta 'mobile' do projeto

## 1 - Adicionando a SDK (pule para a etapa 4 se você tem Android Studio):
- No Disco Local do computador (C:) crie uma pasta "Android"
- Dentro da pasta Android, extraia o arquivo commandlinetools-win-11076708_latest
- Na pasta criada 'cmdline-tools', crie uma pasta "latest" e mova todo o conteúdo de dentro da pasta cmdline-tools para dentro da pasta latest

## 2 - Mudando as variáveis de ambiente
- Pesquise 'variáveis de ambiente' no 'iniciar' do seu pc -> Propriedades do Sistema
- Na aba 'avançado', clique no botão inferior 'variáveis de ambiente'
- Na primeira parte 'Variáveis de usuário', clique no botão Novo e coloque o nome 'ANDROID_HOME' e o caminho da pasta "Android": C:\Android
- Clique em OK
- Na segunda parte 'Variáveis do sistema', procure na lista por 'Path', clique nele e clique no botão 'Editar'
- Clique em novo e adicione esse caminho: C:\Android\cmdline-tools\latest\bin
- Clique em novo e adicione esse caminho: C:\Android\platform-tools
- Clique em OK nas três janelas

## 3 - Instalando ferramentas
- Cole esse comando no terminal: sdkmanager "platform-tools" "platforms;android-30" "build-tools;35.0.0"
- Execute o comando 'sdkmanager --list' para ver se foi instalado
- Se o comando não funcionar, reinicie o computador para atualizar as variáveis de ambiente

## 4- Instalando o aplicativo no celular via USB
- Configure o celular (ative o modo desenvolvedor e ative a depuração USB)
- Com o celular configurado e conectado no USB, execute 'npx expo run:android'
- Na primeira vez, vai demorar (cerca de 1h30min)
- Quando terminar de rodar, aperte a tecla 'a' para rodar no celular
- Pronto!

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
