import * as yup from 'yup';

export const schema = yup.object({
    nomeUser: yup.string().required("Informe seu nome"),
    dataNascUser: yup.number().required("Informe sua data de nascimento"),
    numTelefone: yup.number().required("Informe seu telefone"),
    generoUser: yup.string().required("Informe seu sexo"),
    emailUser: yup.string().email("Email inválido").required("Informe seu email"),
    senhaUser: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Informe sua senha"),
    cpfUser: yup.number().required("Informe seu CPF"),
    logradouroUser: yup.string().required("Informe seu logradouro"),
    numLogUser: yup.number().required("Informe o número de seu logradouro"),
    compUser: yup.string(),
    bairroUser: yup.string().required("Informe seu bairro"),
    cidadeUser: yup.string().required("Informe sua cidade"),
    estadoUser: yup.string().required("Informe seu estado"),
    cepUser: yup.number().required("Informe seu CEP"),
    rgUser: yup.number().required("Informe seu RG"),
    descTipoSanguineo: yup.string()
  })