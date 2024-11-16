import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderFeed } from '../../components/feed/headerFeed'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { InfoaskRetangulo } from '@/src/components/feed/infoaskRetangulo';

export function InfoRin() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View className='bg-white flex-1 justify-start'>
      <HeaderFeed/>
      <ScrollView>
        <View className='justify-start'
          style={{
            marginTop: RFValue(100)
          }}
        >
          <View className='bg-white flex-row justify-start'
            style={{
              paddingHorizontal: RFValue(26),
              paddingVertical: RFValue(20),
              width: screenWidth
            }}
          >
            <Text className='font-medium flex-1 text-black'
              style={{
                fontSize: RFValue(13),
                marginRight: RFValue(15)
              }}
            >
            A doação de rins é um procedimento importante que pode salvar vidas. Quando uma pessoa decide se tornar um doador de rim, seja de um rim vivo ou de um rim doado após a morte, ela pode ajudar aqueles que sofrem de insuficiência renal.
            </Text>
          </View>
          <View className='justify-center items-center bg-white'>
            <View className='bg-blueTheme-500 w-full'
              style={{
                paddingVertical:RFValue(8)
              }}
            >
              <InfoaskRetangulo pergunta='Quais são os requisitos para doar?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Para doar um rim, é preciso: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Ter mais de 18 anos;
                  {"\n"}- Estar em plena saúde, com função renal normal e sem doenças;
                  {"\n"}- Não ser fumante, usuário de drogas ou consumidor abusivo de bebidas alcoólicas;
                  {"\n"}- Não ter tumores em tratamento ou não curados;
                  {"\n"}- Passar por uma série de exames clínicos e laboratoriais;
                  {"\n"}- Passar por uma consulta com um psicólogo;
                  {"\n"}- Cumprir os trâmites legais envolvidos no processo.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quais são os exames e avaliações?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Para doar um rim, o doador deve passar por uma série de exames e avaliações médicas, incluindo: </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Tipagem sanguínea: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Verifica se o tipo de sangue do doador é compatível com o do receptor;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Tipagem HLA: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Identifica o grau de compatibilidade entre doador e receptor;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Prova cruzada: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Verifica se o receptor tem anticorpos que possam rejeitar o rim doado;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Exames de imagem: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Ultrassonografias e tomografias para avaliar os rins;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Avaliação física: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Verifica a saúde geral do doador;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Avaliação psicológica: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Assegura que o doador está preparado para a doação;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Exame de cardiologista: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Identifica se está tudo certo com a saúde do doador;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Exames de sangue e urina: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Determinam a compatibilidade sanguínea e a função renal;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Avaliação dentária: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Verifica se o paciente tem cáries ou infecções bucais;
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}- Exames para rastreio oncológico: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                   De acordo com a faixa etária do doador.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quem precisa de doação de rins?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >1. Insuficiência Renal Crônica: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Essa é uma condição em que os rins perdem sua função gradualmente ao longo do tempo, muitas vezes devido a diabetes ou hipertensão.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}2. Doença Renal Terminal: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Quando os rins não funcionam mais e o paciente precisa de diálise ou transplante para sobreviver.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}3. Pessoas em Espera de Transplante: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Muitas pessoas estão na lista de espera por um transplante de rim, e essa lista pode ser longa, dependendo da região e da disponibilidade de doadores.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='O que é perguntado na entrevista de triagem?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >1. Histórico Médico: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Perguntas sobre condições médicas pré-existentes, como diabetes, hipertensão, doenças cardíacas, ou qualquer outra condição que possa afetar a saúde do doador.
                </Text>

                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}2. Histórico Familiar: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Informações sobre doenças renais na família, que podem aumentar o risco para o doador.
                </Text>

                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}3. Estilo de Vida: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Perguntas sobre hábitos de vida, como dieta, exercícios, consumo de álcool e tabaco, que podem influenciar a saúde renal.
                </Text>

                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}4. Motivação para Doar: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Perguntar sobre a motivação para a doação pode ajudar a entender o compromisso do doador.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quem não pode doar rim?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Não podem doar rim as pessoas que: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Têm doenças infecciosas incuráveis;
                  {"\n"}- Têm câncer generalizado;
                  {"\n"}- Têm doenças que comprometem o estado dos órgãos; 
                  {"\n"}- São desnutridas;
                  {"\n"}- Têm distúrbios psiquiátricos ou são emocionalmente desestabilizadas;
                  {"\n"}- Fazem uso abusivo de álcool, fumo ou outras drogas;
                  {"\n"}- Têm enfermidades hepáticas ou cardiovasculares que não estão controladas;
                  {"\n"}- Têm cálculo renal;
                  {"\n"}- São menores de 18 anos ou maiores de 90 anos;
                  {"\n"}- Não possuem documento de identidade.
                </Text>
              </InfoaskRetangulo>
            </View>
          </View>
          <Text className='font-medium text-black'
            style={{
              fontSize: RFValue(13),
              paddingHorizontal: RFValue(26),
              paddingVertical: RFValue(20)
            }}
          >
            A doação de rins é um ato altruísta e pode fazer uma diferença significativa na vida de quem precisa. O processo de doação é rigoroso para garantir que tanto o doador quanto o receptor estejam em condições adequadas para o transplante.          </Text>
        </View>
      </ScrollView>
    </View>
  );
}