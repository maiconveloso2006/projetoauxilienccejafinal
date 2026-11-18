import React, { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Question = {
  title: string;
  prompt: string;
  options: { label: string; value: string }[];
  correct: string;
  explanation?: string;
};

type StudyContentScreenProps = {
  kind: "exercicio" | "simulado" | "redacao";
  title: string;
  subtitle: string;
  duration?: string;
  questions?: Question[];
  essayPrompt?: string;
  essaySupport?: string[];
};

export default function StudyContentScreen({
  kind,
  title,
  subtitle,
  duration,
  questions = [],
  essayPrompt,
  essaySupport = [],
}: StudyContentScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finished, setFinished] = useState(false);
  const [essay, setEssay] = useState("");

  const total = questions.length;

  const score = useMemo(() => {
    return questions.reduce((totalScore, question, index) => {
      return totalScore + (answers[index] === question.correct ? 1 : 0);
    }, 0);
  }, [answers, questions]);

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const resultMessage = useMemo(() => {
    if (percentage >= 80) {
      return kind === "exercicio"
        ? "Parabéns! Você teve um excelente desempenho nos exercícios."
        : "Parabéns! Você teve um excelente desempenho no simulado.";
    }

    if (percentage >= 60) {
      return "Bom trabalho! Continue estudando e revise os conteúdos que você teve mais dificuldade.";
    }

    return "Você precisa estudar mais. Dedique mais tempo aos tópicos que você teve mais dificuldade.";
  }, [percentage, kind]);

  function selectAnswer(value: string) {
    if (finished) return;

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion]: value,
    }));
  }

  function nextQuestion() {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((previous) => previous + 1);
      return;
    }

    setFinished(true);
  }

  function previousQuestion() {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  }

  function restart() {
    setAnswers({});
    setCurrentQuestion(0);
    setFinished(false);
    setEssay("");
  }

  if (finished) {
    if (kind === "redacao") {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <View style={styles.badge}>
              <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
              <Text style={styles.badgeText}>Redação</Text>
            </View>

            <Text style={styles.headerTitle}>{title}</Text>
            <Text style={styles.headerSubtitle}>{subtitle}</Text>
          </View>

          <View style={styles.resultCard}>
            <MaterialCommunityIcons
              name="party-popper"
              size={48}
              color="#159895"
            />

            <Text style={styles.resultTitle}>Resultado da Redação</Text>

            <Text style={styles.resultScore}>
              {essay.trim().length > 0 ? "Concluída" : "Não respondida"}
            </Text>

            <Text style={styles.resultMessage}>
              Você concluiu a atividade de redação. Revise seu texto antes de
              finalizar seus estudos.
            </Text>

            <TouchableOpacity style={styles.primaryButton} onPress={restart}>
              <MaterialCommunityIcons
                name="refresh"
                size={20}
                color="#fff"
              />
              <Text style={styles.primaryButtonText}>Tentar Novamente</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      );
    }

    const isExercise = kind === "exercicio";

    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.badge}>
            <MaterialCommunityIcons
              name={isExercise ? "pencil" : "clipboard-check-outline"}
              size={18}
              color="#fff"
            />
            <Text style={styles.badgeText}>
              {isExercise ? "Exercícios Práticos" : "Simulado"}
            </Text>
          </View>

          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        </View>

        <View style={styles.resultArea}>
          <Text style={styles.resultHeading}>
            {isExercise ? "Resultado Final" : "Resultado do Simulado"}
          </Text>

          <View style={styles.resultCard}>
            {!isExercise && (
              <MaterialCommunityIcons
                name="party-popper"
                size={48}
                color="#159895"
                style={styles.partyIcon}
              />
            )}

            <Text style={styles.resultTitle}>
              {isExercise
                ? `Você acertou ${score} de ${total} exercícios`
                : `${score}/${total}`}
            </Text>

            <Text style={styles.resultMessage}>{resultMessage}</Text>

            <TouchableOpacity style={styles.primaryButton} onPress={restart}>
              <MaterialCommunityIcons
                name="refresh"
                size={20}
                color="#fff"
              />
              <Text style={styles.primaryButtonText}>
                {isExercise ? "Iniciar Novamente" : "Tentar Novamente"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }

  if (kind === "redacao") {
    return (
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View style={styles.badge}>
            <MaterialCommunityIcons name="pencil" size={18} color="#fff" />
            <Text style={styles.badgeText}>Redação</Text>
          </View>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        </View>

        <View style={styles.contentCard}>
          {duration ? (
            <View style={styles.infoRow}>
              <MaterialCommunityIcons name="clock-outline" size={20} color="#159895" />
              <Text style={styles.infoText}>{duration}</Text>
            </View>
          ) : null}

          <Text style={styles.questionTitle}>Proposta de redação</Text>

          {essaySupport.map((item, index) => (
            <Text key={index} style={styles.supportText}>
              {item}
            </Text>
          ))}

          {essayPrompt ? (
            <Text style={styles.essayPrompt}>{essayPrompt}</Text>
          ) : null}

          <TextInput
            value={essay}
            onChangeText={setEssay}
            multiline
            textAlignVertical="top"
            placeholder="Digite sua redação aqui..."
            style={styles.essayInput}
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setFinished(true)}
          >
            <Text style={styles.primaryButtonText}>Finalizar Redação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  const question = questions[currentQuestion];
  const selected = answers[currentQuestion];

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.badge}>
          <MaterialCommunityIcons
            name={kind === "exercicio" ? "pencil" : "clipboard-check-outline"}
            size={18}
            color="#fff"
          />
          <Text style={styles.badgeText}>
            {kind === "exercicio" ? "Exercícios Práticos" : "Simulado"}
          </Text>
        </View>

        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </View>

      <View style={styles.contentCard}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>
            Questão {currentQuestion + 1} de {total}
          </Text>
          {duration ? (
            <View style={styles.timer}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={18}
                color="#f59e0b"
              />
              <Text style={styles.timerText}>{duration}</Text>
            </View>
          ) : null}
        </View>

        <Text style={styles.questionTitle}>{question.title}</Text>
        <Text style={styles.prompt}>{question.prompt}</Text>

        <View style={styles.optionsContainer}>
          {question.options.map((option) => {
            const active = selected === option.value;

            return (
              <TouchableOpacity
                key={option.value}
                style={[styles.option, active && styles.optionActive]}
                onPress={() => selectAnswer(option.value)}
                activeOpacity={0.8}
              >
                <View style={[styles.optionCircle, active && styles.optionCircleActive]}>
                  {active ? (
                    <MaterialCommunityIcons
                      name="check"
                      size={16}
                      color="#fff"
                    />
                  ) : null}
                </View>

                <Text style={[styles.optionText, active && styles.optionTextActive]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.navigationRow}>
          <TouchableOpacity
            style={[
              styles.secondaryButton,
              currentQuestion === 0 && styles.disabledButton,
            ]}
            onPress={previousQuestion}
            disabled={currentQuestion === 0}
          >
            <Text style={styles.secondaryButtonText}>Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.primaryButton,
              !selected && styles.disabledPrimaryButton,
            ]}
            onPress={nextQuestion}
            disabled={!selected}
          >
            <Text style={styles.primaryButtonText}>
              {currentQuestion === total - 1 ? "Finalizar" : "Próxima"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eef3f6",
  },

  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
    backgroundColor: "#304d61",
    borderRadius: 18,
    padding: 24,
    marginBottom: 24,
  },

  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 22,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 18,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 7,
  },

  headerSubtitle: {
    color: "#e5edf2",
    fontSize: 15,
    lineHeight: 22,
  },

  resultArea: {
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
    alignItems: "center",
    paddingTop: 25,
  },

  resultHeading: {
    color: "#4d75a8",
    fontSize: 23,
    fontWeight: "800",
    marginBottom: 20,
  },

  resultCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#dce5eb",
    padding: 34,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },

  partyIcon: {
    marginBottom: 8,
  },

  resultTitle: {
    color: "#ff822e",
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 18,
  },

  resultScore: {
    color: "#159895",
    fontSize: 48,
    fontWeight: "900",
    marginBottom: 18,
  },

  resultMessage: {
    color: "#5d6d80",
    fontSize: 15,
    lineHeight: 23,
    textAlign: "center",
    maxWidth: 760,
    marginBottom: 26,
  },

  contentCard: {
    width: "100%",
    maxWidth: 1000,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 24,
    borderWidth: 1,
    borderColor: "#dce5eb",
  },

  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  progressText: {
    color: "#526274",
    fontSize: 14,
    fontWeight: "700",
  },

  timer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  timerText: {
    color: "#526274",
    fontWeight: "700",
  },

  questionTitle: {
    color: "#1f2937",
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 12,
  },

  prompt: {
    color: "#4f5f70",
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 20,
  },

  optionsContainer: {
    gap: 12,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d8e1e8",
    borderRadius: 12,
    padding: 15,
    backgroundColor: "#fff",
  },

  optionActive: {
    borderColor: "#159895",
    backgroundColor: "#effafa",
  },

  optionCircle: {
    width: 27,
    height: 27,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#cbd5df",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  optionCircleActive: {
    backgroundColor: "#159895",
    borderColor: "#159895",
  },

  optionText: {
    flex: 1,
    color: "#435365",
    fontSize: 15,
    lineHeight: 21,
  },

  optionTextActive: {
    color: "#1b6665",
    fontWeight: "700",
  },

  navigationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 26,
  },

  primaryButton: {
    minHeight: 46,
    backgroundColor: "#4d75a8",
    borderRadius: 7,
    paddingHorizontal: 25,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "800",
  },

  secondaryButton: {
    minHeight: 46,
    borderRadius: 7,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#e8eef3",
    justifyContent: "center",
  },

  secondaryButtonText: {
    color: "#425466",
    fontSize: 15,
    fontWeight: "800",
  },

  disabledButton: {
    opacity: 0.45,
  },

  disabledPrimaryButton: {
    opacity: 0.5,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 18,
  },

  infoText: {
    color: "#526274",
    fontWeight: "700",
  },

  supportText: {
    color: "#5b6878",
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 14,
  },

  essayPrompt: {
    color: "#1f2937",
    fontSize: 17,
    lineHeight: 25,
    fontWeight: "700",
    marginVertical: 12,
  },

  essayInput: {
    minHeight: 260,
    borderWidth: 1,
    borderColor: "#d6e0e7",
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    color: "#253444",
    marginBottom: 18,
    backgroundColor: "#fff",
  },
});