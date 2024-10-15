export const campanhas = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      tituloCampanha: 'Campanha 1',
      descricaoCampanha: 'Campanha do mês Junho Vermelho, doe sangue, salve vidas! \nEstoque em falta: O+',
      dataIncioCampanha: '30/09/2024',
      dataFimCampanha: '01/12/2024',
      imgCampanha: require('../../assets/images/capaCampanha.png'),
      nomeHemocentro: 'Hemocentro Água Bela',
      imgHemocentro: require('../../assets/images/hospital1.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      tituloCampanha: 'Título da Campanha',
      descricaoCampanha: 'Descrição da Campanha',
      dataIncioCampanha: '30/09/2024',
      dataFimCampanha: '01/12/2024',
      imgCampanha: require('../../assets/images/capaCampanha.png'),
      nomeHemocentro: 'Hemocentro Água Bela',
      imgHemocentro: '../../assets/images/hospital1.png'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      tituloCampanha: 'Campanha 3',
      descricaoCampanha: 'Descrição da Campanha 3',
      dataIncioCampanha: '30/09/2024',
      dataFimCampanha: '01/12/2024',
      imgCampanha: require('../../assets/images/capaCampanha.png'),
      nomeHemocentro: 'Hemocentro Água Bela',
      imgHemocentro: require('../../assets/images/hospital1.png')
    },
  ];
  
import { ImageURISource } from 'react-native';
export type ItemProps = {
  id: string,
  tituloCampanha: string,
  descricaoCampanha: string,
  dataIncioCampanha: string,
  dataFimCampanha: string,
  imgCampanha: ImageURISource,
  nomeHemocentro: string,
  imgHemocentro: ImageURISource
};