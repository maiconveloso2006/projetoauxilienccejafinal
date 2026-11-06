import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

type Secao = "perfil" | "preferencias" | "notificacoes" | "seguranca" | "sobre";

export default function Config() {
  const router = useRouter();

  const [secao, setSecao] = useState<Secao>("perfil");
  const [nome, setNome] = useState("João Silva");
  const [email, setEmail] = useState("joaosilva@gmail.com");
  const [telefone, setTelefone] = useState("(00) 00000-0000");
  const [notificacoes, setNotificacoes] = useState(true);
  const [lembretes, setLembretes] = useState(true);
  const [som, setSom] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [foto, setFoto] = useState<string | null>(null);
  const [idioma, setIdioma] = useState("Português");
  const [modalSenha, setModalSenha] = useState(false);
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [emailVerificado, setEmailVerificado] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const salvoLocal = await AsyncStorage.getItem("@auxilio_encceja_config");
        if (salvoLocal) {
          const dados = JSON.parse(salvoLocal);
          if (dados.nome) setNome(dados.nome);
          if (dados.email) setEmail(dados.email);
          if (dados.telefone) setTelefone(dados.telefone);
          if (typeof dados.notificacoes === "boolean") setNotificacoes(dados.notificacoes);
          if (typeof dados.lembretes === "boolean") setLembretes(dados.lembretes);
          if (typeof dados.som === "boolean") setSom(dados.som);
          if (typeof dados.modoEscuro === "boolean") setModoEscuro(dados.modoEscuro);
          if (dados.idioma) setIdioma(dados.idioma);
          if (dados.foto) setFoto(dados.foto);
        }
      } catch {
        Alert.alert("Aviso", "Não foi possível carregar as configurações salvas.");
      }
    })();
  }, []);

  const alterarFoto = async () => {
    const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissao.granted) {
      Alert.alert("Permissão necessária", "Permita o acesso à galeria para escolher uma foto de perfil.");
      return;
    }
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!resultado.canceled && resultado.assets[0]?.uri) setFoto(resultado.assets[0].uri);
  };

  const escolherIdioma = () => Alert.alert("Idioma", "Selecione o idioma da plataforma", [
    { text: "Português", onPress: () => setIdioma("Português") },
    { text: "English", onPress: () => setIdioma("English") },
    { text: "Español", onPress: () => setIdioma("Español") },
    { text: "Cancelar", style: "cancel" },
  ]);

  const salvarSenha = () => {
    if (!senhaAtual || !novaSenha || !confirmarSenha) {
      Alert.alert("Campos obrigatórios", "Preencha todos os campos de senha.");
      return;
    }
    if (novaSenha.length < 8) {
      Alert.alert("Senha fraca", "A nova senha deve ter pelo menos 8 caracteres.");
      return;
    }
    if (novaSenha !== confirmarSenha) {
      Alert.alert("Senhas diferentes", "A confirmação não corresponde à nova senha.");
      return;
    }
    Alert.alert("Ação indisponível", "A tela está pronta para validar a nova senha, mas a alteração real exige integração com o serviço de autenticação.");
    setSenhaAtual("");
    setNovaSenha("");
    setConfirmarSenha("");
    setModalSenha(false);
  };

  const salvarAlteracoes = async () => {
    if (!nome.trim() || !email.trim() || !email.includes("@") || !telefone.trim()) {
      Alert.alert("Verifique os dados", "Informe nome, e-mail válido e telefone antes de salvar.");
      return;
    }
    try {
      await AsyncStorage.setItem("@auxilio_encceja_config", JSON.stringify({
        nome, email, telefone, notificacoes, lembretes, som, modoEscuro, idioma, foto,
      }));
      setSalvo(true);
      Alert.alert("Sucesso", "Suas configurações foram salvas neste dispositivo.");
      setTimeout(() => setSalvo(false), 2500);
    } catch {
      Alert.alert("Erro", "Não foi possível salvar as configurações.");
    }
  };

  const renderMenu = (icone: string, titulo: string, id: Secao) => (
    <TouchableOpacity
      style={[styles.menuConfiguracao, secao === id && styles.menuConfiguracaoAtivo]}
      onPress={() => setSecao(id)}
      activeOpacity={0.8}
    >
      <View style={[styles.menuConfigIcone, secao === id && styles.menuConfigIconeAtivo]}>
        <MaterialCommunityIcons
          name={icone as any}
          size={20}
          color={secao === id ? "#FFFFFF" : "#25717a"}
        />
      </View>
      <Text style={[styles.menuConfigTexto, secao === id && styles.menuConfigTextoAtivo]}>
        {titulo}
      </Text>
      <MaterialCommunityIcons
        name="chevron-right"
        size={20}
        color={secao === id ? "#FFFFFF" : "#7F8C8D"}
      />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.telaInteira, modoEscuro && { backgroundColor: "#17212B" }]}>
      <View style={styles.header}>
        <View style={styles.headerSuperior}>
          <Image
            source={require("@/assets/images/Logo 3.0.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.titulo}>Auxílio Encceja</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
        >
          <TouchableOpacity style={styles.menuBotao} onPress={() => router.navigate("/plataforma")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="home-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBotao} onPress={() => router.navigate("/conteudos")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="archive-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Conteúdos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBotao} onPress={() => router.navigate("/acompanhamento")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="chart-line" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Acompanhamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.menuBotao, styles.menuAtivo]} onPress={() => router.navigate("/config")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="cog-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Configurações</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.pageHeader}>
          <View style={styles.pageHeaderIcon}>
            <MaterialCommunityIcons name="cog-outline" size={28} color="#FFFFFF" />
          </View>
          <View style={styles.pageHeaderText}>
            <Text style={[styles.pageTitle, {color:'#25717A'}]}>Configurações</Text>
            <Text style={styles.pageSubtitle}>
              Personalize sua experiência na plataforma
            </Text>
          </View>
        </View>

        <View style={styles.configLayout}>
          <View style={styles.sidebar}>
            {renderMenu("account-outline", "Perfil", "perfil")}
            {renderMenu("tune-variant", "Preferências", "preferencias")}
            {renderMenu("bell-outline", "Notificações", "notificacoes")}
            {renderMenu("shield-lock-outline", "Segurança", "seguranca")}
            {renderMenu("information-outline", "Sobre", "sobre")}
          </View>

          <View style={styles.contentCard}>
            {secao === "perfil" && (
              <>
                <SectionHeader
                  icone="account-outline"
                  titulo="Meu Perfil"
                  descricao="Atualize suas informações pessoais."
                />

                <View style={styles.avatarArea}>
                  <View style={styles.avatar}>
                    {foto
                      ? <Image source={{ uri: foto }} style={{ width: 70, height: 70, borderRadius: 35 }} />
                      : <MaterialCommunityIcons name="account" size={48} color="#FFFFFF" />}
                  </View>
                  <View style={styles.avatarInfo}>
                    <Text style={styles.avatarNome}>{nome}</Text>
                    <Text style={styles.avatarDescricao}>Estudante ENCCEJA</Text>
                    <TouchableOpacity style={styles.avatarButton} onPress={alterarFoto} activeOpacity={0.8}>
                      <MaterialCommunityIcons name="camera-outline" size={16} color="#25717a" />
                      <Text style={styles.avatarButtonText}>Alterar foto</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <InputField label="Nome completo" value={nome} onChangeText={setNome} icone="account-outline" />
                <InputField label="E-mail" value={email} onChangeText={setEmail} icone="email-outline" keyboardType="email-address" />
                <InputField label="Telefone" value={telefone} onChangeText={setTelefone} icone="phone-outline" keyboardType="phone-pad" />

                <SaveButton onPress={salvarAlteracoes} salvo={salvo} />
              </>
            )}

            {secao === "preferencias" && (
              <>
                <SectionHeader
                  icone="tune-variant"
                  titulo="Preferências"
                  descricao="Escolha como deseja utilizar a plataforma."
                />

                <SettingRow
                  icone="theme-light-dark"
                  titulo="Modo escuro"
                  descricao="Altera a aparência da plataforma para um tema escuro."
                  value={modoEscuro}
                  onValueChange={setModoEscuro}
                />

                <SettingRow
                  icone="volume-high"
                  titulo="Sons da plataforma"
                  descricao="Reproduzir sons em ações e atividades."
                  value={som}
                  onValueChange={setSom}
                />

                <View style={styles.optionBlock}>
                  <View style={styles.optionIcon}>
                    <MaterialCommunityIcons name="translate" size={22} color="#25717a" />
                  </View>
                  <View style={styles.optionInfo}>
                    <Text style={styles.optionTitle}>Idioma</Text>
                    <Text style={styles.optionDescription}>Idioma utilizado na plataforma.</Text>
                  </View>
                  <TouchableOpacity style={styles.languageBadge} onPress={escolherIdioma} activeOpacity={0.8}>
                    <Text style={styles.languageText}>{idioma}</Text>
                    <MaterialCommunityIcons name="chevron-down" size={18} color="#34495e" />
                  </TouchableOpacity>
                </View>

                <SaveButton onPress={salvarAlteracoes} salvo={salvo} />
              </>
            )}

            {secao === "notificacoes" && (
              <>
                <SectionHeader
                  icone="bell-outline"
                  titulo="Notificações"
                  descricao="Controle quais avisos você deseja receber."
                />

                <SettingRow
                  icone="bell-ring-outline"
                  titulo="Notificações gerais"
                  descricao="Receba novidades, avisos e informações importantes."
                  value={notificacoes}
                  onValueChange={setNotificacoes}
                />

                <SettingRow
                  icone="alarm"
                  titulo="Lembretes de estudo"
                  descricao="Receba lembretes para manter sua rotina de estudos."
                  value={lembretes}
                  onValueChange={setLembretes}
                />

                <View style={styles.notificationInfo}>
                  <MaterialCommunityIcons name="information-outline" size={22} color="#25717a" />
                  <Text style={styles.notificationInfoText}>
                    Os lembretes ajudam você a manter uma rotina de estudos e acompanhar suas atividades.
                  </Text>
                </View>

                <SaveButton onPress={salvarAlteracoes} salvo={salvo} />
              </>
            )}

            {secao === "seguranca" && (
              <>
                <SectionHeader
                  icone="shield-lock-outline"
                  titulo="Segurança"
                  descricao="Gerencie sua senha e a segurança da sua conta."
                />

                <TouchableOpacity style={styles.actionCard} onPress={() => setModalSenha(true)} activeOpacity={0.8}>
                  <View style={styles.actionIcon}>
                    <MaterialCommunityIcons name="lock-reset" size={25} color="#25717a" />
                  </View>
                  <View style={styles.actionInfo}>
                    <Text style={styles.actionTitle}>Alterar senha</Text>
                    <Text style={styles.actionDescription}>
                      Atualize sua senha de acesso à plataforma.
                    </Text>
                  </View>
                  <MaterialCommunityIcons name="chevron-right" size={25} color="#34495e" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionCard} onPress={() => Alert.alert("Verificação de e-mail", emailVerificado ? `O e-mail ${email} está marcado como verificado.` : "Solicite um novo link de verificação ao serviço de autenticação.")} activeOpacity={0.8}>
                  <View style={styles.actionIcon}>
                    <MaterialCommunityIcons name="email-check-outline" size={25} color="#25717a" />
                  </View>
                  <View style={styles.actionInfo}>
                    <Text style={styles.actionTitle}>Verificação de e-mail</Text>
                    <Text style={styles.actionDescription}>
                      Seu endereço de e-mail está verificado.
                    </Text>
                  </View>
                  <MaterialCommunityIcons name={emailVerificado ? "check-circle" : "alert-circle-outline"} size={23} color="#25717a" />
                </TouchableOpacity>

                <View style={styles.securityWarning}>
                  <MaterialCommunityIcons name="shield-check-outline" size={24} color="#25717a" />
                  <View style={styles.securityWarningInfo}>
                    <Text style={styles.securityWarningTitle}>Conta protegida</Text>
                    <Text style={styles.securityWarningText}>
                      Nunca compartilhe sua senha com outras pessoas.
                    </Text>
                  </View>
                </View>
              </>
            )}

            {secao === "sobre" && (
              <>
                <SectionHeader
                  icone="information-outline"
                  titulo="Sobre o Auxílio Encceja"
                  descricao="Informações sobre a plataforma."
                />

                <View style={styles.aboutHero}>
                  <Image
                    source={require("@/assets/images/Logo 3.0.png")}
                    style={styles.aboutLogo}
                    resizeMode="contain"
                  />
                  <Text style={styles.aboutTitle}>Auxílio Encceja</Text>
                  <Text style={styles.aboutVersion}>Versão 1.0.0</Text>
                </View>

                <View style={styles.aboutCard}>
                  <Text style={styles.aboutCardTitle}>Sobre a plataforma</Text>
                  <Text style={styles.aboutCardText}>
                    Plataforma de apoio aos estudos para o ENCCEJA, com conteúdos,
                    acompanhamento de desempenho e recursos para ajudar na preparação.
                  </Text>
                </View>

                <View style={styles.aboutItem}>
                  <MaterialCommunityIcons name="copyright" size={21} color="#25717a" />
                  <Text style={styles.aboutItemText}>Auxílio Encceja © 2026</Text>
                </View>
              </>
            )}
          </View>
        </View>

        <TouchableOpacity style={styles.botaoSair} onPress={() => Alert.alert("Sair da conta", "Deseja voltar para a tela inicial?", [
          { text: "Cancelar", style: "cancel" },
          { text: "Sair", onPress: () => router.replace("/") },
        ])} activeOpacity={0.8}>
          <MaterialCommunityIcons name="logout" size={20} color="#FFFFFF" />
          <Text style={styles.textoBotaoSair}>Sair</Text>
        </TouchableOpacity>

        <Modal visible={modalSenha} transparent animationType="fade" onRequestClose={() => setModalSenha(false)}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 22 }}>
            <View style={{ backgroundColor: "#FFFFFF", borderRadius: 18, padding: 20 }}>
              <Text style={{ color: "#2C3E50", fontSize: 20, fontWeight: "800", marginBottom: 14 }}>Alterar senha</Text>
              <TextInput style={styles.inputModal} placeholder="Senha atual" secureTextEntry value={senhaAtual} onChangeText={setSenhaAtual} />
              <TextInput style={styles.inputModal} placeholder="Nova senha (mín. 8 caracteres)" secureTextEntry value={novaSenha} onChangeText={setNovaSenha} />
              <TextInput style={styles.inputModal} placeholder="Confirmar nova senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />
              <TouchableOpacity style={styles.saveButton} onPress={salvarSenha}>
                <Text style={styles.saveButtonText}>Validar alteração</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalSenha(false)} style={{ padding: 12, alignItems: "center" }}>
                <Text style={{ color: "#25717a", fontWeight: "700" }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={styles.footer}>Auxílio Encceja © 2026</Text>
      </ScrollView>
    </View>
  );
}

function SectionHeader({ icone, titulo, descricao }: { icone: string; titulo: string; descricao: string }) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionHeaderIcon}>
        <MaterialCommunityIcons name={icone as any} size={23} color="#FFFFFF" />
      </View>
      <View style={styles.sectionHeaderText}>
        <Text style={styles.sectionTitle}>{titulo}</Text>
        <Text style={styles.sectionDescription}>{descricao}</Text>
      </View>
    </View>
  );
}

function InputField({
  label,
  value,
  onChangeText,
  icone,
  keyboardType,
}: {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  icone: string;
  keyboardType?: any;
}) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name={icone as any} size={20} color="#7F8C8D" />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          keyboardType={keyboardType}
          placeholderTextColor="#AAB0B3"
        />
      </View>
    </View>
  );
}

function SettingRow({
  icone,
  titulo,
  descricao,
  value,
  onValueChange,
}: {
  icone: string;
  titulo: string;
  descricao: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}) {
    
  return (
    <View style={styles.settingRow}>
      <View style={styles.settingIcon}>
        <MaterialCommunityIcons name={icone as any} size={23} color="#25717a" />
      </View>
      <View style={styles.settingInfo}>
        <Text style={styles.settingTitle}>{titulo}</Text>
        <Text style={styles.settingDescription}>{descricao}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: "#D8DDE0", true: "#9FC9C6" }}
        thumbColor={value ? "#25717a" : "#FFFFFF"}
      />
    </View>
  );
}

function SaveButton({ onPress, salvo }: { onPress: () => void; salvo: boolean }) {
  return (
    <TouchableOpacity style={styles.saveButton} onPress={onPress} activeOpacity={0.8}>
      <MaterialCommunityIcons name={salvo ? "check-circle" : "content-save-outline"} size={20} color="#FFFFFF" />
      <Text style={styles.saveButtonText}>{salvo ? "Alterações salvas!" : "Salvar alterações"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  telaInteira: { 
    flex: 1, 
    backgroundColor: "#F4F6F8" 
},
  inputModal: {
    borderWidth: 1, borderColor: "#DDE2E5", borderRadius: 10,
    paddingHorizontal: 12, paddingVertical: 12, marginBottom: 11,
    color: "#2C3E50", backgroundColor: "#FFFFFF",
  },

  header: {
    backgroundColor: "#34495e",
    paddingTop: 38,
    paddingBottom: 9,
    paddingHorizontal: 9,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
},

  headerSuperior: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center" 
},

  logo: { 
    width: 47,
    height: 47, 
    marginRight: 7 
},

  titulo: { 
    color: "#FFFFFF", 
    fontSize: 20, 
    fontWeight: "800" 
},

  menu: { 
    flexDirection: "row", 
    alignItems: "center", 
    paddingTop: 11, 
    paddingBottom: 1, 
    paddingHorizontal: 7 
},

  menuBotao: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center",
    paddingVertical: 8, 
    paddingHorizontal: 5, 
    borderRadius: 8, 
    marginRight: 2, 
    gap: 4,
},

  menuAtivo: { 
    backgroundColor: "rgba(255,255,255,0.25)" 
},

  menuTexto: {
    color: "#FFFFFF", 
    fontSize: 12, 
    fontWeight: "600"
},

  scroll: { 
    flex: 1 
},

  scrollContent: { 
    padding: 18, 
    paddingBottom: 40
},

  pageHeader: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 17, 
    marginBottom: 18, 
    borderWidth: 1,
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 3,
},

  pageHeaderIcon: {
    width: 55,
    height: 55, 
    borderRadius: 17, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 13,
},

  pageHeaderText: { 
    flex: 1 
},

  pageTitle: { 
    color: "#2C3E50", 
    fontSize: 22, 
    fontWeight: "800" 
},

  pageSubtitle: { 
    color: "#7F8C8D", 
    fontSize: 12, 
    lineHeight: 18,
    marginTop: 4 
},

  configLayout: {},
  sidebar: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 18, 
    padding: 8, 
    marginBottom: 14,
    borderWidth: 1, 
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 7, 
    elevation: 2,
},

  menuConfiguracao: {
    minHeight: 53, 
    borderRadius: 12,
    paddingHorizontal: 9, 
    flexDirection: "row",
    alignItems: "center", 
    marginBottom: 4,
},

  menuConfiguracaoAtivo: { 
    backgroundColor: "#25717a" 
},

  menuConfigIcone: {
    width: 38, 
    height: 38, 
    borderRadius: 11, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 10,
},

  menuConfigIconeAtivo: { 
    backgroundColor: "rgba(255,255,255,0.2)" 
},

  menuConfigTexto: { 
    flex: 1, color: "#34495e", 
    fontSize: 12, 
    fontWeight: "700" 
},

  menuConfigTextoAtivo: { 
    color: "#FFFFFF" 
},

  contentCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 20, 
    padding: 17, 
    borderWidth: 1,
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 3,
},

  sectionHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 20 
},

  sectionHeaderIcon: {
    width: 46, 
    height: 46, 
    borderRadius: 13, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  sectionHeaderText: { 
    flex: 1 
},

  sectionTitle: { 
    color: "#2C3E50", 
    fontSize: 18, 
    fontWeight: "800" 
},

  sectionDescription: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    lineHeight: 16,
    marginTop: 3 
},

  avatarArea: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#F4F6F8",
    borderRadius: 16, 
    padding: 13, 
    marginBottom: 20,
},

  avatar: {
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 12,
},

  avatarInfo: { 
    flex: 1 
},

  avatarNome: {
    color: "#2C3E50", 
    fontSize: 16, 
    fontWeight: "800" 
},

  avatarDescricao: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    marginTop: 3 
},

  avatarButton: {
    alignSelf: "flex-start", 
    flexDirection: "row", 
    alignItems: "center",
    backgroundColor: "#EAF4F3", 
    borderRadius: 9, 
    paddingHorizontal: 9, 
    paddingVertical: 6, 
    marginTop: 7, 
    gap: 5,
},

  avatarButtonText: { 
    color: "#25717a", 
    fontSize: 10, 
    fontWeight: "800" 
},

  inputGroup: { 
    marginBottom: 14 
},

  inputLabel: { 
    color: "#34495e", 
    fontSize: 12, 
    fontWeight: "800", 
    marginBottom: 6 
},

  inputContainer: {
    height: 47, 
    borderRadius: 11, 
    borderWidth: 1, 
    borderColor: "#DDE2E5",
    backgroundColor: "#FFFFFF", 
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 12, 
    gap: 9,
},

  input: { 
    flex: 1, 
    color: "#2C3E50", 
    fontSize: 13 
},

  saveButton: {
    height: 48, 
    borderRadius: 12, 
    backgroundColor: "#25717a", 
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center", 
    gap: 7, 
    marginTop: 8,
},

  saveButtonText: { 
    color: "#FFFFFF", 
    fontSize: 13, 
    fontWeight: "800" 
},

  settingRow: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 14,
    borderBottomWidth: 1, 
    borderBottomColor: "#EEF0F2",
},

  settingIcon: {
    width: 44,
    height: 44, 
    borderRadius: 13, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  settingInfo: { 
    flex: 1, 
    paddingRight: 8 
},

  settingTitle: { 
    color: "#2C3E50", 
    fontSize: 13, 
    fontWeight: "800" 
},

  settingDescription: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    lineHeight: 15, 
    marginTop: 3 
},

  optionBlock: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 15,
    borderBottomWidth: 1, 
    borderBottomColor: "#EEF0F2",
},

  optionIcon: {
    width: 44, 
    height: 44, 
    borderRadius: 13, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  optionInfo: { 
    flex: 1 
},

  optionTitle: { 
    color: "#2C3E50", 
    fontSize: 13, 
    fontWeight: "800" 
},

  optionDescription: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    marginTop: 3 
},

  languageBadge: {
    flexDirection: "row", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#DDE2E5",
    borderRadius: 9, 
    paddingHorizontal: 9, 
    paddingVertical: 7,
},

  languageText: { 
    color: "#34495e", 
    fontSize: 10, 
    fontWeight: "700",
    marginRight: 3 
},

  notificationInfo: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EAF4F3",
    borderRadius: 13, 
    padding: 12, 
    marginTop: 17,
},

  notificationInfoText: { 
    flex: 1, 
    color: "#34495e", 
    fontSize: 10, 
    lineHeight: 15, 
    marginLeft: 9 
},

  actionCard: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#F8F9FA",
    borderRadius: 15, 
    padding: 13, 
    marginBottom: 11, 
    borderWidth: 1, 
    borderColor: "#E7EAED",
},

  actionIcon: {
    width: 46, height: 46, 
    borderRadius: 13, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  actionInfo: { 
    flex: 1 
},

  actionTitle: { 
    color: "#2C3E50", 
    fontSize: 13, 
    fontWeight: "800" 
},

  actionDescription: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    lineHeight: 15, 
    marginTop: 3 
},

  securityWarning: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EAF4F3",
    borderRadius: 14, 
    padding: 13, 
    marginTop: 7,
},

  securityWarningInfo: { 
    flex: 1, 
    marginLeft: 9 
},

  securityWarningTitle: { 
    color: "#25717a", 
    fontSize: 12, 
    fontWeight: "800" 
},

  securityWarningText: { 
    color: "#34495e", 
    fontSize: 10,
    marginTop: 3 
},

  aboutHero: { 
    alignItems: "center", 
    paddingVertical: 10, 
    marginBottom: 15 
},

  aboutLogo: { 
    width: 85, 
    height: 85 
},

  aboutTitle: { 
    color: "#2C3E50", 
    fontSize: 20, 
    fontWeight: "800", 
    marginTop: 8 
},

  aboutVersion: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    marginTop: 3 
},

  aboutCard: { 
    backgroundColor: "#F4F6F8", 
    borderRadius: 15, 
    padding: 14, 
    marginBottom: 13 
},

  aboutCardTitle: { 
    color: "#2C3E50", 
    fontSize: 13, 
    fontWeight: "800", 
    marginBottom: 7 
},

  aboutCardText: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    lineHeight: 17 
},

  aboutItem: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingVertical: 12,
    borderBottomWidth: 1, 
    borderBottomColor: "#EEF0F2",
},

  aboutItemText: { 
    color: "#34495e", 
    fontSize: 11, 
    fontWeight: "600", 
    marginLeft: 9 
},

  botaoSair: {
    width: "100%", 
    height: 50, 
    backgroundColor: "#34495e", 
    borderRadius: 12,
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "row",
    gap: 8, 
    marginTop: 18,
},

  textoBotaoSair: { 
    color: "#FFFFFF", 
    fontSize: 15, 
    fontWeight: "800" 
},

  footer: { 
    textAlign: "center", 
    color: "#7F8C8D", 
    fontSize: 12, 
    marginTop: 18 
},
}); 