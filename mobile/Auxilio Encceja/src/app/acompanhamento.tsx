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
import { useState } from "react";

type Subject = {
  id: number;
  nome: string;
  icone: string;
  progresso: number;
  concluidas: number;
  total: number;
  media: number;
  cor: string;
  topicos: Topic[];
};

type Topic = {
  nome: string;
  progresso: number;
  status: "completed" | "in-progress";
  atividades: Activity[];
};

type Activity = {
  tipo: "video" | "exercise" | "simulado";
  nome: string;
  status: "completed" | "pending";
  nota?: string | null;
};

const materias: Subject[] = [
  {
    id: 1, nome: "Matemática", icone: "calculator-variant", progresso: 72,
    concluidas: 18, total: 25, media: 81, cor: "#25717a",
    topicos: [
      { nome: "Operações Básicas", status: "completed", progresso: 100, atividades: [
        { tipo: "video", nome: "Adição e Subtração", status: "completed" },
        { tipo: "exercise", nome: "Lista de Exercícios 1", status: "completed", nota: "95%" },
      ]},
      { nome: "Frações", status: "completed", progresso: 100, atividades: [
        { tipo: "video", nome: "Introdução às Frações", status: "completed" },
        { tipo: "exercise", nome: "Lista de Exercícios 2", status: "completed", nota: "82%" },
      ]},
      { nome: "Equações", status: "in-progress", progresso: 60, atividades: [
        { tipo: "video", nome: "Equações de 1º Grau", status: "completed" },
        { tipo: "video", nome: "Equações de 2º Grau", status: "pending" },
      ]},
    ],
  },
{

    id: 2, nome: "Português", icone: "book-open-variant", progresso: 85,
    concluidas: 22, total: 26, media: 88, cor: "#25717a",
    topicos: [
      { nome: "Interpretação de Texto", status: "completed", progresso: 100, atividades: [
        { tipo: "video", nome: "Interpretação de Texto", status: "completed" },
        { tipo: "exercise", nome: "Lista de Exercícios", status: "completed", nota: "92%" },
      ]},
      { nome: "Gramática", status: "in-progress", progresso: 70, atividades: [
        { tipo: "video", nome: "Classes Gramaticais", status: "completed" },
        { tipo: "simulado", nome: "Simulado de Português", status: "pending" },
      ]},
    ],
  },
{

    id: 3, nome: "História", icone: "history", progresso: 55,
    concluidas: 11, total: 20, media: 72, cor: "#25717a",
    topicos: [
      { nome: "História do Brasil", status: "completed", progresso: 100, atividades: [
        { tipo: "video", nome: "Brasil Colônia", status: "completed" },
      ]},
      { nome: "República", status: "in-progress", progresso: 50, atividades: [
        { tipo: "video", nome: "República Brasileira", status: "completed" },
        { tipo: "exercise", nome: "Exercícios de História", status: "pending" },
      ]},
    ],
  },
{

    id: 4, nome: "Geografia", icone: "earth", progresso: 48,
    concluidas: 10, total: 21, media: 68, cor: "#25717a",
    topicos: [
      { nome: "Geografia Física", status: "completed", progresso: 100, atividades: [
        { tipo: "exercise", nome: "Exercícios de Geografia", status: "completed", nota: "72%" },
      ]},
    ],
  },
{

    id: 5, nome: "Ciências", icone: "flash", progresso: 63,
    concluidas: 15, total: 24, media: 75, cor: "#25717a",
    topicos: [
      { nome: "Ciências da Natureza", status: "completed", progresso: 100, atividades: [
        { tipo: "video", nome: "Introdução às Ciências", status: "completed" },
      ]},
    ],
  },
{

    id: 6, nome: "Inglês", icone: "translate", progresso: 40,
    concluidas: 8, total: 20, media: 65, cor: "#25717a",
    topicos: [
      { nome: "Inglês Básico", status: "in-progress", progresso: 30, atividades: [
        { tipo: "video", nome: "Introdução ao Inglês", status: "completed" },
      ]},
    ],
  },
];

const atividadesRecentes = [
  {
    icone: "check-circle",
    titulo: "Exercício de Matemática concluído",
    descricao: "Equações - Lista 3",
    tempo: "Há 2 horas",
  },
  {
    icone: "play-circle",
    titulo: "Videoaula assistida",
    descricao: "Interpretação de Texto",
    tempo: "Há 5 horas",
  },
  {
    icone: "trophy",
    titulo: "Simulado finalizado",
    descricao: "Quiz de Português - 88%",
    tempo: "Ontem",
  },
];

export default function Acompanhamento() {
  const router = useRouter();
  const [visao, setVisao] = useState<"geral" | "materia">("geral");
  const [materiaSelecionada, setMateriaSelecionada] = useState<Subject | null>(null);

  const abrirMateria = (materia: Subject) => {
    setMateriaSelecionada(materia);
    setVisao("materia");
  };

  const voltarVisaoGeral = () => {
    setMateriaSelecionada(null);
    setVisao("geral");
  };

  const iconeAtividade = (tipo: Activity["tipo"]) => {
    if (tipo === "video") return "play-circle-outline";
    if (tipo === "exercise") return "clipboard-text-outline";
    return "trophy-outline";
  };

  return (
    <View style={styles.telaInteira}>
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

          <TouchableOpacity style={[styles.menuBotao, styles.menuAtivo]} onPress={() => router.navigate("/acompanhamento")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="chart-line" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Acompanhamento</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuBotao} onPress={() => router.navigate("/config")} activeOpacity={0.8}>
            <MaterialCommunityIcons name="cog-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Configurações</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Text style={[styles.pageTitle, {color:'#25717A'}]}>Acompanhamento de Desempenho</Text>
          <Text style={styles.pageSubtitle}>Acompanhe seu progresso e evolução em cada matéria</Text>
        </View>

        <View style={styles.studentCard}>
          <View style={styles.studentAvatar}>
            <MaterialCommunityIcons name="account" size={42} color="#FFFFFF" />
          </View>

          <View style={styles.studentDetails}>
            <Text style={styles.studentName}>Maria Silva Santos</Text>
            <Text style={styles.studentMeta}>Turma: ENCCEJA 2025 | Matrícula: 2025-001</Text>
            <View style={styles.levelBadge}>
              <MaterialCommunityIcons name="star" size={14} color="#25717a" />
              <Text style={styles.levelText}>Nível: Intermediário</Text>
            </View>
          </View>

          <View style={styles.quickStats}>
            <View style={styles.quickStat}>
              <Text style={styles.quickValue}>67%</Text>
              <Text style={styles.quickLabel}>Progresso Geral</Text>
            </View>
            <View style={styles.quickStat}>
              <Text style={styles.quickValue}>12</Text>
              <Text style={styles.quickLabel}>Dias Ativos</Text>
            </View>
            <View style={styles.quickStat}>
              <Text style={styles.quickValue}>85</Text>
              <Text style={styles.quickLabel}>Pontos XP</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewToggle}>
          <TouchableOpacity style={[styles.viewButton, visao === "geral" && styles.viewButtonAtivo]} onPress={voltarVisaoGeral} activeOpacity={0.8}>
            <MaterialCommunityIcons name="view-grid-outline" size={18} color={visao === "geral" ? "#FFFFFF" : "#34495e"} />
            <Text style={[styles.viewButtonText, visao === "geral" && styles.viewButtonTextAtivo]}>Visão Geral</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.viewButton, visao === "materia" && styles.viewButtonAtivo]}
            onPress={() => materiaSelecionada ? setVisao("materia") : abrirMateria(materias[0])}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="format-list-bulleted" size={18} color={visao === "materia" ? "#FFFFFF" : "#34495e"} />
            <Text style={[styles.viewButtonText, visao === "materia" && styles.viewButtonTextAtivo]}>Por Matéria</Text>
          </TouchableOpacity>
        </View>

        {visao === "geral" ? (
          <>
            <View style={styles.statsGrid}>
              <StatCard icone="chart-line" valor="67%" titulo="Progresso Geral" />
              <StatCard icone="check-circle" valor="24" titulo="Atividades Concluídas" />
              <StatCard icone="timer-sand" valor="12" titulo="Atividades Pendentes" />
              <StatCard icone="trophy" valor="78%" titulo="Média Geral" />
            </View>

            <SectionTitle icone="book-open-variant" titulo="Progresso por Matéria" />

            <View style={styles.subjectsGrid}>
              {materias.map((materia) => (
                <TouchableOpacity key={materia.id} style={styles.subjectCard} onPress={() => abrirMateria(materia)} activeOpacity={0.85}>
                  <View style={styles.subjectTop}>
                    <View style={styles.subjectIcon}>
                      <MaterialCommunityIcons name={materia.icone as any} size={27} color="#25717a" />
                    </View>
                    <View style={styles.subjectHeaderText}>
                      <Text style={styles.subjectName}>{materia.nome}</Text>
                      <Text style={styles.subjectMeta}>{materia.concluidas}/{materia.total} atividades</Text>
                    </View>
                    <Text style={styles.subjectPercentage}>{materia.progresso}%</Text>
                  </View>

                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${materia.progresso}%` }]} />
                  </View>

                  <View style={styles.subjectFooter}>
                    <Text style={styles.subjectAverage}>Média: {materia.media}%</Text>
                    <View style={styles.verMateria}>
                      <Text style={styles.verMateriaText}>Ver detalhes</Text>
                      <MaterialCommunityIcons name="chevron-right" size={18} color="#25717a" />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <SectionTitle icone="clock-outline" titulo="Atividades Recentes" />

            <View style={styles.activityList}>
              {atividadesRecentes.map((atividade, index) => (
                <View style={styles.activityCard} key={index}>
                  <View style={styles.activityIcon}>
                    <MaterialCommunityIcons name={atividade.icone as any} size={24} color="#25717a" />
                  </View>
                  <View style={styles.activityInfo}>
                    <Text style={styles.activityTitle}>{atividade.titulo}</Text>
                    <Text style={styles.activityDescription}>{atividade.descricao}</Text>
                  </View>
                  <Text style={styles.activityTime}>{atividade.tempo}</Text>
                </View>
              ))}
            </View>
          </>
        ) : (
          materiaSelecionada && (
            <View>
              <TouchableOpacity style={styles.backButton} onPress={voltarVisaoGeral} activeOpacity={0.8}>
                <MaterialCommunityIcons name="arrow-left" size={20} color="#FFFFFF" />
                <Text style={styles.backButtonText}>Voltar para Visão Geral</Text>
              </TouchableOpacity>

              <View style={styles.detailHeader}>
                <View style={styles.detailIcon}>
                  <MaterialCommunityIcons name={materiaSelecionada.icone as any} size={34} color="#25717a" />
                </View>
                <View style={styles.detailInfo}>
                  <Text style={styles.detailTitle}>{materiaSelecionada.nome}</Text>
                  <Text style={styles.detailSubtitle}>
                    {materiaSelecionada.concluidas} de {materiaSelecionada.total} atividades concluídas
                  </Text>
                </View>
                <Text style={styles.detailProgressValue}>{materiaSelecionada.progresso}%</Text>
              </View>

              <View style={styles.detailProgressTrack}>
                <View style={[styles.progressFill, { width: `${materiaSelecionada.progresso}%` }]} />
              </View>

              <View style={styles.detailStats}>
                <View style={styles.detailStat}>
                  <Text style={styles.detailStatValue}>{materiaSelecionada.media}%</Text>
                  <Text style={styles.detailStatLabel}>Média</Text>
                </View>
                <View style={styles.detailStat}>
                  <Text style={styles.detailStatValue}>{materiaSelecionada.concluidas}</Text>
                  <Text style={styles.detailStatLabel}>Concluídas</Text>
                </View>
                <View style={styles.detailStat}>
                  <Text style={styles.detailStatValue}>{materiaSelecionada.total - materiaSelecionada.concluidas}</Text>
                  <Text style={styles.detailStatLabel}>Pendentes</Text>
                </View>
              </View>

              <SectionTitle icone="book-open-page-variant" titulo="Tópicos" />

              {materiaSelecionada.topicos.map((topico, index) => (
                <View style={styles.topicCard} key={index}>
                  <View style={styles.topicHeader}>
                    <View style={styles.topicNameContainer}>
                      <MaterialCommunityIcons
                        name={topico.status === "completed" ? "check-circle" : "progress-clock"}
                        size={21}
                        color={topico.status === "completed" ? "#25717a" : "#34495e"}
                      />
                      <Text style={styles.topicName}>{topico.nome}</Text>
                    </View>
                    <Text style={styles.topicPercentage}>{topico.progresso}%</Text>
                  </View>

                  <View style={styles.progressTrack}>
                    <View style={[styles.progressFill, { width: `${topico.progresso}%` }]} />
                  </View>

                  {topico.atividades.map((atividade, activityIndex) => (
                    <View style={styles.topicActivity} key={activityIndex}>
                      <View style={styles.topicActivityIcon}>
                        <MaterialCommunityIcons name={iconeAtividade(atividade.tipo) as any} size={19} color="#25717a" />
                      </View>
                      <View style={styles.topicActivityInfo}>
                        <Text style={styles.topicActivityName}>{atividade.nome}</Text>
                        <Text style={styles.topicActivityType}>
                          {atividade.tipo === "video" ? "Vídeo" : atividade.tipo === "exercise" ? "Exercício" : "Simulado"}
                        </Text>
                      </View>
                      {atividade.nota ? (
                        <Text style={styles.topicScore}>{atividade.nota}</Text>
                      ) : (
                        <View style={[styles.statusBadge, atividade.status === "completed" ? styles.statusCompleted : styles.statusPending]}>
                          <Text style={styles.statusText}>{atividade.status === "completed" ? "Concluído" : "Pendente"}</Text>
                        </View>
                      )}
                    </View>
                  ))}
                </View>
              ))}
            </View>
          )
        )}

        <TouchableOpacity style={styles.botaoSair} onPress={() => router.navigate("/")} activeOpacity={0.8}>
          <MaterialCommunityIcons name="logout" size={20} color="#FFFFFF" />
          <Text style={styles.textoBotaoSair}>Sair</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>Auxílio Encceja © 2026</Text>
      </ScrollView>
    </View>
  );
}

function StatCard({ icone, valor, titulo }: { icone: string; valor: string; titulo: string }) {
  return (
    <View style={styles.statCard}>
      <View style={styles.statIcon}>
        <MaterialCommunityIcons name={icone as any} size={23} color="#FFFFFF" />
      </View>
      <Text style={styles.statValue}>{valor}</Text>
      <Text style={styles.statLabel}>{titulo}</Text>
    </View>
  );
}

function SectionTitle({ icone, titulo }: { icone: string; titulo: string }) {
  return (
    <View style={styles.sectionTitleContainer}>
      <View style={styles.sectionTitleIcon}>
        <MaterialCommunityIcons name={icone as any} size={21} color="#FFFFFF" />
      </View>
      <Text style={styles.sectionTitle}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  telaInteira: { 
    flex: 1, backgroundColor: "#F4F6F8" 
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
    alignItems: "center", 
    marginBottom: 22 
},

  pageTitle: { 
    color: "#2C3E50", 
    fontSize: 25, 
    lineHeight: 31, 
    fontWeight: "800", 
    textAlign: "center", 
    marginBottom: 6 
},

  pageSubtitle: { 
    color: "#7F8C8D", 
    fontSize: 14, 
    lineHeight: 20, 
    textAlign: "center" 
},

  studentCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 20, 
    padding: 18, 
    marginBottom: 18,
    borderWidth: 1, 
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 }, 
    shadowOpacity: 0.07, 
    shadowRadius: 10, 
    elevation: 4,
},

  studentAvatar: {
    width: 78, 
    height: 78, 
    borderRadius: 39, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    alignSelf: "center", 
    marginBottom: 13,
},

  studentDetails: { 
    alignItems: "center" 
},

  studentName: { 
    color: "#2C3E50", 
    fontSize: 20, 
    fontWeight: "800", 
    textAlign: "center" 
},

  studentMeta: { 
    color: "#7F8C8D", 
    fontSize: 12,
    textAlign: "center", 
    marginTop: 5 
},

  levelBadge: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#EAF4F3",
    borderRadius: 20, 
    paddingHorizontal: 10, 
    paddingVertical: 6, 
    marginTop: 9,
},

  levelText: { 
    color: "#25717a", 
    fontSize: 11, 
    fontWeight: "700", 
    marginLeft: 4 
},

  quickStats: {
    flexDirection: "row", 
    justifyContent: "space-around",
    marginTop: 18,
    paddingTop: 15, 
    borderTopWidth: 1, 
    borderTopColor: "#E7EAED",
},

  quickStat: { 
    flex: 1, 
    alignItems: "center" 
},

  quickValue: { 
    color: "#25717a", 
    fontSize: 20, 
    fontWeight: "800" 
},

  quickLabel: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    textAlign: "center", 
    marginTop: 3 
},

  viewToggle: {
    flexDirection: "row", 
    backgroundColor: "#E7EAED", 
    borderRadius: 13, 
    padding: 4, 
    marginBottom: 22,
},

  viewButton: {
    flex: 1, 
    minHeight: 44, 
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "center", 
    flexDirection: "row", 
    gap: 6,
},

  viewButtonAtivo: { 
    backgroundColor: "#25717a" 
},

  viewButtonText: { 
    color: "#34495e", 
    fontSize: 12, 
    fontWeight: "700" 
},

  viewButtonTextAtivo: { 
    color: "#FFFFFF" 
},

  statsGrid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    marginBottom: 25 
},

  statCard: {
    width: "48%", 
    backgroundColor: "#FFFFFF", 
    borderRadius: 17, 
    paddingVertical: 17,
    paddingHorizontal: 10, 
    marginBottom: 12, 
    alignItems: "center", 
    borderWidth: 1,
    borderColor: "#E7EAED", 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 3,
},

  statIcon: {
    width: 45, 
    height: 45, 
    borderRadius: 14, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    marginBottom: 8,
},

  statValue: { 
    color: "#2C3E50", 
    fontSize: 21, 
    fontWeight: "800" 
},

  statLabel: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    textAlign: "center", 
    marginTop: 3 
},

  sectionTitleContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 14, 
    marginTop: 3 
},

  sectionTitleIcon: {
    width: 42, 
    height: 42, 
    borderRadius: 12, 
    backgroundColor: "#25717a",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  sectionTitle: { 
    flex: 1, 
    color: "#2C3E50", 
    fontSize: 19, 
    fontWeight: "800" 
},

  subjectsGrid: { 
    marginBottom: 12 
},

  subjectCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 18, padding: 15, 
    marginBottom: 12,
    borderWidth: 1, 
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 3,
},

  subjectTop: { 
    flexDirection: "row", 
    alignItems: "center" 
},

  subjectIcon: {
    width: 50, 
    height: 50, 
    borderRadius: 15, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  subjectHeaderText: { 
    flex: 1 
},

  subjectName: { 
    color: "#2C3E50", 
    fontSize: 15, 
    fontWeight: "800" 
},

  subjectMeta: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    marginTop: 3 
},

  subjectPercentage: { 
    color: "#25717a", 
    fontSize: 18, 
    fontWeight: "800" 
},

  progressTrack: {
    width: "100%", 
    height: 8, 
    borderRadius: 5, 
    backgroundColor: "#E7EAED",
    overflow: "hidden", 
    marginTop: 12,
},

  progressFill: { 
    height: "100%", 
    borderRadius: 5, 
    backgroundColor: "#25717a" 
},

  subjectFooter: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 10 
},

  subjectAverage: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    fontWeight: "600" 
},

  verMateria: { 
    flexDirection: "row", 
    alignItems: "center" 
},

  verMateriaText: { 
    color: "#25717a", 
    fontSize: 11, 
    fontWeight: "700" 
},

  activityList: {
    marginBottom: 10 
},

  activityCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 16, 
    padding: 13, 
    marginBottom: 10,
    flexDirection: "row", 
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#E7EAED",
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.05,
    shadowRadius: 7, 
    elevation: 2,
},

  activityIcon: {
    width: 46, 
    height: 46, 
    borderRadius: 14, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 11,
},

  activityInfo: { 
    flex: 1 
},

  activityTitle: { 
    color: "#2C3E50", 
    fontSize: 13, 
    fontWeight: "800" 
},

  activityDescription: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    marginTop: 3 
},

  activityTime: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    marginLeft: 5 
},

  backButton: {
    height: 45, 
    backgroundColor: "#34495e", 
    borderRadius: 12, 
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center",
    gap: 7, 
    marginBottom: 14,
},

  backButtonText: { color: "#FFFFFF", 
    fontSize: 13, 
    fontWeight: "800" 
},

  detailHeader: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 18, 
    padding: 16, 
    flexDirection: "row",
    alignItems: "center", 
    borderWidth: 1, 
    borderColor: "#E7EAED", shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.06, 
    shadowRadius: 8, 
    elevation: 3,
},

  detailIcon: {
    width: 62, 
    height: 62, borderRadius: 18, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 12,
},

  detailInfo: { 
    flex: 1 
},

  detailTitle: { 
    color: "#2C3E50", 
    fontSize: 18, 
    fontWeight: "800" 
},

  detailSubtitle: { 
    color: "#7F8C8D", 
    fontSize: 11, 
    marginTop: 4 
},

  detailProgressValue: { 
    color: "#25717a", 
    fontSize: 21, 
    fontWeight: "800" 
},

  detailProgressTrack: {
    height: 9, 
    borderRadius: 6, 
    backgroundColor: "#E7EAED", 
    overflow: "hidden",
    marginTop: 10, 
    marginBottom: 13,
},

  detailStats: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 16, 
    paddingVertical: 14, 
    flexDirection: "row",
    marginBottom: 24, 
    borderWidth: 1, 
    borderColor: "#E7EAED",
},

  detailStat: {
    flex: 1, 
    alignItems: "center", 
    borderRightWidth: 1, 
    borderRightColor: "#E7EAED",
},

  detailStatValue: { 
    color: "#25717a", 
    fontSize: 18, 
    fontWeight: "800" 
},

  detailStatLabel: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    marginTop: 3 
},

  topicCard: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 17, 
    padding: 15, 
    marginBottom: 12,
    borderWidth: 1, 
    borderColor: "#E7EAED", 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 }, 
    shadowOpacity: 0.05, 
    shadowRadius: 7, 
    elevation: 2,
},

  topicHeader: { 
    flexDirection: "row", 
    alignItems: "center" 
},

  topicNameContainer: { 
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 7 
},

  topicName: { 
    color: "#2C3E50", 
    fontSize: 14, 
    fontWeight: "800" 
},

  topicPercentage: { 
    color: "#25717a", 
    fontSize: 14, 
    fontWeight: "800" 
},

  topicActivity: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingTop: 12, 
    marginTop: 10,
    borderTopWidth: 1, 
    borderTopColor: "#EEF0F2",
},

  topicActivityIcon: {
    width: 34, 
    height: 34, 
    borderRadius: 10, 
    backgroundColor: "#EAF4F3",
    alignItems: "center", 
    justifyContent: "center", 
    marginRight: 9,
},

  topicActivityInfo: { 
    flex: 1 
},

  topicActivityName: { 
    color: "#2C3E50", 
    fontSize: 12, 
    fontWeight: "700" 
},

  topicActivityType: { 
    color: "#7F8C8D", 
    fontSize: 10, 
    marginTop: 2 
},

  topicScore: { 
    color: "#25717a", 
    fontSize: 13,
    fontWeight: "800" 
},

  statusBadge: { 
    paddingHorizontal: 8,
    paddingVertical: 5, 
    borderRadius: 8 
},

  statusCompleted: { 
    backgroundColor: "#EAF4F3" 
},

  statusPending: { 
    backgroundColor: "#F2F3F4" 
},

  statusText: { 
    color: "#34495e", 
    fontSize: 9, 
    fontWeight: "800" 
},

  botaoSair: {
    width: "100%", 
    height: 50, 
    backgroundColor: "#34495e", 
    borderRadius: 12,
    alignItems: "center", 
    justifyContent: "center", 
    flexDirection: "row",
    gap: 8, marginTop: 18,
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