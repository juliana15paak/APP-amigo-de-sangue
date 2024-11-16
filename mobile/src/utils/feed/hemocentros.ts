export const hemocentros = [
    {
      id: 'et2vcmau-2cb1-46c3-aed5-3ad53cbb28ba',
      nomeHemocentro: 'Hemocentro Doe Sangue',
      logradouroHemocentro: 'Rua Feliciano de Mendonça',
      numLogHemocentro: '290',
      compHemocentro: '',
      cidadeHemocentro: 'São Paulo',
      bairroHemocentro: 'Guaianases',
      estadoHemocentro: 'SP',
      cepHemocentro: '08460-365',
      imgHemocentro: require('../../assets/images/hospital1.png')
    },
    {
      id: 'ft3vcmau-2cb1-46c3-aed5-fbd91aa97f63',
      nomeHemocentro: 'Hemocentro Água Bela',
      logradouroHemocentro: 'Rua Feliciano de Mendonça',
      numLogHemocentro: '290',
      compHemocentro: '',
      cidadeHemocentro: 'São Paulo',
      bairroHemocentro: 'Guaianases',
      estadoHemocentro: 'SP',
      cepHemocentro: '08460-365',
      imgHemocentro: require('../../assets/images/hospital2.png')
    },
    {
      id: 'gt4vcmau-2cb1-46c3-aed5-145571e29d72',
      nomeHemocentro: 'Hemocentro Água Bela',
      logradouroHemocentro: 'Rua Feliciano de Mendonça',
      numLogHemocentro: '290',
      compHemocentro: '',
      cidadeHemocentro: 'São Paulo',
      bairroHemocentro: 'Guaianases',
      estadoHemocentro: 'SP',
      cepHemocentro: '08460-365',
      imgHemocentro: require('../../assets/images/hospital3.png')
    },
  ];
  
import { ImageURISource } from 'react-native';
export type ItemProps = {
  id: string,
  nomeHemocentro: string,
  logradouroHemocentro: string,
  numLogHemocentro: string,
  compHemocentro: string,
  cidadeHemocentro: string,
  bairroHemocentro: string,
  estadoHemocentro: string,
  cepHemocentro: string,
  imgHemocentro: ImageURISource
};