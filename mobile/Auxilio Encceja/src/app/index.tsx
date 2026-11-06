import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Home() {
  const router = useRouter();

  const menuItems = [
    { nome: "Início", icone: "home-outline", rota: "/" },
    { nome: "Benefícios", icone: "star-outline", rota: "/beneficios" },
    { nome: "Como Funciona", icone: "help-circle-outline", rota: "/como-funciona" },
    { nome: "Seu Futuro", icone: "rocket-launch-outline", rota: "/motivacao" },
  ];

  const stats = [
    { nome: "Apostilas", descricao: "para estudar", icone: "book-open-page-variant" },
    { nome: "Videoaulas", descricao: "para aprender", icone: "play-circle" },
    { nome: "Exercícios", descricao: "para praticar", icone: "pencil" },
    { nome: "Simulados", descricao: "para testar", icone: "file-document" },
  ];

  const features = [
    { titulo: "Apostilas", texto: "Materiais organizados para facilitar a revisão e o estudo de cada conteúdo.", icone: "book-open-variant" },
    { titulo: "Dicas de estudo", texto: "Estratégias simples para aproveitar melhor seu tempo e manter o foco na preparação.", icone: "lightbulb-on" },
    { titulo: "Exercícios e simulados", texto: "Pratique, identifique dificuldades e chegue mais preparado para a prova.", icone: "clipboard-check" },
  ];

  const steps = [
    { num: "1", titulo: "Crie sua conta", texto: "Cadastre-se gratuitamente e entre na plataforma." },
    { num: "2", titulo: "Escolha seu conteúdo", texto: "Encontre apostilas, aulas, exercícios e simulados." },
    { num: "3", titulo: "Pratique e evolua", texto: "Estude no seu ritmo e acompanhe sua preparação." },
  ];

  return (
    <View style={styles.TelaInteira}>
      {/* Header igual ao Dashboard */}
      <View style={styles.header}>
        <View style={styles.headerSuperior}>
          <Image
            source={require("@/assets/images/Logo 3.0.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <View style={styles.textosHeader}>
            <Text style={styles.titulo}>
              Auxílio Encceja
            </Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
        >
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuBotao, index === 0 && styles.menuAtivo]}
              onPress={() => router.navigate(item.rota as any)}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons name={item.icone as any} size={15} color="#FFFFFF" />
              <Text style={styles.menuTexto}>{item.nome}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Conteúdo da Página */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroBadge}>
            <MaterialCommunityIcons name="star-four-points" size={14} color="#8fe8da" />
            <Text style={styles.heroBadgeText}>Seu próximo passo começa aqui</Text>
          </View>

          <Text style={styles.heroTitle}>
            Transforme seu esforço em{"\n"}
            <Text style={styles.heroTitleDestaque}>novas oportunidades.</Text>
          </Text>

          <Text style={styles.heroText}>
            Estude para o ENCCEJA no seu ritmo, de onde estiver. Tenha acesso a
            conteúdos, exercícios e simulados para avançar com mais confiança.
          </Text>

          <View style={styles.heroActions}>
            <TouchableOpacity
              style={styles.heroPrimary}
              onPress={() => router.navigate("/login")}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons name="account-plus" size={18} color="#173b4a" />
              <Text style={styles.heroPrimaryText}>Começar agora</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.heroSecondary}
              onPress={() => router.navigate("/login")}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons name="login" size={18} color="#FFFFFF" />
              <Text style={styles.heroSecondaryText}>Já tenho conta</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.heroTrustContainer}>
            <View style={styles.heroTrustItem}>
              <MaterialCommunityIcons name="check-circle" size={14} color="#8fe8da" />
              <Text style={styles.heroTrustText}>Conteúdo organizado</Text>
            </View>
            <View style={styles.heroTrustItem}>
              <MaterialCommunityIcons name="check-circle" size={14} color="#8fe8da" />
              <Text style={styles.heroTrustText}>No seu ritmo</Text>
            </View>
          </View>
        </View>

        {/* Stats Strip */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statIconBox}>
                <MaterialCommunityIcons name={stat.icone as any} size={24} color="#159895" />
              </View>
              <Text style={styles.statNome}>{stat.nome}</Text>
              <Text style={styles.statDesc}>{stat.descricao}</Text>
            </View>
          ))}
        </View>

        {/* Features Section (Benefícios) */}
        <View style={styles.tituloSecaoContainer}>
          <View style={styles.iconeTituloSecao}>
            <MaterialCommunityIcons name="view-grid-outline" size={22} color="#FFFFFF" />
          </View>
          <Text style={styles.secaoTitulo}>Tudo em um só lugar</Text>
        </View>

        <View style={styles.featuresContainer}>
          {features.map((feature, index) => (
            <View key={index} style={styles.featureCard}>
              <View style={styles.featureIconBox}>
                <MaterialCommunityIcons name={feature.icone as any} size={28} color="#159895" />
              </View>
              <Text style={styles.featureTitulo}>{feature.titulo}</Text>
              <Text style={styles.featureTexto}>{feature.texto}</Text>
              <TouchableOpacity style={styles.featureBtn} onPress={() => router.navigate("/login")}>
                <Text style={styles.featureBtnTexto}>Quero estudar</Text>
                <MaterialCommunityIcons name="arrow-right" size={16} color="#159895" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* How it Works (Como Funciona) */}
        <View style={styles.howSectionBox}>
          <View style={styles.tituloSecaoContainer}>
            <View style={styles.iconeTituloSecao}>
              <MaterialCommunityIcons name="help-circle-outline" size={22} color="#FFFFFF" />
            </View>
            <Text style={styles.secaoTitulo}>Como começar</Text>
          </View>

          <Text style={styles.howTexto}>
            Pequenos passos, feitos com constância, podem levar você muito mais longe.
          </Text>

          <View style={styles.stepsContainer}>
            {steps.map((step, index) => (
              <View key={index} style={styles.stepItem}>
                <View style={styles.stepNumBox}>
                  <Text style={styles.stepNumText}>{step.num}</Text>
                </View>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitulo}>{step.titulo}</Text>
                  <Text style={styles.stepTexto}>{step.texto}</Text>
                </View>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.botaoPadrao}
            onPress={() => router.navigate("/login")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="rocket-launch" size={20} color="#FFFFFF" />
            <Text style={styles.botaoPadraoTexto}>Começar minha preparação</Text>
          </TouchableOpacity>
        </View>

        {/* Motivation Section */}
        <View style={styles.motivationCard}>
          <Text style={styles.motivationKicker}>Uma mensagem para você</Text>
          <Text style={styles.motivationTitulo}>
            O seu passado não precisa definir o seu futuro.
          </Text>
          <Text style={styles.motivationTexto}>
            Talvez você tenha parado de estudar, talvez esteja voltando agora. Não
            importa. O importante é que você decidiu continuar. Seu objetivo começa
            com uma escolha: não desistir.
          </Text>
          <TouchableOpacity
            style={styles.motivationBtn}
            onPress={() => router.navigate("/login")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="heart" size={18} color="#34495e" />
            <Text style={styles.motivationBtnTexto}>Eu escolho continuar</Text>
          </TouchableOpacity>
        </View>

        {/* Final CTA */}
        <View style={styles.finalCtaBox}>
          <Text style={styles.finalCtaKicker}>Seu próximo capítulo começa agora</Text>
          <Text style={styles.finalCtaTitulo}>
            Estude hoje. Acredite em você.{"\n"}
            <Text style={styles.finalCtaTituloDestaque}>Transforme seu futuro.</Text>
          </Text>
          
          <TouchableOpacity
            style={[styles.botaoPadrao, { marginTop: 20 }]}
            onPress={() => router.navigate("/login")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="account-plus" size={20} color="#FFFFFF" />
            <Text style={styles.botaoPadraoTexto}>Criar minha conta</Text>
          </TouchableOpacity>
        </View>

        {/* Novo Botão de Sair (Substituindo o Footer antigo) */}
        <TouchableOpacity
          style={styles.botaoSair}
          onPress={() => router.navigate("/")}
          activeOpacity={0.8}
        >
          <MaterialCommunityIcons name="logout" size={20} color="#FFFFFF" />
          <Text style={styles.textoBotaoSair}>Sair</Text>
        </TouchableOpacity>

        {/* Texto Simples de Copyright no rodapé */}
        <Text style={styles.footerCopyright}>Auxílio Encceja © 2026</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  TelaInteira: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },
  
  // Header (Igual ao Dashboard)
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
    justifyContent: "center",
  },
  logo: {
    width: 47,
    height: 47,
    marginRight: 7,
  },
  textosHeader: {
    justifyContent: "center",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },
  
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 11,
    paddingBottom: 1,
    paddingHorizontal: 7,
  },
  menuBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 2,
    gap: 4,
  },
  menuAtivo: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  menuTexto: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },

  // ScrollView Principal
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 18,
    paddingBottom: 40,
  },

  // Hero Section
  heroSection: {
    width: "100%",
    backgroundColor: "#34495e", // Azul escuro do gradiente CSS
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 28,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 18,
    elevation: 7,
  },
  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    alignSelf: "flex-start",
    marginBottom: 18,
    gap: 6,
  },
  heroBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 34,
    marginBottom: 15,
  },
  heroTitleDestaque: {
    color: "#8fe8da", // Verde água do CSS
  },
  heroText: {
    color: "rgba(255,255,255,0.82)",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 25,
  },
  heroActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  heroPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#57c5b6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  heroPrimaryText: {
    color: "#173b4a",
    fontSize: 14,
    fontWeight: "900",
  },
  heroSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 14,
    gap: 8,
  },
  heroSecondaryText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },
  heroTrustContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  heroTrustItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  heroTrustText: {
    color: "rgba(255,255,255,0.8)",
    fontSize: 12,
  },

  // Stats Strip
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 9,
    elevation: 4,
  },
  statCard: {
    width: "48%",
    alignItems: "center",
    paddingVertical: 10,
  },
  statIconBox: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#EAF4F3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  statNome: {
    color: "#2C3E50",
    fontSize: 15,
    fontWeight: "800",
  },
  statDesc: {
    color: "#7F8C8D",
    fontSize: 12,
  },

  // Títulos de Seção (Padrão Dashboard)
  tituloSecaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 17,
    marginLeft: 2,
  },
  iconeTituloSecao: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#25717a",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },
  secaoTitulo: {
    flex: 1,
    color: "#2C3E50",
    fontSize: 19,
    fontWeight: "800",
  },

  // Features
  featuresContainer: {
    marginBottom: 28,
  },
  featureCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#E7EAED",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
    elevation: 3,
  },
  featureIconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EAF4F3",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  featureTitulo: {
    color: "#2C3E50",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 6,
  },
  featureTexto: {
    color: "#7F8C8D",
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 12,
  },
  featureBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  featureBtnTexto: {
    color: "#159895",
    fontSize: 13,
    fontWeight: "700",
  },

  // How Section
  howSectionBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 7,
    elevation: 3,
  },
  howTexto: {
    color: "#7F8C8D",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  stepsContainer: {
    marginBottom: 15,
  },
  stepItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E7EAED",
  },
  stepNumBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#159895",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  stepNumText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
  },
  stepContent: {
    flex: 1,
  },
  stepTitulo: {
    color: "#2C3E50",
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },
  stepTexto: {
    color: "#7F8C8D",
    fontSize: 13,
    lineHeight: 18,
  },

  // Botão Padrão
  botaoPadrao: {
    width: "100%",
    height: 50,
    backgroundColor: "#34495e",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  botaoPadraoTexto: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  // Motivation
  motivationCard: {
    backgroundColor: "#34495e", // Azul escuro Motivation
    borderRadius: 20,
    padding: 25,
    marginBottom: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  motivationKicker: {
    color: "#9df1e4",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  motivationTitulo: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    lineHeight: 28,
    marginBottom: 15,
  },
  motivationTexto: {
    color: "rgba(255,255,255,0.84)",
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 20,
  },
  motivationBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
    alignSelf: "flex-start",
  },
  motivationBtnTexto: {
    color: "#34495e",
    fontSize: 14,
    fontWeight: "800",
  },

  // Final CTA
  finalCtaBox: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
  finalCtaKicker: {
    color: "#159895",
    fontSize: 12,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  finalCtaTitulo: {
    color: "#2C3E50",
    fontSize: 24,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 30,
  },
  finalCtaTituloDestaque: {
    color: "#159895",
  },

  // Novos estilos de Saída e Footer
  botaoSair: {
    width: "100%",
    height: 50,
    backgroundColor: "#34495e",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
  },
  textoBotaoSair: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  footerCopyright: {
    textAlign: "center",
    color: "#7F8C8D",
    fontSize: 12,
    marginTop: 18,
  },
});