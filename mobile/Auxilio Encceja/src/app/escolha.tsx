import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,      
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function EscolhaTipo() {
  const router = useRouter();
  const [tipoSelecionado, setTipoSelecionado] = useState<"student" | "teacher" | null>(null);

  function onClickContinuar() {
    if (!tipoSelecionado) {
        Alert.alert("Atenção", "Por Favor, Selecione o Tipo de Conta antes de Continuar.");
        return;
    }

    Alert.alert(
      "Sucesso",
      `Redirecionando para a Página de Login como ${tipoSelecionado === 'student' ? 'Aluno': 'Professor'}...`
    )

    function hangleGoBack() {
      Alert.alert("Informação", "Voltando para a Página Inicial...");
    }
    
    router.navigate({
        pathname: "/login",
        params: {tipo: tipoSelecionado}
    });
  }

  return (
    <View style={styles.TelaInteira}>    
    <View style={styles.authCard}>

        <View style={styles.container}>
        <Image source={require("@/assets/images/Logo 3.0.png")} style= {styles.logo} resizeMode="contain" />
        <Text style={styles.titulo}>Auxílio Encceja</Text>
        <Text style={styles.subtitulo}>Escolha o Tipo de Conta</Text>
      </View>

      <View style={styles.main}>

        <View style={styles.userOptions}>
            <TouchableOpacity style={[styles.userCard, tipoSelecionado === "student" && styles.userCardSelected]} onPress={() => setTipoSelecionado("student")} activeOpacity={0.8}>
                <Text style={styles.userIcon}>🎓</Text>
                <Text style={styles.userTitle}>Aluno</Text>
                <Text style={styles.userDescription}>Acesse os Materiais de Estudo, Simulados, e Resultados do Encceja como Aluno.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.userCard, tipoSelecionado === "teacher" && styles.userCardSelected]} onPress={() => setTipoSelecionado("teacher")} activeOpacity={0.8}>
                <Text style={styles.userIcon}>👨‍🏫</Text>
                <Text style={styles.userTitle}>Professor</Text>
                <Text style={styles.userDescription}>Acesse as Ferramentas para Orientar e Acompanhar os Alunos do Encceja.</Text>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={[styles.botaoPrimary, !tipoSelecionado && styles.botaoDesabilitado]} onPress={onClickContinuar} activeOpacity={0.8} disabled={!tipoSelecionado}>
            <Text style={styles.textoBotaoPrimary}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSecondary} onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={styles.textoBotaoSecondary}>Voltar a Página Inicial</Text>
        </TouchableOpacity>    
    </View>
    </View>
    </View>    
  );
}

const styles = StyleSheet.create({
  TelaInteira: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  authCard: {
    height: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },

  container: {
    backgroundColor: "#34495e",
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  
  logo: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },

  titulo: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitulo: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 4,
  },

  main: {
    padding: 20,
  },

  userOptions: {
    flexDirection: "column",
    gap: 15,
    marginBottom: 25,
  },

  userCard: {
    borderWidth: 2,
    borderColor: "#e9ecef",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  userCardSelected: {
    borderColor: "#34495e",
    backgroundColor: "rgba(7, 95, 228, 0.05)",
  },

  userIcon: {
    fontSize: 40,
    marginBottom: 10,
  },

  userTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 6,
  },

  userDescription: {
    fontSize: 13,
    color: "#6c757d",
    textAlign: "center",
    lineHeight: 18,
  },

  botaoPrimary: {
    width: "100%",
    height: 50,
    backgroundColor: "#34495e",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  botaoDesabilitado: {
    backgroundColor: "#6c757d",
    shadowOpacity: 0,
    elevation: 0,
    opacity: 0.6,
  },

  textoBotaoPrimary: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },

  botaoSecondary: {
    width: "100%",
    height: 45,
    backgroundColor: "#6c757d",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  textoBotaoSecondary: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});