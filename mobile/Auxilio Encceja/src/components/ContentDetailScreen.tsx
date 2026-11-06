import { useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { contentScreens, ScreenKind } from "../data/contentScreens";

type Props = { kind: ScreenKind; materiaOverride?: string };

const perguntasPorMateria: Record<string, { pergunta: string; opcoes: string[]; correta: number; explicacao: string }> = {
  matematica: { pergunta: "Quanto é 20% de 150?", opcoes: ["15", "20", "30", "45"], correta: 2, explicacao: "20% = 0,2. Então 0,2 × 150 = 30." },
  portugues: { pergunta: "Qual estratégia ajuda a identificar a ideia principal de um texto?", opcoes: ["Ler apenas o título", "Relacionar as informações do texto", "Ignorar os parágrafos finais", "Escolher a frase mais longa"], correta: 1, explicacao: "A ideia principal é identificada relacionando as informações e os argumentos apresentados." },
  historia: { pergunta: "A Independência do Brasil foi proclamada em:", opcoes: ["1500", "1789", "1822", "1889"], correta: 2, explicacao: "A Independência do Brasil foi proclamada em 1822." },
  geografia: { pergunta: "Qual elemento representa uma forma de relevo?", opcoes: ["Planície", "Latitude", "População", "Moeda"], correta: 0, explicacao: "Planície é uma forma de relevo." },
  ciencias: { pergunta: "Qual órgão é responsável por bombear o sangue?", opcoes: ["Pulmão", "Estômago", "Coração", "Rim"], correta: 2, explicacao: "O coração bombeia o sangue para o corpo." },
  sociologia: { pergunta: "Cidadania envolve principalmente:", opcoes: ["Somente deveres", "Direitos e deveres na sociedade", "Apenas consumo", "Isolamento social"], correta: 1, explicacao: "Cidadania envolve direitos, deveres e participação social." },
  redacao: { pergunta: "Uma redação dissertativo-argumentativa deve apresentar:", opcoes: ["Somente uma lista", "Tese e argumentos organizados", "Apenas perguntas", "Frases sem relação"], correta: 1, explicacao: "Esse tipo de texto apresenta uma tese sustentada por argumentos." },
  encceja: { pergunta: "Qual atitude favorece a preparação para uma prova?", opcoes: ["Estudar sem pausas", "Revisar conteúdos e praticar questões", "Deixar tudo para o último dia", "Ignorar os erros"], correta: 1, explicacao: "Revisão contínua e prática ajudam a identificar o que precisa ser reforçado." },
};

export default function ContentDetailScreen({ kind, materiaOverride }: Props) {
  const router = useRouter();
  const params = useLocalSearchParams<{ materia?: string }>();
  const materiaKey = String(materiaOverride || params.materia || (kind === "simulados" ? "encceja" : "matematica")).toLowerCase();
  const info = contentScreens[kind][materiaKey] || contentScreens[kind][kind === "simulados" ? "encceja" : "matematica"];
  const [estudado, setEstudado] = useState(false);
  const [resposta, setResposta] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);
  const question = useMemo(() => perguntasPorMateria[materiaKey] || perguntasPorMateria.matematica, [materiaKey]);
  const isApostila = kind === "apostilas";
  const isExercicio = kind === "exercicios";
  const accent = isApostila ? "#8b5cf6" : isExercicio ? "#10b981" : "#25717a";
  const label = isApostila ? "APOSTILA" : isExercicio ? "EXERCÍCIOS PRÁTICOS" : "SIMULADO";
  const icon = isApostila ? "book-open-page-variant" : isExercicio ? "pencil" : "trophy";

  return (
    <View style={styles.screen}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back} accessibilityLabel="Voltar">
          <MaterialCommunityIcons name="arrow-left" size={22} color="#fff" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.brand}>Auxílio Encceja</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={[styles.hero, { backgroundColor: accent }]}>
          <View style={styles.heroLogo}>
            <Image
              source={require("@/assets/images/Logo 3.0.png")}
              style={styles.heroLogo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.badge}>{label}</Text>
          <Text style={styles.title}>{info.titulo}</Text>
          <Text style={styles.description}>{info.descricao}</Text>
          <Text style={styles.detail}>{info.materia}  •  {info.detalhe}</Text>
        </View>

        {isApostila ? (
          <>
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Como usar este material</Text>
              <InfoRow icon="book-open-outline" title="Estude por etapas" text="Leia um tópico de cada vez e anote os conceitos importantes." />
              <InfoRow icon="pencil-outline" title="Faça anotações" text="Registre dúvidas e exemplos para revisar depois." />
              <InfoRow icon="check-circle-outline" title="Pratique ao terminar" text="Use a tela de exercícios para conferir o que aprendeu." />
            </View>
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Roteiro de estudo</Text>
              {["Leia o conteúdo com atenção", "Revise definições e exemplos", "Anote os pontos que precisam de reforço", "Resolva exercícios relacionados"].map((item, i) => (
                <View key={item} style={styles.checkRow}><Text style={[styles.number, { backgroundColor: accent }]}>{i + 1}</Text><Text style={styles.rowText}>{item}</Text></View>
              ))}
            </View>
            <TouchableOpacity style={[styles.primaryButton, { backgroundColor: accent }]} onPress={() => setEstudado(!estudado)}>
              <MaterialCommunityIcons name={estudado ? "check-circle" : "bookmark-check-outline"} size={20} color="#fff" />
              <Text style={styles.primaryText}>{estudado ? "Material marcado como estudado" : "Marcar como estudado"}</Text>
            </TouchableOpacity>
            <Text style={styles.note}>Esta tela é a versão mobile da seção de apostilas. Vincule o PDF ou arquivo de estudo real do seu projeto no botão acima quando o caminho do material estiver definido.</Text>
          </>
        ) : (
          <>
            <View style={styles.card}>
              <View style={styles.questionHeader}>
                <Text style={styles.sectionTitle}>{isExercicio ? "Questão de prática" : "Questão de exemplo"}</Text>
                <Text style={styles.questionCount}>1 / {info.detalhe.split(" ")[0]}</Text>
              </View>
              <Text style={styles.questionText}>{question.pergunta}</Text>
              {question.opcoes.map((opcao, i) => {
                const selected = resposta === i;
                const correct = respondida && i === question.correta;
                const wrong = respondida && selected && i !== question.correta;
                return (
                  <TouchableOpacity key={opcao} disabled={respondida} onPress={() => setResposta(i)}
                    style={[styles.option, selected && styles.optionSelected, correct && styles.optionCorrect, wrong && styles.optionWrong]}>
                    <Text style={styles.optionLetter}>{String.fromCharCode(65 + i)}</Text>
                    <Text style={styles.optionText}>{opcao}</Text>
                    {correct ? <MaterialCommunityIcons name="check-circle" size={20} color="#15803d" /> : null}
                    {wrong ? <MaterialCommunityIcons name="close-circle" size={20} color="#b91c1c" /> : null}
                  </TouchableOpacity>
                );
              })}
              {respondida && <View style={styles.feedback}><Text style={styles.feedbackTitle}>{resposta === question.correta ? "Resposta correta!" : "Vamos revisar"}</Text><Text style={styles.rowText}>{question.explicacao}</Text></View>}
              {!respondida ? (
                <TouchableOpacity disabled={resposta === null} onPress={() => setRespondida(true)} style={[styles.primaryButton, { backgroundColor: accent }, resposta === null && styles.disabledButton]}>
                  <Text style={styles.primaryText}>Conferir resposta</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => { setResposta(null); setRespondida(false); }} style={[styles.primaryButton, { backgroundColor: accent }]}>
                  <MaterialCommunityIcons name="refresh" size={19} color="#fff" /><Text style={styles.primaryText}>Tentar novamente</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.card}>
              <Text style={styles.sectionTitle}>Dica de estudo</Text>
              <Text style={styles.rowText}>Leia todas as alternativas antes de responder. Ao errar, revise a explicação e tente novamente.</Text>
            </View>
            <Text style={styles.note}>A interação de exemplo já funciona. Para reproduzir todas as questões da versão web, acrescente ao arquivo de dados as perguntas existentes no material original.</Text>
          </>
        )}
        <TouchableOpacity style={styles.secondaryButton} onPress={() => router.replace("/conteudos")}>
          <MaterialCommunityIcons name="bookshelf" size={19} color="#25717a" />
          <Text style={styles.secondaryText}>Voltar para Conteúdos</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Auxílio Encceja © 2026</Text>
      </ScrollView>
    </View>
  );
}

function InfoRow({ icon, title, text }: { icon: string; title: string; text: string }) {
  return <View style={styles.infoRow}><MaterialCommunityIcons name={icon as any} size={22} color="#25717a" /><View style={{ flex: 1 }}><Text style={styles.infoTitle}>{title}</Text><Text style={styles.rowText}>{text}</Text></View></View>;
}

const styles = StyleSheet.create({
  screen: { 
    flex: 1, 
    backgroundColor: "#F4F6F8" 
  },

  navbar: {
    backgroundColor: "#34495e", 
    paddingTop: 42, 
    paddingBottom: 14, 
    paddingHorizontal: 18, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between" 
  },

  back: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5 
  },

  backText: { 
    color: "#fff", 
    fontWeight: "700", 
    fontSize: 14 
  },

  brand: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "800" 
  },

  content: { 
    padding: 16, 
    paddingBottom: 40, 
    gap: 14 
  },

  hero: { 
    borderRadius: 20, 
    padding: 22, 
    overflow: "hidden" 
  },

  heroIcon: { 
    width: 52, 
    height: 52, 
    borderRadius: 15, 
    backgroundColor: "#fff", 
    alignItems: "center", 
    justifyContent: "center", 
    marginBottom: 13, 
    overflow: "hidden" 
  },

  heroLogo: { 
    width: 40, 
    height: 40 
  },

  badge: { 
    color: "#fff", 
    fontSize: 11, 
    fontWeight: "800", 
    letterSpacing: 1, 
    marginBottom: 8 
  },

  title: { 
    color: "#fff", 
    fontSize: 24, 
    fontWeight: "900", 
    lineHeight: 30, 
    marginBottom: 8 
  },

  description: { 
    color: "#fff", 
    fontSize: 14, 
    lineHeight: 21, 
    opacity: 0.96 
  },

  detail: { 
    color: "#fff", 
    fontSize: 12, 
    fontWeight: "700", 
    marginTop: 14, 
    opacity: 0.9 
  },
  card: { 
    backgroundColor: "#fff", 
    borderRadius: 18, 
    padding: 17, 
    borderWidth: 1, 
    borderColor: "#E7EAED", 
    gap: 12 
  },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "800", 
    color: "#2C3E50", 
    flex: 1 
  },

  infoRow: { 
    flexDirection: "row", 
    alignItems: "flex-start", 
    gap: 11, 
    paddingVertical: 5 
  },

  infoTitle: { 
    fontSize: 14, 
    fontWeight: "800", 
    color: "#34495e", 
    marginBottom: 3 
  },

  rowText: { 
    color: "#64748b", 
    fontSize: 13, 
    lineHeight: 20, 
    flexShrink: 1 
  },

  checkRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10 
  },

  number: { 
    color: "#fff", 
    width: 27, 
    height: 27, 
    textAlign: "center", 
    textAlignVertical: "center", 
    borderRadius: 14, 
    overflow: "hidden", 
    fontWeight: "800", 
    paddingTop: 4 
  },

  primaryButton: { 
    minHeight: 48, 
    borderRadius: 12, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: 8, 
    paddingHorizontal: 14, 
    paddingVertical: 12 
  },

  primaryText: { 
    color: "#fff", 
    fontSize: 14, 
    fontWeight: "800", 
    textAlign: "center" 
  },

  note: { 
    color: "#64748b", 
    fontSize: 12, 
    lineHeight: 18, 
    paddingHorizontal: 3 
  },

  questionHeader: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 8 
  },

  questionCount: { 
    color: "#64748b", 
    fontSize: 11, 
    fontWeight: "700" 
  },

  questionText: { 
    color: "#2C3E50", 
    fontSize: 16, 
    lineHeight: 24, 
    fontWeight: "700", 
    marginVertical: 5 
  },

  option: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10, 
    borderWidth: 1.5, 
    borderColor: "#E2E8F0", 
    borderRadius: 12, 
    padding: 12, 
    minHeight: 48 
  },

  optionSelected: { 
    borderColor: "#25717a", 
    backgroundColor: "#edf7f7" 
  },

  optionCorrect: {
    borderColor: "#16a34a", 
    backgroundColor: "#f0fdf4" 
  },

  optionWrong: { 
    borderColor: "#dc2626", 
    backgroundColor: "#fef2f2" 
  },

  optionLetter: { 
    width: 25, 
    height: 25, 
    textAlign: "center", 
    textAlignVertical: "center", 
    borderRadius: 13, 
    backgroundColor: "#F1F5F9", 
    color: "#34495e", 
    fontSize: 12, 
    fontWeight: "800", 
    overflow: "hidden", 
    paddingTop: 4 
  },

  optionText: {
    flex: 1, 
    color: "#334155", 
    fontSize: 14 
  },

  feedback: { 
    backgroundColor: "#F8FAFC", 
    borderRadius: 12, 
    padding: 12, 
    gap: 5 
  },

  feedbackTitle: { 
    color: "#2C3E50", 
    fontSize: 14, 
    fontWeight: "800" 
  },

  disabledButton: { 
    opacity: 0.45 
  },

  secondaryButton: { 
    borderWidth: 1.5, 
    borderColor: "#25717a", 
    borderRadius: 12, 
    minHeight: 46, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: 8, 
    backgroundColor: "#fff" 
  },

  secondaryText: { 
    color: "#25717a", 
    fontWeight: "800", 
    fontSize: 13 
  },

  footer: { 
    textAlign: "center", 
    color: "#94a3b8", 
    fontSize: 12, 
    marginTop: 5 
  },
});