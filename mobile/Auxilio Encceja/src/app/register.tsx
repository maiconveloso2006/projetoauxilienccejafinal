import { Link, useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  const router = useRouter();

  const [namefull, setNamefull] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setNumeroTelefone] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [senha2, setSenha2] = useState<string>("");
  
  const [focoNome, setFocoNome] = useState(false);
  const [focoEmail, setFocoEmail] = useState(false);
  const [focoTelefone, setFocoTelefone] = useState(false);
  const [FocoDataNascimento, setFocoDataNascimento] = useState(false);
  const [focoSenha, setFocoSenha] = useState(false);
  const [focoSenha2, setFocoSenha2] = useState(false);

  function formatarTelefone(value:string) {
    const Numeros = value.replace(/\D/g, "");
    if (Numeros.length <=2) return Numeros;
    if (Numeros.length <=7)
      return ` (${Numeros.slice(0, 2)}) ${Numeros.slice}`;
    if (Numeros.length <= 11)
      return `(${Numeros.slice(0, 2)}) ${Numeros.slice(2, 7)}-${Numeros.slice(7)}`;
    return `(${Numeros.slice(0, 2)}) ${Numeros.slice(2, 7)}-${Numeros.slice(7, 11)}`;
  }

  function formatarData(value:string) {
    const Numeros = value.replace(/\D/g, "");
    if (Numeros.length <=2) return Numeros;
    if (Numeros.length <=4) return `(${Numeros.slice(0, 2)}) ${Numeros.slice(2)}`;
    return `(${Numeros.slice(0, 2)}) ${Numeros.slice(2, 4)}-${Numeros.slice(4, 8)}`;
  }

  function onClickRegistrar() {
    if (namefull == "") {
      Alert.alert(
        "Campo Obrigatório!\nO Nome Completo está em Branco.\nPor favor, preencha o campo."
      );
      return;
    }
    if (email === "") {
      Alert.alert(
          "Campo Obrigatório!\nO Email está em Branco.\nPor favor, preencha o campo."
      );
    }
    if (telefone === "") {
      Alert.alert(
          "Campo Obrigatório!\nO Número de Telefone está em Branco.\nPor favor, preencha o campo."
      );
    }
    if (dataNascimento === "") {
      Alert.alert(
        "Campo Obrigatório!\nO Data de Nascimento está em Branco.\nPor favor, preencha o campo."
      );
    }
    if (senha !== senha2) {
      Alert.alert(
        "Senhas Diferentes!\nAs Senhas digitadas são diferentes.\nPor favor, corrija."
      );
      return;
    }
    if (senha !== senha2) {
      Alert.alert(
        "Campo Obrigatório!\nA Senha está em Branco.\nPor favor, preencha o campo."
      );
      return;
    }
    Alert.alert("Sucesso!", "Cadastro realizado com Sucesso!")
    router.navigate("/");
  }

  function renderInput (
    label: string,
    placeholder: string,
    value: string | undefined,
    onChangeText: (text: string)=> void,
    icone: string,
    foco: boolean,
    setFoco: (val: boolean)=> void,
    extraPops?: object
  ) {

    return (
      <View>
        <Text style={styles.inputText}>{label}:</Text>
        <View style={[styles.inputContainer, foco && styles.inputFoco]}>
          <Text style={styles.icone}>{icone}</Text>
          <TextInput style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setFoco(true)}
          onBlur={() =>setFoco(false)}
          {...extraPops}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.TelaInteira}>
      <View style={styles.container}>
        <Image source={require("@/assets/images/Logo 3.0.png")} style={styles.logo} resizeMode="contain"/>
        <Text style={styles.titulo}>Auxílio Encceja</Text>
        <Text style={styles.subtitulo}>
          Insira seus Dados Abaixo
        </Text>
      </View>

      <ScrollView style={styles.main} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.cardRegister}>
          {renderInput(
            "Nome Completo",
            "Digite seu Nome Completo",
            namefull,
            setNamefull,
            "👤",
            focoNome,
            setFocoNome,
            {autoCapitalize: "words"}      
          )}

          {renderInput(
            "Email",
            "Digite seu Email",
            email,
            setEmail,
            "✉️",
            focoEmail,
            setFocoEmail,
            {keyboardType: "email-address", autocapitalize: "none"}
          )}

          {renderInput(
            "Telefone",
            "Digite seu Telefone",
            telefone,
            (text) => setNumeroTelefone(formatarTelefone(text)),
            "📞",
            focoTelefone,
            setFocoTelefone,
            {keyboardType: "phone-pad"}
          )}

          {renderInput(
            "Data de Nascimento",
            "DD/MM/AAAA",
            dataNascimento,
            (text) => setDataNascimento(formatarData(text)),
            "📅",
            FocoDataNascimento,
            setFocoDataNascimento,
            {keyboardType: "numeric"}
          )}

          {renderInput(
            "Senha",
            "********",
            senha,
            setSenha,
            "🔒",
            focoSenha,
            setFocoSenha,
            {secureTextEntry: true}       
          )}

          {renderInput(
            "Repetir Senha",
            "********",
            senha2,
            setSenha2,
            "🔒",
            focoSenha2,
            setFocoSenha2,
            {secureTextEntry: true}       
          )}

      <TouchableOpacity style={styles.botao} onPress={onClickRegistrar} activeOpacity={0.8}>
        <Text style={styles.textoBotao}>Registrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerTexto}>
          Já tem uma conta?{" "}
          <Link href={"/"}>          
            <Text style={styles.textoLink}>Entrar</Text>{" "}
          </Link>
        </Text>
      </View>
    </View>
  </ScrollView>   
</View>  
  );
}

const styles = StyleSheet.create({
  TelaInteira: {
    flex: 1,
    backgroundColor: "#D3D3D3",
  },

  container: {
    height: "28%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#34495e",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },

  titulo: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  subtitulo: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
  },

  textoLink: {
    color: "#34495e",
    fontWeight: "bold",
    fontSize: 14
  },

  main: {
    flex: 1,
    paddingHorizontal: 20,
  },

  scrollContent: {
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: "center",
  },

  cardRegister: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#2C3E50"
  },

  inputText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 8,
  },

  inputContainer:{
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 55,
    backgroundColor: "#F8F9FA",
    marginBottom: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    paddingHorizontal: 15,
  },

  inputFoco: {
    borderColor: "#3498D8",
    backgroundColor: "#fff",
  },

  icone: {
    fontSize: 20,
    marginRight: 12,
    
  },
  
  botao: {
    width: "100%",
    height: 55,
    backgroundColor: "#3498D8",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    shadowColor: "#298089",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 6,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  footer: {
    marginTop: 20,
    alignItems: "center",
  },

  footerTexto: {
    color: "#7F8C8D",
    fontSize: 14,
  },
});