import { useRouter } from "expo-router";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";

type TabType = "login" | "cadastro";

type Escolaridade = {
  value: string;
  label: string;
};

export default function Login() {
  const router = useRouter();

  const [tabAtiva, setTabAtiva] = useState<TabType>("login");

  // Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginSenha, setLoginSenha] = useState("");
  const [mostrarSenhaLogin, setMostrarSenhaLogin] = useState(false);
  const [lembrar, setLembrar] = useState(false);
  const [alertLogin, setAlertLogin] = useState("");

  // Cadastro
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cadastroEmail, setCadastroEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [cadastroSenha, setCadastroSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenhaCadastro, setMostrarSenhaCadastro] = useState(false);
  const [mostrarSenhaConfirm, setMostrarSenhaConfirm] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [alertCadastro, setAlertCadastro] = useState("");

  // Modais
  const [modalTermos, setModalTermos] = useState(false);
  const [modalPrivacidade, setModalPrivacidade] = useState(false);
  const [modalResetSenha, setModalResetSenha] = useState(false);
  const [modalEscolaridade, setModalEscolaridade] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  // Termos
  const [termosLidos, setTermosLidos] = useState(false);

  const escolaridades: Escolaridade[] = [
    { value: "1", label: "Fundamental Incompleto" },
    { value: "2", label: "Fundamental Completo" },
    { value: "3", label: "Médio Incompleto" },
    { value: "4", label: "Médio Completo" },
    { value: "5", label: "Superior Incompleto" },
    { value: "6", label: "Superior Completo" },
  ];

  function mostrarAlerta(tipo: "login" | "cadastro", mensagem: string) {
    if (tipo === "login") {
      setAlertLogin(mensagem);
      setTimeout(() => setAlertLogin(""), 4000);
    } else {
      setAlertCadastro(mensagem);
      setTimeout(() => setAlertCadastro(""), 4000);
    }
  }

  function calcularForcaSenha(senha: string) {
    let forca = 0;
    if (senha.length >= 8) forca++;
    if (/[a-z]/.test(senha)) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[^a-zA-Z0-9]/.test(senha)) forca++;
    return forca;
  }

  function getForcaInfo(forca: number) {
    if (forca <= 1) return { texto: "Senha Fraca", cor: "#ef4444", largura: 20 };
    if (forca <= 3) return { texto: "Senha Média", cor: "#f59e0b", largura: 60 };
    return { texto: "Senha Forte", cor: "#10b981", largura: 100 };
  }

  function validarCadastro(): string | null {
    if (
      !nome ||
      !sobrenome ||
      !cadastroEmail ||
      !telefone ||
      !dataNascimento ||
      !escolaridade ||
      !cadastroSenha ||
      !confirmarSenha
    ) {
      return "Por favor, preencha todos os campos.";
    }
    if (nome.length < 2 || sobrenome.length < 2) {
      return "Informe nome e sobrenome válidos.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cadastroEmail)) {
      return "Informe um e-mail válido.";
    }
    const phoneDigits = telefone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      return "Informe um telefone válido com DDD.";
    }
    const [dia, mes, ano] = dataNascimento.split("/");
    if (!dia || !mes || !ano) {
      return "Data de nascimento inválida (DD/MM/AAAA).";
    }
    const birth = new Date(Number(ano), Number(mes) - 1, Number(dia));
    if (isNaN(birth.getTime())) return "Data de nascimento inválida.";
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const mDiff = today.getMonth() - birth.getMonth();
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) age--;
    if (age < 15) return "É necessário ter pelo menos 15 anos para se cadastrar.";
    if (cadastroSenha !== confirmarSenha) return "As senhas não coincidem.";
    if (!termosAceitos) {
      return "Leia e aceite os termos de serviço para continuar.";
    }
    return null;
  }

  function handleLogin() {
    if (!loginEmail || !loginSenha) {
      mostrarAlerta("login", "Por favor, preencha todos os campos.");
      return;
    }
    router.navigate("/plataforma");
  }

  function handleCadastro() {
    const erro = validarCadastro();
    if (erro) {
      mostrarAlerta("cadastro", erro);
      if (erro.indexOf("termos") !== -1) {
        setTermosLidos(false);
        setModalTermos(true);
      }
      return;
    }
    setCadastroSucesso(true);
  }

  function handleResetSenha() {
    if (!resetEmail) {
      return;
    }
    setModalResetSenha(false);
    setResetEmail("");
    mostrarAlerta("login", "Email de redefinição enviado com sucesso!");
  }

  function handleScrollTermos(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
    const progress = contentSize.height - layoutMeasurement.height;
    if (progress > 0 && contentOffset.y >= progress - 20) {
      setTermosLidos(true);
    }
  }

  function aceitarTermos() {
    if (!termosLidos) return;
    setTermosAceitos(true);
    setModalTermos(false);
  }

  function abrirTermos() {
    setTermosLidos(false);
    setModalTermos(true);
  }

  function formatarTelefone(texto: string) {
    const digits = texto.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function formatarData(texto: string) {
    const digits = texto.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }

  function limparFormCadastro() {
    setNome("");
    setSobrenome("");
    setCadastroEmail("");
    setTelefone("");
    setDataNascimento("");
    setEscolaridade("");
    setCadastroSenha("");
    setConfirmarSenha("");
    setTermosAceitos(false);
    setTermosLidos(false);
  }

  const forcaSenha = calcularForcaSenha(cadastroSenha);
  const forcaInfo = getForcaInfo(forcaSenha);

  return (
    <KeyboardAvoidingView
      style={styles.TelaInteira}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 24}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="interactive"
          contentInsetAdjustmentBehavior="automatic"
          alwaysBounceVertical={false}
          bounces={false}
        >
        <View style={styles.cardAuth}>
          <View style={styles.headerAuth}>
            <Image
              source={require("@/assets/images/Logo 3.0.png")}
              style={styles.logoHeader}
              resizeMode="contain"
            />
            <Text style={styles.tituloHeader}>Auxílio Encceja</Text>
            <Text style={styles.subtituloHeader}>
              Plataforma de Estudos para o Encceja
            </Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tab, tabAtiva === "login" && styles.tabAtiva]}
              onPress={() => setTabAtiva("login")}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons
                name="login"
                size={16}
                color={tabAtiva === "login" ? "#FFFFFF" : "#7F8C8D"}
              />
              <Text
                style={[
                  styles.tabTexto,
                  tabAtiva === "login" && styles.tabTextoAtivo,
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, tabAtiva === "cadastro" && styles.tabAtiva]}
              onPress={() => {
                setTabAtiva("cadastro");
                setCadastroSucesso(false);
              }}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons
                name="account-plus"
                size={16}
                color={tabAtiva === "cadastro" ? "#FFFFFF" : "#7F8C8D"}
              />
              <Text
                style={[
                  styles.tabTexto,
                  tabAtiva === "cadastro" && styles.tabTextoAtivo,
                ]}
              >
                Cadastro
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.conteudo}>
            {/* Login */}
            {tabAtiva === "login" && (
              <View>
                {alertLogin ? (
                  <View style={styles.alerta}>
                    <MaterialCommunityIcons
                      name="alert-circle"
                      size={18}
                      color="#ef4444"
                    />
                    <Text style={styles.alertaTexto}>{alertLogin}</Text>
                  </View>
                ) : null}

                <View style={styles.infoBox}>
                  <MaterialCommunityIcons
                    name="information"
                    size={18}
                    color="#25717a"
                  />
                  <Text style={styles.infoTexto}>
                    <Text style={styles.infoDestaque}>Novo(a) por aqui? </Text>
                    Cadastre-se para ter acesso a todos os recursos da plataforma
                    do Auxílio Encceja.
                  </Text>
                </View>

                {/* Email */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="email" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="Digite seu Email"
                      placeholderTextColor="#7F8C8D"
                      value={loginEmail}
                      onChangeText={setLoginEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* Senha */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="lock" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={[styles.input, { paddingRight: 50 }]}
                      placeholder="Digite sua Senha"
                      placeholderTextColor="#7F8C8D"
                      value={loginSenha}
                      onChangeText={setLoginSenha}
                      secureTextEntry={!mostrarSenhaLogin}
                    />
                    <TouchableOpacity
                      style={styles.senhaToggle}
                      onPress={() => setMostrarSenhaLogin(!mostrarSenhaLogin)}
                      activeOpacity={0.7}
                    >
                      <MaterialCommunityIcons
                        name={mostrarSenhaLogin ? "eye-off" : "eye"}
                        size={20}
                        color="#7F8C8D"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Lembrar e esqueci senha */}
                <View style={styles.linhaOpcoes}>
                  <TouchableOpacity
                    style={styles.checkContainer}
                    onPress={() => setLembrar(!lembrar)}
                    activeOpacity={0.7}
                  >
                    <View style={[styles.checkbox, lembrar && styles.checkboxAtivo]}>
                      {lembrar && (
                        <MaterialCommunityIcons
                          name="check"
                          size={14}
                          color="#FFFFFF"
                        />
                      )}
                    </View>
                    <Text style={styles.checkTexto}>Lembrar-me</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => setModalResetSenha(true)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.linkEsqueci}>Esqueceu sua senha?</Text>
                  </TouchableOpacity>
                </View>

                {/* Botão Entrar */}
                <TouchableOpacity
                  style={styles.botaoPrimario}
                  onPress={handleLogin}
                  activeOpacity={0.8}
                >
                  <MaterialCommunityIcons name="login" size={20} color="#FFFFFF" />
                  <Text style={styles.botaoPrimarioTexto}>Entrar</Text>
                </TouchableOpacity>

                {/* Divisor */}
                <View style={styles.divisor}>
                  <View style={styles.divisorLinha} />
                  <Text style={styles.divisorTexto}>ou entre com</Text>
                  <View style={styles.divisorLinha} />
                </View>

                {/* Social */}
                <View style={styles.socialContainer}>
                  <TouchableOpacity style={styles.socialBotao} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="google" size={22} color="#7F8C8D" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialBotao} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="facebook" size={22} color="#7F8C8D" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.socialBotao} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="email" size={22} color="#7F8C8D" />
                  </TouchableOpacity>
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                  <Text style={styles.footerTexto}>Não tem uma conta? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setTabAtiva("cadastro");
                      setCadastroSucesso(false);
                    }}
                  >
                    <Text style={styles.footerLink}>Cadastre-se</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {/* Cadastro */}
            {tabAtiva === "cadastro" && !cadastroSucesso && (
              <View>
                {alertCadastro ? (
                  <View style={styles.alerta}>
                    <MaterialCommunityIcons
                      name="alert-circle"
                      size={18}
                      color="#ef4444"
                    />
                    <Text style={styles.alertaTexto}>{alertCadastro}</Text>
                  </View>
                ) : null}

                <View style={styles.stepIndicator}>
                  <View style={styles.step}>
                    <View style={[styles.stepCircle, styles.stepCircleAtivo]}>
                      <Text style={styles.stepCircleTexto}>1</Text>
                    </View>
                    <Text style={[styles.stepLabel, styles.stepLabelAtivo]}>
                      Informações{"\n"}Pessoais
                    </Text>
                  </View>
                  <View style={styles.stepLinha} />
                  <View style={styles.step}>
                    <View style={[styles.stepCircle, styles.stepCircleAtivo]}>
                      <Text style={styles.stepCircleTexto}>2</Text>
                    </View>
                    <Text style={[styles.stepLabel, styles.stepLabelAtivo]}>
                      Criação{"\n"}de Senha
                    </Text>
                  </View>
                </View>

                {/* Step 1 marker */}
                <View style={styles.stepMarker}>
                  <View style={styles.stepMarkerNumero}>
                    <Text style={styles.stepMarkerNumeroTexto}>1</Text>
                  </View>
                  <Text style={styles.stepMarkerTexto}>
                    Informações Pessoais
                  </Text>
                </View>

                {/* Nome e Sobrenome */}
                <View style={styles.linhaDupla}>
                  <View style={styles.campoContainerHalf}>
                    <View style={styles.inputGrupo}>
                      <View style={styles.inputIcone}>
                        <MaterialCommunityIcons
                          name="account"
                          size={20}
                          color="#FFFFFF"
                        />
                      </View>
                      <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#7F8C8D"
                        value={nome}
                        onChangeText={setNome}
                      />
                    </View>
                  </View>
                  <View style={styles.campoContainerHalf}>
                    <View style={styles.inputGrupo}>
                      <View style={styles.inputIcone}>
                        <MaterialCommunityIcons
                          name="account"
                          size={20}
                          color="#FFFFFF"
                        />
                      </View>
                      <TextInput
                        style={styles.input}
                        placeholder="Sobrenome"
                        placeholderTextColor="#7F8C8D"
                        value={sobrenome}
                        onChangeText={setSobrenome}
                      />
                    </View>
                  </View>
                </View>

                {/* Email */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="email" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="E-mail"
                      placeholderTextColor="#7F8C8D"
                      value={cadastroEmail}
                      onChangeText={setCadastroEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                </View>

                {/* Telefone */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="phone" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="(11) 99999-9999"
                      placeholderTextColor="#7F8C8D"
                      value={telefone}
                      onChangeText={(t) => setTelefone(formatarTelefone(t))}
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>

                {/* Data de nascimento */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons
                        name="calendar"
                        size={20}
                        color="#FFFFFF"
                      />
                    </View>
                    <TextInput
                      style={styles.input}
                      placeholder="DD/MM/AAAA"
                      placeholderTextColor="#7F8C8D"
                      value={dataNascimento}
                      onChangeText={(t) => setDataNascimento(formatarData(t))}
                      keyboardType="numeric"
                      maxLength={10}
                    />
                  </View>
                </View>

                {/* Escolaridade */}
                <View style={styles.campoContainer}>
                  <TouchableOpacity
                    style={styles.inputGrupo}
                    onPress={() => setModalEscolaridade(true)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="school" size={20} color="#FFFFFF" />
                    </View>
                    <View style={styles.selectContainer}>
                      <Text
                        style={[
                          styles.selectTexto,
                          !escolaridade && styles.selectPlaceholder,
                        ]}
                        numberOfLines={1}
                      >
                        {escolaridade
                          ? escolaridades.find((e) => e.value === escolaridade)
                              ?.label
                          : "Escolaridade"}
                      </Text>
                      <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color="#7F8C8D"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.stepMarker}>
                  <View style={styles.stepMarkerNumero}>
                    <Text style={styles.stepMarkerNumeroTexto}>2</Text>
                  </View>
                  <Text style={styles.stepMarkerTexto}>Criação de Senha</Text>
                </View>

                {/* Senha */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="lock" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={[styles.input, { paddingRight: 50 }]}
                      placeholder="Senha"
                      placeholderTextColor="#7F8C8D"
                      value={cadastroSenha}
                      onChangeText={setCadastroSenha}
                      secureTextEntry={!mostrarSenhaCadastro}
                    />
                    <TouchableOpacity
                      style={styles.senhaToggle}
                      onPress={() => setMostrarSenhaCadastro(!mostrarSenhaCadastro)}
                      activeOpacity={0.7}
                    >
                      <MaterialCommunityIcons
                        name={mostrarSenhaCadastro ? "eye-off" : "eye"}
                        size={20}
                        color="#7F8C8D"
                      />
                    </TouchableOpacity>
                  </View>
                  {cadastroSenha ? (
                    <View style={styles.forcaSenhaContainer}>
                      <View style={styles.forcaSenhaBarraFundo}>
                        <View
                          style={[
                            styles.forcaSenhaBarra,
                            {
                              width: `${forcaInfo.largura}%`,
                              backgroundColor: forcaInfo.cor,
                            },
                          ]}
                        />
                      </View>
                      <Text style={styles.forcaSenhaTexto}>{forcaInfo.texto}</Text>
                    </View>
                  ) : null}
                </View>

                {/* Confirmar senha */}
                <View style={styles.campoContainer}>
                  <View style={styles.inputGrupo}>
                    <View style={styles.inputIcone}>
                      <MaterialCommunityIcons name="lock" size={20} color="#FFFFFF" />
                    </View>
                    <TextInput
                      style={[styles.input, { paddingRight: 50 }]}
                      placeholder="Confirme sua Senha"
                      placeholderTextColor="#7F8C8D"
                      value={confirmarSenha}
                      onChangeText={setConfirmarSenha}
                      secureTextEntry={!mostrarSenhaConfirm}
                    />
                    <TouchableOpacity
                      style={styles.senhaToggle}
                      onPress={() => setMostrarSenhaConfirm(!mostrarSenhaConfirm)}
                      activeOpacity={0.7}
                    >
                      <MaterialCommunityIcons
                        name={mostrarSenhaConfirm ? "eye-off" : "eye"}
                        size={20}
                        color="#7F8C8D"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Termos */}
                <TouchableOpacity
                  style={styles.termosContainer}
                  onPress={() => (termosAceitos ? setTermosAceitos(false) : abrirTermos())}
                  activeOpacity={0.7}
                >
                  <View
                    style={[styles.checkbox, termosAceitos && styles.checkboxAtivo]}
                  >
                    {termosAceitos && (
                      <MaterialCommunityIcons
                        name="check"
                        size={14}
                        color="#FFFFFF"
                      />
                    )}
                  </View>
                  <Text style={styles.termosTexto}>
                    Eu li e concordo com os{" "}
                    <Text style={styles.termosLink} onPress={abrirTermos}>
                      Termos de Serviço
                    </Text>{" "}
                    e a{" "}
                    <Text
                      style={styles.termosLink}
                      onPress={() => setModalPrivacidade(true)}
                    >
                      Política de Privacidade
                    </Text>
                  </Text>
                </TouchableOpacity>

                {!termosAceitos && (
                  <Text style={styles.termosHint}>
                    Leia os termos até o final para habilitar o aceite.
                  </Text>
                )}

                {/* Botão Cadastrar */}
                <TouchableOpacity
                  style={styles.botaoPrimario}
                  onPress={handleCadastro}
                  activeOpacity={0.8}
                >
                  <MaterialCommunityIcons
                    name="account-plus"
                    size={20}
                    color="#FFFFFF"
                  />
                  <Text style={styles.botaoPrimarioTexto}>Cadastrar</Text>
                </TouchableOpacity>

                {/* Footer */}
                <View style={styles.footerContainer}>
                  <Text style={styles.footerTexto}>Já tem uma conta? </Text>
                  <TouchableOpacity onPress={() => setTabAtiva("login")}>
                    <Text style={styles.footerLink}>Entrar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {tabAtiva === "cadastro" && cadastroSucesso && (
              <View style={styles.sucessoContainer}>
                <View style={styles.sucessoIcone}>
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={80}
                    color="#10b981"
                  />
                </View>
                <Text style={styles.sucessoTitulo}>
                  Cadastro Concluído com Sucesso!
                </Text>
                <Text style={styles.sucessoTexto}>
                  Parabéns! Sua conta foi criada com sucesso na plataforma Auxílio
                  Encceja.
                </Text>
                <TouchableOpacity
                  style={styles.botaoPrimario}
                  onPress={() => {
                    setTabAtiva("login");
                    setCadastroSucesso(false);
                    limparFormCadastro();
                  }}
                  activeOpacity={0.8}
                >
                  <MaterialCommunityIcons name="login" size={20} color="#FFFFFF" />
                  <Text style={styles.botaoPrimarioTexto}>Fazer Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <Text style={styles.footerCopy}>Auxílio Encceja © 2026</Text>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* Modal dos Termos */}
      <Modal
        visible={modalTermos}
        transparent
        animationType="fade"
        onRequestClose={() => setModalTermos(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderLeft}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.modalTitle} numberOfLines={2}>
                  Termos de Serviço — leitura obrigatória
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalTermos(false)}
                style={styles.modalCloseBtn}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBodyTermos}>
              <View style={styles.termosHintBox}>
                <View style={styles.termosHintLinha}>
                  <MaterialCommunityIcons
                    name="information"
                    size={16}
                    color="#25717a"
                  />
                  <Text style={styles.termosHintTexto}>
                    Role até o final para liberar o botão de aceite.
                  </Text>
                </View>
                <View style={styles.termosProgressoFundo}>
                  <View
                    style={[
                      styles.termosProgressoBarra,
                      { width: termosLidos ? "100%" : "30%" },
                    ]}
                  />
                </View>
              </View>

              <ScrollView
                onScroll={handleScrollTermos}
                scrollEventThrottle={16}
                style={styles.termosScroll}
                contentContainerStyle={styles.termosScrollContent}
              >
                <Text style={styles.termosTitulo}>1. Introdução</Text>
                <Text style={styles.termosParagrafo}>
                  Bem-vindo ao Auxílio Encceja, plataforma de estudos para o Exame
                  Nacional para Certificação de Competências de Jovens e Adultos
                  (Encceja).
                </Text>
                <Text style={styles.termosParagrafo}>
                  Estes termos regem o uso do site, aplicativos e serviços
                  relacionados oferecidos pela equipe do projeto.
                </Text>

                <Text style={styles.termosTitulo}>2. Aceitação dos Termos</Text>
                <Text style={styles.termosParagrafo}>
                  Ao utilizar o Auxílio Encceja, você concorda com estes Termos e
                  com as leis aplicáveis. Se não concordar, não utilize o serviço.
                </Text>

                <Text style={styles.termosTitulo}>3. Conta do Usuário</Text>
                <Text style={styles.termosParagrafo}>
                  Para acessar recursos da plataforma, você pode precisar criar uma
                  conta. Você é responsável pela confidencialidade da senha e pelas
                  atividades realizadas na conta.
                </Text>

                <Text style={styles.termosTitulo}>4. Propriedade Intelectual</Text>
                <Text style={styles.termosParagrafo}>
                  Conteúdos, imagens, software e design são protegidos por direitos
                  autorais. O uso é permitido apenas para fins pessoais e de estudo.
                </Text>

                <Text style={styles.termosTitulo}>5. Uso do Serviço</Text>
                <Text style={styles.termosParagrafo}>
                  Você concorda em usar o serviço de forma legal e ética, sem
                  prejudicar o funcionamento da plataforma ou de outros usuários.
                </Text>

                <Text style={styles.termosTitulo}>6. Conteúdo do Usuário</Text>
                <Text style={styles.termosParagrafo}>
                  Você é responsável pelo conteúdo que publicar e garante possuir
                  direitos para utilizá-lo na plataforma.
                </Text>

                <Text style={styles.termosTitulo}>
                  7. Limitação de Responsabilidade
                </Text>
                <Text style={styles.termosParagrafo}>
                  O Auxílio Encceja é fornecido "como está", sem garantias expressas
                  ou implícitas de adequação a um propósito específico.
                </Text>

                <Text style={styles.termosTitulo}>8. Modificações</Text>
                <Text style={styles.termosParagrafo}>
                  Estes termos podem ser atualizados a qualquer momento. O uso
                  continuado após alterações implica aceite das novas condições.
                </Text>

                <Text style={styles.termosTitulo}>9. Contato</Text>
                <Text style={styles.termosParagrafo}>
                  Dúvidas: contato@auxilioencceja.com.br
                </Text>
              </ScrollView>

              <View style={styles.modalBotoes}>
                <TouchableOpacity
                  style={styles.btnSecundario}
                  onPress={() => setModalTermos(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnSecundarioTexto}>Não aceito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btnPrimarioModal,
                    !termosLidos && styles.btnPrimarioDisabled,
                  ]}
                  onPress={aceitarTermos}
                  disabled={!termosLidos}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnPrimarioModalTexto}>
                    Li e aceito os Termos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de Privacidade */}
      <Modal
        visible={modalPrivacidade}
        transparent
        animationType="fade"
        onRequestClose={() => setModalPrivacidade(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderLeft}>
                <MaterialCommunityIcons
                  name="shield-lock"
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.modalTitle} numberOfLines={2}>
                  Política de Privacidade
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalPrivacidade(false)}
                style={styles.modalCloseBtn}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <ScrollView
              style={styles.modalBodyPrivacidade}
              contentContainerStyle={{ padding: 20 }}
            >
              <Text style={styles.termosParagrafo}>
                A política de privacidade da plataforma Auxílio Encceja descreve
                como coletamos, usamos e protegemos suas informações pessoais. Ao
                utilizar nossos serviços, você concorda com esta política.
              </Text>

              <Text style={styles.termosTitulo}>
                1. Informações que coletamos
              </Text>
              <Text style={styles.termosParagrafo}>
                Coletamos informações que você nos fornece diretamente, como seu
                nome, endereço de email, telefone e informações demográficas.
                Também coletamos informações sobre suas atividades no serviço, como
                histórico de uso e preferências.
              </Text>

              <Text style={styles.termosTitulo}>
                2. Como usamos suas informações
              </Text>
              <Text style={styles.termosParagrafo}>
                Usamos suas informações para fornecer, operar e melhorar nossos
                serviços, desenvolver novos produtos e serviços, e para outros
                propósitos descritos em nossa política de privacidade.
              </Text>

              <Text style={styles.termosTitulo}>
                3. Compartilhamento de informações
              </Text>
              <Text style={styles.termosParagrafo}>
                Não vendemos suas informações pessoais a terceiros. Podemos
                compartilhar suas informações com provedores de serviços que
                executam serviços em nosso nome, com suas permissões, ou quando
                exigido por lei.
              </Text>

              <Text style={styles.termosTitulo}>
                4. Segurança das informações
              </Text>
              <Text style={styles.termosParagrafo}>
                Implementamos medidas de segurança técnicas e organizacionais para
                proteger suas informações contra acesso não autorizado, uso
                indevido ou divulgação.
              </Text>

              <Text style={styles.termosTitulo}>5. Seus direitos</Text>
              <Text style={styles.termosParagrafo}>
                Você tem o direito de acessar, corrigir, atualizar ou excluir suas
                informações pessoais. Você também tem o direito de retirar seu
                consentimento para o processamento de suas informações pessoais.
              </Text>
            </ScrollView>

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={styles.botaoPrimario}
                onPress={() => setModalPrivacidade(false)}
                activeOpacity={0.8}
              >
                <Text style={styles.botaoPrimarioTexto}>Entendido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Reset da Senha */}
      <Modal
        visible={modalResetSenha}
        transparent
        animationType="fade"
        onRequestClose={() => setModalResetSenha(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainerReset}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderLeft}>
                <MaterialCommunityIcons name="key" size={20} color="#FFFFFF" />
                <Text style={styles.modalTitle} numberOfLines={2}>
                  Redefinir Senha
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalResetSenha(false)}
                style={styles.modalCloseBtn}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <View style={{ padding: 20 }}>
              <Text style={styles.resetSubtitulo}>
                Por favor, insira seu email para receber um link de redefinição de
                senha.
              </Text>
              <View style={styles.inputGrupo}>
                <View style={styles.inputIcone}>
                  <MaterialCommunityIcons name="email" size={20} color="#FFFFFF" />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="joao.silva@email.com"
                  placeholderTextColor="#7F8C8D"
                  value={resetEmail}
                  onChangeText={setResetEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
              <TouchableOpacity
                style={[styles.botaoPrimario, { marginBottom: 0 }]}
                onPress={handleResetSenha}
                activeOpacity={0.8}
              >
                <Text style={styles.botaoPrimarioTexto}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal Escolaridade */}
      <Modal
        visible={modalEscolaridade}
        transparent
        animationType="fade"
        onRequestClose={() => setModalEscolaridade(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalEscolaridade(false)}
        >
          <View
            style={styles.modalContainerSelect}
            onStartShouldSetResponder={() => true}
          >
            <View style={styles.modalHeader}>
              <View style={styles.modalHeaderLeft}>
                <MaterialCommunityIcons name="school" size={20} color="#FFFFFF" />
                <Text style={styles.modalTitle} numberOfLines={1}>
                  Selecione sua Escolaridade
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setModalEscolaridade(false)}
                style={styles.modalCloseBtn}
                activeOpacity={0.7}
              >
                <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.opcoesLista} contentContainerStyle={{ padding: 8 }}>
              {escolaridades.map((opt) => (
                <TouchableOpacity
                  key={opt.value}
                  style={[
                    styles.opcaoItem,
                    escolaridade === opt.value && styles.opcaoItemAtiva,
                  ]}
                  onPress={() => {
                    setEscolaridade(opt.value);
                    setModalEscolaridade(false);
                  }}
                  activeOpacity={0.7}
                >
                  <Text
                    style={[
                      styles.opcaoTexto,
                      escolaridade === opt.value && styles.opcaoTextoAtivo,
                    ]}
                  >
                    {opt.label}
                  </Text>
                  {escolaridade === opt.value && (
                    <MaterialCommunityIcons
                      name="check"
                      size={20}
                      color="#25717a"
                    />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  TelaInteira: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  scrollContent: {
    flexGrow: 1,
    padding: 18,
    paddingBottom: 40,
    justifyContent: "center",
  },

  cardAuth: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 8,
  },

  headerAuth: {
    backgroundColor: "#34495e",
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  logoHeader: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },

  tituloHeader: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  subtituloHeader: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 13,
    marginTop: 4,
  },

  tabs: {
    flexDirection: "row",
    gap: 8,
    padding: 16,
    paddingBottom: 0,
  },

  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 25,
    backgroundColor: "#F4F6F8",
    borderWidth: 2,
    borderColor: "#E7EAED",
  },

  tabAtiva: {
    backgroundColor: "#25717a",
    borderColor: "transparent",
    shadowColor: "#25717a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },

  tabTexto: {
    color: "#7F8C8D",
    fontSize: 14,
    fontWeight: "600",
  },

  tabTextoAtivo: {
    color: "#FFFFFF",
  },

  conteudo: {
    padding: 20,
  },

  alerta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(239, 68, 68, 0.1)",
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
  },

  alertaTexto: {
    flex: 1,
    color: "#ef4444",
    fontSize: 13,
    fontWeight: "500",
  },

  infoBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    backgroundColor: "rgba(37, 113, 122, 0.06)",
    borderLeftWidth: 4,
    borderLeftColor: "#25717a",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 18,
  },

  infoTexto: {
    flex: 1,
    color: "#64748b",
    fontSize: 13,
    lineHeight: 19,
  },

  infoDestaque: {
    color: "#34495e",
    fontWeight: "700",
  },

  campoContainer: {
    marginBottom: 14,
  },

  linhaDupla: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 14,
  },

  campoContainerHalf: {
    flex: 1,
  },

  inputGrupo: {
    flexDirection: "row",
    alignItems: "stretch",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E7EAED",
    overflow: "hidden",
  },

  inputIcone: {
    width: 50,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 14,
    color: "#2C3E50",
    backgroundColor: "#FFFFFF",
    textAlignVertical: "center",
    includeFontPadding: false,
  },

  senhaToggle: {
    position: "absolute",
    right: 10,
    top: 0,
    bottom: 0,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  selectContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  selectTexto: {
    flex: 1,
    color: "#2C3E50",
    fontSize: 14,
  },

  selectPlaceholder: {
    color: "#7F8C8D",
  },

  linhaOpcoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
    flexWrap: "wrap",
    gap: 8,
  },

  checkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#E7EAED",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxAtivo: {
    backgroundColor: "#25717a",
    borderColor: "#25717a",
  },

  checkTexto: {
    color: "#64748b",
    fontSize: 13,
  },

  linkEsqueci: {
    color: "#25717a",
    fontSize: 13,
    fontWeight: "600",
  },

  botaoPrimario: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#25717a",
    paddingVertical: 15,
    borderRadius: 12,
    shadowColor: "#25717a",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },

  botaoPrimarioTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  divisorLinha: {
    flex: 1,
    height: 1,
    backgroundColor: "#E7EAED",
  },

  divisorTexto: {
    color: "#7F8C8D",
    fontSize: 11,
    fontWeight: "500",
    textTransform: "uppercase",
    marginHorizontal: 12,
    letterSpacing: 0.5,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 14,
    marginBottom: 18,
  },

  socialBotao: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E7EAED",
    alignItems: "center",
    justifyContent: "center",
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  footerTexto: {
    color: "#64748b",
    fontSize: 13,
  },

  footerLink: {
    color: "#25717a",
    fontSize: 13,
    fontWeight: "700",
  },

  footerCopy: {
    textAlign: "center",
    color: "#7F8C8D",
    fontSize: 12,
    marginTop: 18,
  },

  stepIndicator: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    paddingHorizontal: 4,
  },

  step: {
    alignItems: "center",
    flex: 1,
  },

  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F4F6F8",
    borderWidth: 2,
    borderColor: "#E7EAED",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },

  stepCircleAtivo: {
    backgroundColor: "#25717a",
    borderColor: "transparent",
  },

  stepCircleTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  stepLabel: {
    fontSize: 10,
    color: "#7F8C8D",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 13,
  },

  stepLabelAtivo: {
    color: "#34495e",
    fontWeight: "700",
  },

  stepLinha: {
    height: 2,
    flex: 0.2,
    backgroundColor: "#25717a",
    marginBottom: 24,
  },

  stepMarker: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(37, 113, 122, 0.06)",
    borderLeftWidth: 4,
    borderLeftColor: "#25717a",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    marginTop: 4,
    gap: 12,
  },

  stepMarkerNumero: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#25717a",
    alignItems: "center",
    justifyContent: "center",
  },

  stepMarkerNumeroTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  stepMarkerTexto: {
    color: "#34495e",
    fontSize: 14,
    fontWeight: "700",
  },

  forcaSenhaContainer: {
    marginTop: 8,
  },

  forcaSenhaBarraFundo: {
    height: 6,
    borderRadius: 6,
    backgroundColor: "#E7EAED",
    overflow: "hidden",
  },

  forcaSenhaBarra: {
    height: "100%",
    borderRadius: 6,
  },

  forcaSenhaTexto: {
    fontSize: 11,
    color: "#7F8C8D",
    marginTop: 4,
    fontWeight: "500",
  },

  termosContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginBottom: 8,
    marginTop: 4,
  },

  termosTexto: {
    flex: 1,
    color: "#64748b",
    fontSize: 12,
    lineHeight: 18,
  },

  termosLink: {
    color: "#25717a",
    fontWeight: "700",
  },

  termosHint: {
    color: "#7F8C8D",
    fontSize: 11,
    marginBottom: 16,
    marginLeft: 32,
  },

  sucessoContainer: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },

  sucessoIcone: {
    marginBottom: 20,
  },

  sucessoTitulo: {
    color: "#34495e",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 12,
  },

  sucessoTexto: {
    color: "#64748b",
    fontSize: 14,
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 24,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.55)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalContainer: {
    width: "100%",
    maxWidth: 420,
    maxHeight: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  modalContainerReset: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  modalContainerSelect: {
    width: "100%",
    maxWidth: 380,
    maxHeight: "70%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 12,
  },

  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#34495e",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  modalHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
    paddingRight: 8,
  },

  modalTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
    flex: 1,
    flexWrap: "wrap",
  },

  modalCloseBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  modalBodyTermos: {
    padding: 16,
  },

  modalBodyPrivacidade: {
    flex: 1,
  },

  termosHintBox: {
    backgroundColor: "#F4F6F8",
    borderLeftWidth: 4,
    borderLeftColor: "#25717a",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
  },

  termosHintLinha: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  termosHintTexto: {
    color: "#64748b",
    fontSize: 13,
    flex: 1,
  },

  termosProgressoFundo: {
    height: 6,
    backgroundColor: "#E7EAED",
    borderRadius: 6,
    marginTop: 8,
    overflow: "hidden",
  },

  termosProgressoBarra: {
    height: "100%",
    backgroundColor: "#25717a",
    borderRadius: 6,
  },

  termosScroll: {
    maxHeight: 320,
  },

  termosScrollContent: {
    padding: 8,
  },

  termosTitulo: {
    color: "#34495e",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 6,
  },

  termosParagrafo: {
    color: "#64748b",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 8,
  },

  modalBotoes: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },

  btnSecundario: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#E7EAED",
    alignItems: "center",
    justifyContent: "center",
  },

  btnSecundarioTexto: {
    color: "#7F8C8D",
    fontSize: 14,
    fontWeight: "700",
  },

  btnPrimarioModal: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#25717a",
    alignItems: "center",
    justifyContent: "center",
  },

  btnPrimarioDisabled: {
    backgroundColor: "#CBD5E1",
  },

  btnPrimarioModalTexto: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  modalFooter: {
    backgroundColor: "#F4F6F8",
    borderTopWidth: 1,
    borderTopColor: "#E7EAED",
    padding: 16,
  },

  resetSubtitulo: {
    color: "#64748b",
    fontSize: 13,
    marginBottom: 14,
    lineHeight: 19,
  },

  opcoesLista: {
    padding: 4,
  },

  opcaoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 4,
  },

  opcaoItemAtiva: {
    backgroundColor: "rgba(37, 113, 122, 0.08)",
  },

  opcaoTexto: {
    flex: 1,
    color: "#2C3E50",
    fontSize: 14,
    fontWeight: "500",
  },

  opcaoTextoAtivo: {
    color: "#25717a",
    fontWeight: "700",
  },
});