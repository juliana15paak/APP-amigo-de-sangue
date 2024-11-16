import * as yup from 'yup';

export const schema = yup.object({
    nomeUsuario: yup.string().required("Informe seu nome").max(50, "Abrevie seu nome"),
    dataNascUsuario: yup.string().required("Informe a data"),
    numTelefone: yup.string().required("Informe seu telefone")
      .test('phone-validation', 'Telefone inválido', function(value) {
      const cleanedNumber = value.replace(/[()]/g, '').replace(/-/g, '');
      
      // Verifica se tem a quantidade correta de dígitos
      if (!(cleanedNumber.length >= 10 && cleanedNumber.length <= 11)) {
        return false;
      }
  
      // Verifica se o segundo dígito é 9 (celular) ou 2, 3, 4, 5, 7 (fixo)
      if (cleanedNumber.length === 11 && parseInt(cleanedNumber[2]) !== 9) {
        return false;
      }
  
      // Verifica se o DDD é válido
      const ddd = parseInt(cleanedNumber.substring(0, 2));
      const validDDDs = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];
      if (!validDDDs.includes(ddd)) {
        return false;
      }
  
      return true;
    }),
    
    generoUsuario: yup.string().required("Informe seu sexo"),
    emailUsuario: yup.string().email("Email inválido").required("Informe seu email").max(50, "Email muito grande"),
    senhaUsuario: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres").required("Informe sua senha").max(50, "Senha muito grande"),
    passwordConfirmation: yup.string().required('Confirmação de senha é necessário').oneOf([yup.ref('senhaUsuario')], 'Senhas devem coincidir'),
    cpfUsuario: yup.string().required("Informe seu CPF").min(11, 'CPF Inválido'),
    logUsuario: yup.string().required("Informe seu logradouro").max(50, "Logradouro muito grande"),
    numLogUsuario: yup.string().required("Informe o n°").max(20, "N° muito grande"),
    compUsuario: yup.string(),
    bairroUsuario: yup.string().required("Informe seu bairro").max(50, "Abrevie o nome do bairro"),
    cidadeUsuario: yup.string().required("Informe sua cidade").max(50, "Abrevie o nome da cidade"),
    estadoUsuario: yup.string().required("Informe seu estado"),
    cepUsuario: yup.string().required("Informe seu CEP").matches(/^\d{8}$|^\d{5}-\d{3}$/i, "CEP inválido"),
    rgUsuario: yup.string().required("Informe seu RG").max(20, "RG Inválido"),
    userPhoto: yup.string(),
  })