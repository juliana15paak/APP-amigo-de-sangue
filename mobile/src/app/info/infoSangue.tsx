import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderFeed } from '../../components/feed/headerFeed'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { InfoaskRetangulo } from '@/src/components/feed/infoaskRetangulo';

export function InfoSangue() {
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
          <View className='bg-white flex-row justify-between'
            style={{
              paddingRight: RFValue(15),
              paddingLeft: RFValue(22),
              paddingVertical: RFValue(20),
              width: screenWidth
            }}
          >
            <Text className='font-medium flex-1 text-black'
              style={{
                fontSize: RFValue(13),
                marginRight: RFValue(4)
              }}
            >
            A doação de sangue é um gesto simples e seguro para salvar vidas. Com apenas uma doação, você pode ajudar até quatro pessoas. Seja a esperança de alguém, doe sangue, doe vida!
            </Text>
            <Image className='self-center'
              style={{
                height: RFPercentage(10),
                width: RFPercentage(10),
              }}
              source={require('../../assets/images/Info/sangue.png')}
            />
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
                >Para doar sangue, é preciso: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Estar em boas condições de saúde.
                  {"\n"}- Ter entre 16 e 69 anos, desde que a primeira doação tenha sido feita até 60 anos (menores de 18 anos o responsável legal deve dar autorização);
                  {"\n"}- Pesar no mínimo 50 kg, pois é importante garantir que o organismo do doador tenha volume sanguíneo suficiente após a coleta;
                  {"\n"}- Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas);
                  {"\n"}- Estar alimentado (evitar alimentação gordurosa nas 4 horas que antecedem a doação);
                  {"\n"}- Apresentar documento original com foto emitido por órgão oficial (Carteira de Identidade, Cartão de Identidade de Profissional Liberal, Carteira de Trabalho e Previdência Social).
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quais são os intervalos de doação?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Homens: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  - 60 dias (máximo de 04 doações nos últimos 12 meses);
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}Mulheres: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  - 90 dias (máximo de 03 doações nos últimos 12 meses);
                </Text>
                {/* <Text className='font-medium text-black'
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
                   De acordo com a faixa etária do doador;
                </Text> */}
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quais são os benefícios da doação de sangue?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >1. Renovação sanguínea: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  A doação de sangue renova as células sanguíneas, o que pode reduzir o risco de desenvolver alguns tipos de câncer, como no pulmão, fígado e garganta.                 </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}2. Check-up gratuito: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  O doador passa por uma bateria de exames e testes que garantem a qualidade do sangue doado. Esses exames podem identificar doenças que a pessoa não sabia que tinha.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}3. Proteção do coração: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  A doação de sangue reduz a viscosidade do sangue e o nível de radicais livres, o que pode diminuir o risco de desenvolver doenças cardíacas.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}4. Poupa o fígado: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  O fígado é um órgão que filtra e purifica o sangue, e o acúmulo de ferro pode prejudicar seu funcionamento.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}5. Dia de folga: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  A CLT garante o direito de folga a todos os doadores de sangue, com comprovação por meio do atestado de comparecimento.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}6. Meia-entrada em eventos: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Doadores de sangue regulares têm direito à meia-entrada em eventos culturais, esportivos e de lazer realizados em locais públicos. 
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}7. Isenção de taxas: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Doadores de sangue podem ter isenção na taxa de inscrição em concursos públicos, dependendo do estado.
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
              <InfoaskRetangulo pergunta='Quais são as etapas da doação?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Recepção e cadastro: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}Para realizar seu cadastro leve consigo documento oficial de identidade com foto (RG, carteira de motorista, carteira de trabalho ou passaporte). Para a faixa etária entre 16 e 18 anos incompletos é necessário acompanhante maior de idade com documento.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}Triagem clínica: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}Após o cadastro ocorre a triagem clínica, que nada mais é que uma entrevista feita por profissional de saúde que irá avaliar as condições de saúde da pessoa que vai doar para não colocar em risco a pessoa que vai receber.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}Coleta: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}A coleta do sangue dura em torno de 15 a 20 minutos. Ela é feita com material esterilizado, descartável e não apresenta nenhum risco para a pessoa que está doando.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}Depois de doar sangue: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}Faça um pequeno lanche e hidrate-se. Evite esforços físicos exagerados por pelo menos 12 horas, não fumar por cerca de 2 horas, evitar bebidas alcóolicas por 12 horas e não dirigir veículos de grande porte. Exercícios e práticas esportivas também devem ser evitadas logo após a doação.
                </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}É importante observar os impedimentos temporários para a doação antes de se deslocar até o local da doação de sangue. Segundo o Hemocentro da Unicamp, cerca de 30% dos candidatos à doação não conseguem efetiva-la por inaptidão clínica, ou seja, por estarem utilizando algum tipo de medicamento, por doenças crônicas não controladas, comportamentos de risco ou ainda pequenos quadros febris motivados por gripes, vacinas e outros. É importante também observar não ter ingerido bebida alcoólica nas 12 horas que antecedem a doação.</Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quem não pode doar sangue?'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Você não poderá doar sangue se: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Tiver idade inferior a 16 anos ou superior a 69 anos.
                  {"\n"}- Tiver peso inferior a 50 kilos.
                  {"\n"}- Tiver ingerido bebida alcoólica nas 12 horas que antecedem a doação.
                  {"\n"}- Estiver com anemia no teste realizado imediatamente antes da doação.
                  {"\n"}- Estiver com hipertensão ou hipotensão arterial no momento da doação.
                  {"\n"}- Estiver com aumento ou diminuição dos batimentos cardíacos no momento da doação.
                  {"\n"}- Estiver com febre no dia da doação.
                  {"\n"}- Estiver grávida. (aguardar 90 dias após parto normal e 180 dias após cesariana.)
                  {"\n"}- Estiver amamentando, a menos que o parto tenha ocorrido há mais de 12 meses.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}Você nunca poderá ser doador de sangue se: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Tem ou teve um teste positivo para hiv.
                  {"\n"}- Faz uso de drogas ilícitas injetáveis.
                  {"\n"}- Teve hepatite após os 11 anos de idade. *
                  {"\n"}- Já teve malária.
                  {"\n"}- Tem doença de chagas.
                  {"\n"}- Recebeu enxerto de duramater.
                  {"\n"}- Teve algum tipo de câncer, incluindo leucemia.
                  {"\n"}- Tem graves problemas no pulmão, coração, rins ou fígado.
                  {"\n"}- Tem problema de coagulação de sangue.
                  {"\n"}- É diabético com complicações vasculares.
                  {"\n"}- Teve tuberculose extra-pulmonar.
                  {"\n"}- Já teve elefantíase.
                  {"\n"}- Já teve hanseníase.
                  {"\n"}- Já teve calazar (leishmaniose visceral).
                  {"\n"}- Já teve brucelose.
                  {"\n"}- Tem alguma doença que gere inimputabilidade jurídica.
                  {"\n"}- Foi submetido a gastrectomia total.
                  {"\n"}- Foi submetido a pneumectomia.
                  {"\n"}- Foi submetido a esplenectomia não decorrente de trauma.
                  {"\n"}- Se foi submetido a transplante de órgãos ou de medula.
                  {"\n"}* Hepatite após o 11º aniversário: Recusa Definitiva; Hepatite B ou C após ou antes dos 10 anos: Recusa definitiva; Hepatite por Medicamento: apto após a cura e avaliado clinicamente; Hepatite viral (A): após os 11 anos de idade, se trouxer o exame do diagnóstico da doença, será avaliado pelo médico da triagem.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Quais as condições que impedem a doação de sangue?'>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Algumas situações não estão incluídas nesta lista e serão definidas no ato da triagem clínica pela enfermeira ou pelo médico que realizará o seu questionário.</Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}* O uso de alguns medicamentos impede a doação temporária ou definitivamente. Informe-se sobre medicamentos, exames, cirurgias e tratamentos médicos que tenha realizado ou esteja em andamento, e que não esteja na relação abaixo.</Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}* Os pacientes diabéticos podem doar sangue, exceto quem faz uso de insulina ou apresentem problemas vasculares graves. No dia da doação a glicemia não pode estar alterada!</Text>
                
                <Text className='font-semibold text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}{"\n"}Você estará impedido de doar sangue: </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >1. Por 48 horas: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se recebeu vacina preparada com vírus ou bactéria mortos, toxóide ou recombinantes. Ex.: cólera, poliomielite (salk), difteria, tétano, febre tifóide (injetável), meningite, coqueluche, pneumococo.
                  {"\n"}- Se recebeu vacina contra gripe.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}2. Por sete dias: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se teve diarréia.
                  {"\n"}- Após terminarem os sintomas de gripe ou resfriado.
                  {"\n"}- Após a cura de conjuntivite.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}3. Por duas semanas: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- após o término do tratamento de infecções bacterianas.
                  {"\n"}- após a cura de rubéola.
                  {"\n"}- após a cura de erisipela.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}4. Por três semanas: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Após a cura de caxumba.
                  {"\n"}- Após a cura de varicela (catapora).
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}5. Por quatro semanas: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se recebeu vacina de vírus ou bactérias vivos e atenuados. Ex.: poliomielite oral (sabin), febre tifóide oral, caxumba, febre amarela, sarampo, bcg, rubéola, catapora, varíola etc
                  {"\n"}- Se recebeu soro antitetânico.
                  {"\n"}- Após a cura de dengue.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}6. Por oito semanas (somente para homens): </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Após uma doação de sangue. Esse período deve ser ampliado para 16 semanas se houve doação dupla de hemácias por aférese.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}7. Por 12 semanas (somente para mulheres): </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Após uma doação de sangue (para mulheres). Esse período deve ser ampliado para 24 semanas Se foi doação dupla de hemácias por aférese.
                  {"\n"}- Após parto normal ou abortamento.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}8. Por três meses (independente se homem ou mulher): </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se foi submetido a apendicectomia.
                  {"\n"}- Se foi submetido a hemorroidectomia.
                  {"\n"}- Se foi submetido a hernioplastia.
                  {"\n"}- Se foi submetido a ressecção de varizes.
                  {"\n"}- Se foi submetido a amigdalectomia.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}9. Por seis meses a 01 ano: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se foi submetido a uma cirurgia de grande porte como por exemplo: colecistectomia, histerectomia, tireoidectomia, colectomia, esplenectomia pós trauma, nefrectomia etc.
                  {"\n"}- Após a cura de toxoplasmose comprovada laboratorialmente.
                  {"\n"}- Qualquer exame endoscópico (endoscopia digestiva alta, colonoscopia, rinoscopia etc); se com biópsia, é necessário avaliação do resultado da mesma.
                  {"\n"}- Se fez tatuagem.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}10. Por 12 meses: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Se recebeu uma transfusão de sangue, plasma, plaquetas ou hemoderivados.
                  {"\n"}- Se recebeu enxerto de pele ou de osso.
                  {"\n"}- Se sofreu acidente se contaminando com sangue de outra pessoa.
                  {"\n"}- Se teve acidente com agulha já utilizada por outra pessoa.
                  {"\n"}- Se teve contato sexual com alguma pessoa com aids ou com teste positivo para hiv.
                  {"\n"}- Se teve contato com prostituta ou com outra pessoa que recebeu ou pagou com dinheiro ou droga pelo ato sexual.
                  {"\n"}- Se teve contato sexual com usuário de droga endovenosa.
                  {"\n"}- Se teve contato sexual com pessoa que tenha recebido transfusão de sangue nos últimos 12 meses.
                  {"\n"}- Se teve relação sexual com pessoa com hepatite.
                  {"\n"}- Se mora na mesma casa de uma pessoa que tenha hepatite.
                  {"\n"}- Se fez piercing (se feito em local sem condições de avaliar a antissepsia: aguardar 12 meses após realização; com material descartável e feito em local apropriado: aguardar 6 meses após realização; se feito na mucosa oral ou genital: inapto enquanto estiver com o piercing e apto após 12 meses da retirada.).
                  {"\n"}- Esteve nos Estados do Acre, Amapá, Amazonas, Rondônia, Rorâima, Maranhão, Mato Grosso, Pará e Tocantins. Estes são estados onde há alta prevalecia de malária.
                  {"\n"}- Se teve sífilis ou gonorréia.
                  {"\n"}- Se foi detido por mais de 24 horas.
                </Text>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >{"\n"}11. Por cinco anos: </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Após a cura de tuberculose pulmonar.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Cuidados pós-doação'>
                <Text className='font-medium text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >Após a doação siga as seguintes orientações:</Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}- Antes de deixar o banco de sangue, permaneça sentado por, pelo menos, 10 minutos. Coma e beba o lanche ofertado;
                  {"\n"}- Tome quantidades extras de líquidos nas primeiras 24 horas após a doação. Isto ajudará na reposição do volume perdido durante a doação. Esta medida é particularmente importante nas primeiras 4 horas após a doação;
                  {"\n"}- Evite subidas pesadas e exercícios físicos extenuantes por 12 horas;
                  {"\n"}- Mantenha o curativo no local da agulha por, no mínimo, 4 horas. Se você notar que o local voltou a sangrar, aplique uma pressão sobre o local por 2-5 minutos e então troque a curativo, mantendo-o por mais 4 horas;
                  {"\n"}- Se, após deixar o banco de sangue, você sentir mal-estar, tontura, fraqueza e sensação de que vai desmaiar, sente-se em qualquer local e coloque a cabeça entre os joelhos ou então, deite imediatamente no chão com as pernas elevadas. Estas medidas evitam quedas da própria altura e aumentam a circulação de sangue na cabeça, aliviando rapidamente os sintomas;
                  {"\n"}- Não consuma bebidas alcoólicas;
                  {"\n"}- Não fume por 02 horas;
                  {"\n"}- Se for dirigir veículo automotor ou ser transportado em motocicleta, pare imediatamente o veículo em caso de mal-estar;
                  {"\n"}- Na ocorrência de febre, diarréia ou outro sintoma de doença infecciosa até sete dias após a doação, comunicar imediatamente o Banco de Sangue;
                  {"\n"}- Se você acha que existe uma razão pela qual o seu sangue não deve ser utilizado para transfusão e você não pode ou não quis dizer isto durante a doação, por favor, entre em contato o mais breve possível com o Serviço de Coleta e solicite que seu sangue seja descartado. O descarte será totalmente confidencial.
                </Text>
              </InfoaskRetangulo>
              <InfoaskRetangulo pergunta='Mitos e verdades'>
                <Text className='font-regular text-red-600'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Mito:{" "}
                </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Doar sangue pode fazer mal à saúde.
                </Text>
                <Text className='font-regular text-green-500'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}Verdade:{" "}
                </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  O volume retirado (450 ml) representa apenas cerca de 10% do volume total de sangue do corpo, e o organismo repõe rapidamente o sangue doado. Desde que o doador esteja saudável, a doação não prejudica a saúde e pode ser feita regularmente.
                </Text>
                <Text className='font-regular text-red-600'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}{"\n"}Mito:{" "}
                </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Doar sangue faz você engordar ou emagrecer.
                </Text>
                <Text className='font-regular text-green-500'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  {"\n"}Verdade:{" "}
                </Text>
                <Text className='font-regular text-black'
                  style={{
                    fontSize: RFValue(12),
                    padding: RFValue(26)
                  }}
                >
                  Não há qualquer relação entre doação de sangue e ganho ou perda de peso. O corpo pode passar por uma leve alteração no metabolismo durante o processo de recuperação do sangue, mas isso não tem impacto no peso do doador. 
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