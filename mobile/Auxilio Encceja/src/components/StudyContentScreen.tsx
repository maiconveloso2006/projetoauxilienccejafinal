import React, { useMemo, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

type Option = { label: string; value: string };
type Question = { title?: string; prompt: string; options: Option[]; correct?: string; explanation?: string; topic?: string };
type Material = { title: string; description: string; topics: string[] };
type Props = { kind: "apostila" | "exercicio" | "simulado" | "redacao"; title: string; subtitle?: string; materials?: Material[]; questions?: Question[]; duration?: string; essayPrompt?: string; essaySupport?: string[] };

const C = { primary: "#34495e", primaryDark: "#2c3e50", accent: "#159895", secondary: "#57c5b6", bg: "#f0f4f3", card: "#ffffff", text: "#1e293b", muted: "#64748b", border: "#e2e8f0", success: "#10b981", danger: "#ef4444", warning: "#f59e0b", info: "#3b82f6" };

export default function StudyContentScreen({ kind, title, subtitle, materials = [], questions = [], duration, essayPrompt, essaySupport = [] }: Props) {
  const router = useRouter();
  const [expanded, setExpanded] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [essay, setEssay] = useState("");
  const [finished, setFinished] = useState(false);
  const [activeTab, setActiveTab] = useState("Todos");
  const [savedMaterials, setSavedMaterials] = useState<number[]>([]);
  const score = useMemo(() => questions.reduce((n, q, i) => n + (answers[i] && q.correct && answers[i] === q.correct ? 1 : 0), 0), [answers, questions]);
  const answeredCount = Object.keys(answers).length;
  const progress = questions.length ? Math.round((answeredCount / questions.length) * 100) : 0;
  const tabs = useMemo(() => ["Todos", ...Array.from(new Set(questions.map(q => q.topic).filter(Boolean) as string[]))], [questions]);
  const visibleQuestions = questions.map((q, originalIndex) => ({ q, originalIndex })).filter(({ q }) => activeTab === "Todos" || q.topic === activeTab);
  const toggle = (i: number) => setExpanded(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  const submit = () => {
    const missing = questions.filter((_, i) => !answers[i]).length;
    if (missing) { Alert.alert("Respostas pendentes", `Você ainda não respondeu ${missing} questão(ões).`); return; }
    setFinished(true);
    Alert.alert("Resultado do simulado", `Pontuação: ${score} / ${questions.length}\nVocê acertou ${score} questão(ões).`);
  };
  const isApostila = kind === "apostila";
  const isExercise = kind === "exercicio";
  const isEssay = kind === "redacao";
  const kindLabel = isApostila ? "Material de Estudo" : isExercise ? "Exercícios Práticos" : isEssay ? "Proposta de Redação" : "Simulado ENCCEJA";
  const heroDescription = subtitle || (isApostila ? "Explore os conteúdos e organize sua preparação para o ENCCEJA." : isExercise ? "Prepare-se para o exame com exercícios práticos e feedback imediato." : isEssay ? "Pratique sua redação seguindo a proposta do ENCCEJA." : "Teste seus conhecimentos e acompanhe seu desempenho.");

  return <View style={styles.screen}>
    <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
      <View style={styles.navbar}>
        <View style={styles.brandIcon}><Image source={require("@/assets/images/Logo 3.0.png")} style={styles.brandIconImage} resizeMode="contain" /></View>
        <View style={styles.brandWords}><Text style={styles.brandTitle}>Auxílio Encceja</Text><Text style={styles.brandCaption}>PLATAFORMA DE ESTUDOS</Text></View>
        <TouchableOpacity accessibilityRole="button" onPress={() => { if (router.canGoBack()) router.back(); else router.replace("/conteudos" as never); }} style={styles.backButton}><Text style={styles.backButtonText}>‹  Voltar</Text></TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.hero}>
          <View style={styles.heroGlow} />
          <View style={styles.heroContent}>
            <View style={styles.heroBadge}><Text style={styles.heroBadgeText}>✦  {kindLabel}</Text></View>
            <Text style={styles.heroTitle}>{title}</Text>
            <Text style={styles.heroSubtitle}>{heroDescription}</Text>
            {duration ? <View style={styles.durationPill}><Text style={styles.durationText}>◷  Duração: {duration}</Text></View> : null}
            {isApostila ? <TouchableOpacity style={styles.heroButton} onPress={() => Alert.alert("Apostilas", "Escolha um conteúdo abaixo para visualizar seus tópicos.")}><Text style={styles.heroButtonText}>Ver conteúdos  ↓</Text></TouchableOpacity> : null}
          </View>
        </View>

        {isApostila ? <>
          <View style={styles.sectionHeadingRow}><View style={styles.headingIcon}><Text style={styles.headingIconText}>▤</Text></View><View style={styles.headingWords}><Text style={styles.sectionTitle}>Conteúdos da apostila</Text><Text style={styles.sectionSubtitle}>Explore os materiais e os principais tópicos de estudo</Text></View></View>
          <View style={styles.materialGrid}>
            {materials.map((m, i) => <View key={`${m.title}-${i}`} style={styles.materialCard}>
              <View style={styles.materialCardHeader}><View style={styles.materialIcon}><Text style={styles.materialIconText}>{["∑", "△", "ƒ", "◉", "▥", "∫"][i % 6]}</Text></View><View style={styles.materialHeaderWords}><Text style={styles.materialTitle}>{m.title}</Text><Text style={styles.materialKicker}>MATERIAL DE ESTUDO</Text></View></View>
              <View style={styles.materialCardBody}>
                <Text style={styles.materialDescription}>{m.description}</Text>
                <View style={styles.topicsList}>{m.topics.map((t, j) => <View key={`${t}-${j}`} style={styles.topicRow}><Text style={styles.topicCheck}>✓</Text><Text style={styles.topicText}>{t}</Text></View>)}</View>
                {expanded.includes(i) ? <View style={styles.previewBox}><Text style={styles.previewTitle}>Prévia do conteúdo</Text><Text style={styles.previewText}>Este material aborda: {m.topics.join(", ")}. Use os tópicos acima como roteiro para revisar o conteúdo.</Text></View> : null}
                <View style={styles.materialActions}><TouchableOpacity onPress={() => toggle(i)} style={styles.outlineButton}><Text style={styles.outlineButtonText}>{expanded.includes(i) ? "Ocultar prévia" : "◉  Visualizar"}</Text></TouchableOpacity><TouchableOpacity onPress={() => Alert.alert("Material de estudo", "O projeto HTML original apresenta a opção de baixar, mas nenhum PDF correspondente foi incluído nesta conversão para Expo.")} style={styles.primaryButton}><Text style={styles.primaryButtonText}>↓  Baixar</Text></TouchableOpacity></View>
                {savedMaterials.includes(i) ? <Text style={styles.savedText}>✓ Marcado para revisar</Text> : null}
              </View>
            </View>)}
          </View>
          <View style={styles.aboutCard}><Text style={styles.aboutTitle}>Sobre este material</Text><Text style={styles.aboutText}>Organize seus estudos por assunto, revise os tópicos principais e avance no seu ritmo. Marque os conteúdos que deseja revisar depois.</Text><TouchableOpacity style={styles.secondaryButton} onPress={() => setSavedMaterials(p => p.length === materials.length ? [] : materials.map((_, i) => i))}><Text style={styles.secondaryButtonText}>{savedMaterials.length === materials.length && materials.length ? "Desmarcar todos" : "✓  Marcar conteúdos para revisar"}</Text></TouchableOpacity></View>
        </> : isEssay ? <>
          <View style={styles.sectionHeadingRow}><View style={styles.headingIcon}><Text style={styles.headingIconText}>✎</Text></View><View style={styles.headingWords}><Text style={styles.sectionTitle}>Proposta de redação</Text><Text style={styles.sectionSubtitle}>Leia a proposta e escreva seu texto abaixo</Text></View></View>
          <View style={styles.questionCard}><Text style={styles.questionHeading}>{essayPrompt || "Produza um texto dissertativo-argumentativo"}</Text>{essaySupport.map((t, i) => <Text key={i} style={styles.bodyText}>{t}</Text>)}<View style={styles.instructionBox}><Text style={styles.instructionText}>INSTRUÇÕES</Text><Text style={styles.bodyText}>Escreva um texto dissertativo-argumentativo, organize suas ideias e revise antes de finalizar.</Text></View><TextInput multiline value={essay} onChangeText={setEssay} placeholder="Digite sua redação aqui..." placeholderTextColor="#94a3b8" textAlignVertical="top" style={styles.essayInput}/><Text style={styles.counter}>Palavras: {essay.trim() ? essay.trim().split(/\s+/).length : 0}  ·  Caracteres: {essay.length}</Text><TouchableOpacity style={styles.primaryWideButton} onPress={() => Alert.alert("Rascunho salvo", "Seu texto permanece disponível nesta tela enquanto ela estiver aberta.")}><Text style={styles.primaryWideButtonText}>Salvar rascunho</Text></TouchableOpacity></View>
        </> : <>
          {isExercise ? <View style={styles.warningBanner}><Text style={styles.warningIcon}>⚠</Text><Text style={styles.warningText}>ATENÇÃO: Mudar de guia durante o teste é monitorado e pode resultar na anulação do teste.</Text></View> : <View style={styles.rulesCard}><Text style={styles.rulesTitle}>⚠  Regras do Simulado</Text><Text style={styles.ruleText}>•  Não abra outras abas ou janelas durante o simulado</Text><Text style={styles.ruleText}>•  Responda às questões e acompanhe seu progresso</Text><Text style={styles.ruleText}>•  Confira suas respostas antes de finalizar o teste</Text><Text style={styles.ruleText}>•  Suas respostas ficam disponíveis enquanto esta tela estiver aberta</Text><View style={styles.timerRow}><Text style={styles.timerText}>◷  {duration || "120:00"}</Text><Text style={styles.timerQuestion}>Questão {answeredCount} de {questions.length}</Text></View></View>}
          <View style={[styles.scoreCard, !isExercise && styles.simuladoScoreCard]}><View style={styles.scoreTop}><View><Text style={styles.scoreCaption}>{isExercise ? "PONTUAÇÃO ATUAL" : "RESULTADO DO SIMULADO"}</Text><Text style={styles.scoreNumber}>{score}<Text style={styles.scoreTotal}> / {questions.length}</Text></Text></View><View style={styles.scoreBadge}><Text style={styles.scoreBadgeText}>★</Text></View></View><View style={styles.progressLabelRow}><Text style={styles.progressLabel}>Progresso</Text><Text style={styles.progressPercent}>{progress}%</Text></View><View style={styles.progressTrack}><View style={[styles.progressFill, { width: `${progress}%` }]} /></View><Text style={styles.progressMeta}>Respondidas: {answeredCount} de {questions.length} questões</Text></View>
          {tabs.length > 1 ? <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>{tabs.map(tab => <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={[styles.tab, activeTab === tab && styles.tabActive]}><Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text></TouchableOpacity>)}</ScrollView> : null}
          {visibleQuestions.map(({ q, originalIndex }, displayIndex) => <View key={originalIndex} style={styles.questionCard}><View style={styles.questionTopline}><View style={styles.questionNumber}><Text style={styles.questionNumberText}>{String(originalIndex + 1).padStart(2, "0")}</Text></View><View style={styles.questionTopWords}><Text style={styles.questionKicker}>{isExercise ? "EXERCÍCIO PRÁTICO" : "QUESTÃO DO SIMULADO"}</Text><Text style={styles.questionHeading}>{q.title || `Questão ${originalIndex + 1}`}</Text></View></View>{q.topic ? <View style={styles.topicPill}><Text style={styles.topicPillText}>{q.topic}</Text></View> : null}<Text style={styles.prompt}>{q.prompt}</Text>{q.options.map((o, j) => { const selected = answers[originalIndex] === o.value; const show = checked[originalIndex] || finished; const right = show && q.correct === o.value; return <TouchableOpacity key={j} disabled={finished} onPress={() => setAnswers(p => ({ ...p, [originalIndex]: o.value }))} style={[styles.option, selected && styles.optionSelected, right && styles.optionCorrect, show && selected && !!q.correct && !right && styles.optionWrong]}><View style={[styles.optionLetter, selected && styles.optionLetterSelected]}><Text style={[styles.optionLetterText, selected && styles.optionLetterTextSelected]}>{String.fromCharCode(65 + j)}</Text></View><Text style={styles.optionText}>{o.label.replace(/^[A-D]\)\s*/, "")}</Text>{selected ? <Text style={styles.selectedMark}>✓</Text> : null}</TouchableOpacity>})}
            <View style={styles.questionActions}>{isExercise ? <TouchableOpacity style={styles.checkButton} onPress={() => setChecked(p => ({ ...p, [originalIndex]: true }))}><Text style={styles.checkButtonText}>{checked[originalIndex] ? "✓  Resposta verificada" : "Verificar resposta"}</Text></TouchableOpacity> : null}{checked[originalIndex] && q.correct ? <View style={[styles.feedback, answers[originalIndex] === q.correct ? styles.feedbackGood : styles.feedbackBad]}><Text style={styles.feedbackTitle}>{answers[originalIndex] === q.correct ? "Resposta correta!" : "Revise esta questão"}</Text>{q.explanation ? <Text style={styles.feedbackText}>{q.explanation}</Text> : null}</View> : null}</View>
          </View>)}
          {isExercise ? <View style={styles.endCard}><Text style={styles.endCardTitle}>Continue praticando!</Text><Text style={styles.endCardText}>Você verificou {Object.keys(checked).filter(k => checked[Number(k)]).length} de {questions.length} questões.</Text><TouchableOpacity style={styles.secondaryButton} onPress={() => { setAnswers({}); setChecked({}); setFinished(false); setActiveTab("Todos"); }}><Text style={styles.secondaryButtonText}>↻  Refazer exercícios</Text></TouchableOpacity></View> : <TouchableOpacity disabled={finished} style={[styles.primaryWideButton, finished && styles.disabledButton]} onPress={submit}><Text style={styles.primaryWideButtonText}>{finished ? `Simulado finalizado · ${score}/${questions.length}` : "Finalizar simulado  →"}</Text></TouchableOpacity>}
        </>}
        <View style={styles.footer}><View style={styles.footerRule}/><Text style={styles.footerBrand}>AUXÍLIO ENCCEJA</Text><Text style={styles.footerText}>Sua preparação para o futuro começa aqui.</Text></View>
      </View>
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: C.bg
  },

  page: {
    paddingBottom: 28
  },

  navbar: {
    minHeight: 72,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: C.primaryDark,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 5
  },

  brandIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center"
  },

  brandIconImage: {
    width: 40,
    height: 40
  },

  brandIconText: {
    color: "#5279b8",
    fontWeight: "900",
    fontSize: 25
  },

  brandWords: {
    flex: 1
  },

  brandTitle: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16
  },

  brandCaption: {
    display: "none",
    color: "#cbd5e1",
    fontWeight: "700",
    fontSize: 8,
    letterSpacing: 1.2,
    marginTop: 2
  },

  backButton: {
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)"
  },

  backButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13
  },

  container: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    paddingHorizontal: 16,
    paddingTop: 22
  },

  hero: {
    backgroundColor: C.primary,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    overflow: "hidden",
    minHeight: 190,
    justifyContent: "center",
    shadowColor: C.primary,
    shadowOpacity: 0.22,
    shadowRadius: 15,
    elevation: 4
  },

  heroGlow: {
    position: "absolute",
    right: -40,
    top: -65,
    width: 210,
    height: 210,
    borderRadius: 120,
    backgroundColor: "rgba(87,197,182,0.18)"
  },

  heroContent: {
    zIndex: 1
  },

  heroBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 99,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 13
  },

  heroBadgeText: {
    color: "#e2f5f2",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1
  },

  heroTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900",
    lineHeight: 32,
    marginBottom: 8
  },

  heroSubtitle: {
    color: "#e2e8f0",
    fontSize: 14,
    lineHeight: 22,
    maxWidth: 660
  },

  durationPill: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(245,158,11,0.17)",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 9,
    marginTop: 13
  },

  durationText: {
    color: "#ffdf9e",
    fontSize: 12,
    fontWeight: "800"
  },

  heroButton: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 17
  },

  heroButtonText: {
    color: C.primary,
    fontWeight: "800",
    fontSize: 13
  },

  sectionHeadingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 15,
    marginTop: 3
  },

  headingIcon: {
    width: 43,
    height: 43,
    borderRadius:
    13,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center"
  },

  headingIconText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "800"
  },

  headingWords: {
    flex: 1
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: C.primaryDark
  },

  sectionSubtitle: {
    fontSize: 12,
    color: C.muted,
    marginTop: 3,
    lineHeight: 17
  },

  materialGrid: {
    gap: 15
  },

  materialCard: {
    backgroundColor: C.card,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 1,
    shadowColor: "#34495e",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3
  },

  materialCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 17,
    paddingVertical: 14,
    backgroundColor: C.primaryDark,
    marginBottom: 0
  },

  materialIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center"
  },

  materialIconText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900"
  },

  materialHeaderWords: {
    flex: 1
  },

  materialTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900"
  },

  materialKicker: {
    color: "#cbd5e1",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.1,
    marginTop: 3
  },

  materialDescription: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 13
  },

  topicsList: {
    borderTopWidth: 1,
    borderTopColor: "#edf1f3",
    paddingTop: 12,
    gap: 9
  },

  topicRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 9
  },

  topicCheck: {
    color: C.success,
    fontSize: 14,
    fontWeight: "900",
    width: 17
  },

  topicText: {
    color: "#475569",
    fontSize: 13,
    lineHeight: 19,
    flex: 1
  },

  materialActions: {
    flexDirection: "row",
    gap: 9,
    marginTop: 16
  },

  outlineButton: {
    flex: 1,
    minHeight: 43,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: C.accent,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },

  outlineButtonText: {
    color: C.accent,
    fontSize: 12,
    fontWeight: "800"
  },

  primaryButton: {
    flex: 1,
    minHeight: 43,
    borderRadius: 10,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "900"
  },

  previewBox: {
    marginTop: 13,
    backgroundColor: "#f0f8f7",
    padding: 13,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: C.accent
  },

  previewTitle: {
    color: C.primaryDark,
    fontWeight: "900",
    marginBottom: 5
  },

  previewText: {
    color: C.muted,
    fontSize: 13,
    lineHeight: 20
  },

  savedText: {
    color: C.success,
    fontSize: 12,
    fontWeight: "800",
    marginTop: 10
  },

  aboutCard: {
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: C.border
  },

  aboutTitle: {
    color: C.primaryDark,
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8
  },

  aboutText: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14
  },

  secondaryButton: {
    alignSelf: "flex-start",
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#e4f4f2"
  },

  secondaryButtonText: {
    color: C.accent,
    fontSize: 13,
    fontWeight: "900"
  },

  warningBanner: {
    flexDirection: "row",
    gap: 10,
    padding: 14,
    borderRadius: 12,
    backgroundColor: "#fff7e6",
    borderLeftWidth: 4,
    borderLeftColor: C.warning,
    marginBottom: 16,
    alignItems: "flex-start"
  },

  warningIcon: {
    color: "#b7791f",
    fontSize: 18,
    fontWeight: "900"
  },

  warningText: {
    color: "#7c5a21",
    flex: 1,
    fontSize: 12,
    lineHeight: 19,
    fontWeight: "700"
  },

  scoreCard: {
    backgroundColor: C.card,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: C.border,
    padding: 17,
    marginBottom: 15,
    shadowColor: "#34495e",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2
  },

  scoreTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },

  scoreCaption: {
    color: C.muted,
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: "900"
  },

  scoreNumber: {
    color: C.primaryDark,
    fontSize: 29,
    fontWeight: "900",
    marginTop: 4
  },

  scoreTotal: {
    color: C.accent,
    fontSize: 18,
    fontWeight: "800"
  },

  scoreBadge: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "#e1f4f1",
    alignItems: "center",
    justifyContent: "center"
  },

  scoreBadgeText: {
    color: C.accent,
    fontSize: 24
  },

  progressLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7
  },

  progressLabel: {
    color: C.text,
    fontSize: 12,
    fontWeight: "800"
  },

  progressPercent: {
    color: C.accent,
    fontSize: 12,
    fontWeight: "900"
  },

  progressTrack: {
    height: 8,
    backgroundColor: "#e8eef0",
    borderRadius: 10,
    overflow: "hidden"
  },

  progressFill: {
    height: "100%",
    backgroundColor: C.accent,
    borderRadius: 10
  },

  progressMeta: {
    color: C.muted,
    fontSize: 11,
    marginTop: 8
  },

  tabs: {
    gap: 8,
    paddingVertical: 2,
    paddingBottom: 15
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: C.border
  },

  tabActive: {
    backgroundColor: C.primary,
    borderColor: C.primary
  },

  tabText: {
    color: C.muted,
    fontWeight: "800",
    fontSize: 12
  },

  tabTextActive: {
    color: "#fff"
  },

  questionCard: {
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 16,
    padding: 17,
    marginBottom: 15,
    shadowColor: "#34495e",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2
  },

  questionTopline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    marginBottom: 13
  },

  questionNumber: {
    width: 41,
    height: 41,
    borderRadius: 12,
    backgroundColor: C.primary,
    alignItems: "center",
    justifyContent: "center"
  },

  questionNumberText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "900"
  },

  questionTopWords: {
    flex: 1
  },

  questionKicker: {
    color: C.accent,
    fontSize: 9,
    letterSpacing: 1,
    fontWeight: "900",
    marginBottom: 4
  },

  questionHeading: {
    color: C.primaryDark,
    fontSize: 16,
    fontWeight: "900",
    lineHeight: 22
  },

  topicPill: {
    alignSelf: "flex-start",
    borderRadius: 99,
    backgroundColor: "#e3f4f1",
    paddingVertical: 5,
    paddingHorizontal: 9,
    marginBottom: 10
  },

  topicPillText: {
    color: C.accent,
    fontSize: 10,
    fontWeight: "900"
  },

  prompt: {
    color: C.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 14
  },

  bodyText: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 9
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 11,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    backgroundColor: "#fff",
    marginBottom: 8,
    minHeight: 47
  },

  optionSelected: {
    borderColor: C.accent,
    backgroundColor: "#eaf8f6"
  },

  optionCorrect: {
    borderColor: C.success,
    backgroundColor: "#e9f8f0"
  },

  optionWrong: {
    borderColor: C.danger,
    backgroundColor: "#fff0f0"
  },

  optionLetter: {
    width: 27,
    height: 27,
    borderRadius: 8,
    backgroundColor: "#eef2f5",
    alignItems: "center",
    justifyContent: "center"
  },

  optionLetterSelected: {
    backgroundColor: C.accent
  },

  optionLetterText: {
    color: C.primary,
    fontSize: 11,
    fontWeight: "900"
  },

  optionLetterTextSelected: {
    color: "#fff"
  },

  optionText: {
    flex: 1,
    color: C.text,
    fontSize: 13,
    lineHeight: 19
  },

  selectedMark: {
    color: C.accent,
    fontWeight: "900",
    marginLeft: 5
  },

  questionActions: {
    marginTop: 7
  },

  checkButton: {
    alignSelf: "flex-start",
    paddingVertical: 11,
    paddingHorizontal: 16,
    borderRadius: 9,
    backgroundColor: C.primary
  },

  checkButtonText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 12
  },

  feedback: {
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 3
  },

  feedbackGood: {
    backgroundColor: "#ecfdf5",
    borderLeftColor: C.success
  },

  feedbackBad: {
    backgroundColor: "#fff1f2",
    borderLeftColor: C.danger
  },

  feedbackTitle: {
    color: C.primaryDark,
    fontWeight: "900",
    marginBottom: 5
  },

  feedbackText: {
    color: C.muted,
    fontSize: 13,
    lineHeight: 20
  },

  endCard: {
    padding: 18,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: C.border,
    marginTop: 3
  },

  endCardTitle: {
    color: C.primaryDark,
    fontWeight: "900",
    fontSize: 18,
    marginBottom: 5
  },

  endCardText: {
    color: C.muted,
    fontSize: 13,
    marginBottom: 13
  },

  primaryWideButton: {
    backgroundColor: C.accent,
    borderRadius: 11,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 5
  },

  primaryWideButtonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 14
  },

  disabledButton: {
    backgroundColor: C.primary
  },

  instructionBox: {
    padding: 13,
    backgroundColor: "#f0f8f7",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: C.accent
  },

  instructionText: {
    color: C.accent,
    fontSize: 10,
    letterSpacing: 1,
    fontWeight: "900",
    marginBottom: 5
  },

  essayInput: {
    minHeight: 240,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 11,
    padding: 13,
    fontSize: 15,
    color: C.text,
    backgroundColor: "#fbfdfd"
  },

  counter: {
    fontSize: 11,
    color: C.muted,
    marginTop: 8
  },

  footer: {
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 15
  },

  footerRule: {
    height: 1,
    width: "100%",
    backgroundColor: "#dbe4e6",
    marginBottom: 17
  },

  footerBrand: {
    color: C.primary,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2
  },

  footerText: {
    color: C.muted,
    fontSize: 11,
    marginTop: 5
  },

  materialCardBody: {
    padding: 17,
    backgroundColor: "#fff"
  },

  rulesCard: {
    backgroundColor: "#fff",
    borderRadius: 17,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: "#34495e",
    shadowOpacity: 0.05,
    shadowRadius: 7,
    elevation: 2
  },

  rulesTitle: {
    color: "#9a3412",
    backgroundColor: "#fff7ed",
    fontSize: 15,
    fontWeight: "900",
    padding: 11,
    borderRadius: 8,
    marginBottom: 10
  },

  ruleText: {
    color: C.text,
    fontSize: 12,
    lineHeight: 21,
    marginBottom: 4
  },

  timerRow: {
    marginTop: 13,
    padding: 13,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8
  },

  timerText: {
    color: C.primaryDark,
    fontSize: 17,
    fontWeight: "900"
  },

  timerQuestion: {
    color: C.muted,
    fontSize: 12,
    fontWeight: "700"
  },

  simuladoScoreCard: {
    borderRadius: 12,
    padding: 14
  },
});