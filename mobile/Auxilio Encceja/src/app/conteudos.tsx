import { useRouter, useLocalSearchParams, Href } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useMemo, useState } from "react";
import { VideoView, useVideoPlayer } from "expo-video";

type ContentType = "videoaula" | "apostila" | "exercicio" | "simulado";

type ContentItem = {
  id: number;
  tipo: ContentType;
  titulo: string;
  materia: string;
  materiaKey: string;
  nivel?: string;
  duracao?: string;
  questoes?: number;
  img?: ImageSourcePropType;
  link?: string;
  video?: any;
};

const materiasInfo: Record<string, { nome: string; cor: string; icone: string }> = {
  todas: { nome: "Todas", cor: "#34495e", icone: "view-grid-outline" },
  matematica: { nome: "Matemática", cor: "#159895", icone: "calculator-variant" },
  portugues: { nome: "Português", cor: "#159895", icone: "book-open-variant" },
  historia: { nome: "História", cor: "#159895", icone: "history" },
  geografia: { nome: "Geografia", cor: "#159895", icone: "earth" },
  ciencias: { nome: "Ciências", cor: "#159895", icone: "flask-outline" },
};

const contentData: ContentItem[] = [
  // Videoaulas
  { id: 1, tipo: "videoaula", titulo: "Fórmulas Matemáticas com Símbolos, Números e Letras", materia: "Matemática", materiaKey: "matematica", nivel: "intermediário", duracao: "45 min", video: require("../../assets/images/Videos/matematica_simbolos.mp4") },
  { id: 2, tipo: "videoaula", titulo: "Conjugação Verbal", materia: "Português", materiaKey: "portugues", nivel: "básico", duracao: "30 min", video: require("../../assets/images/Videos/conjugacao_verbal.mp4") },
  { id: 3, tipo: "videoaula", titulo: "História do Brasil - Visão Geral", materia: "História", materiaKey: "historia", nivel: "intermediário", duracao: "50 min", video: require("../../assets/images/Videos/historia_brasil.mp4") },
  { id: 4, tipo: "videoaula", titulo: "Geografia Física - Rotação da Terra", materia: "Geografia", materiaKey: "geografia", nivel: "básico", duracao: "35 min", video: require("../../assets/images/Videos/rotacao_terra.mp4") },
  { id: 5, tipo: "videoaula", titulo: "Tabela Periódica Completa", materia: "Ciências", materiaKey: "ciencias", nivel: "intermediário", duracao: "40 min", video: require("../../assets/images/Videos/tabela_periodica.mp4") },
  { id: 6, tipo: "videoaula", titulo: "Exercícios Físicos e Saúde", materia: "Educação Física", materiaKey: "educacaofisica", nivel: "básico", duracao: "25 min", video: require("../../assets/images/Videos/exercicios_fs.mp4") },

  // Apostilas
  { id: 7, tipo: "apostila", titulo: "Apostila de Matemática - Fundamental", materia: "Matemática", materiaKey: "matematica", nivel: "Ensino Fundamental", link: "/apostilas/matematica" },
  { id: 8, tipo: "apostila", titulo: "Apostila de Português - Ensino Médio", materia: "Português", materiaKey: "portugues", nivel: "Ensino Médio", link: "/apostilas/portugues" },
  { id: 9, tipo: "apostila", titulo: "Ciências da Natureza - Volume Único", materia: "Ciências", materiaKey: "ciencias", nivel: "Ensino Médio", link: "/apostilas/ciencias" },
  { id: 10, tipo: "apostila", titulo: "Apostila de História", materia: "História", materiaKey: "historia", nivel: "Ensino Fundamental", link: "/apostilas/historia" },
  { id: 11, tipo: "apostila", titulo: "Apostila de Geografia - Fundamental", materia: "Geografia", materiaKey: "geografia", nivel: "Ensino Fundamental", link: "/apostilas/geografia" },
  { id: 12, tipo: "apostila", titulo: "Sociologia - Introdução à Teoria Social", materia: "Sociologia", materiaKey: "sociologia", nivel: "Ensino Médio", link: "/apostilas/sociologia" },

  // Exercícios
  { id: 13, tipo: "exercicio", titulo: "Exercícios de Matemática Básica", materia: "Matemática", materiaKey: "matematica", questoes: 20, link: "/exercicios/matematica" },
  { id: 14, tipo: "exercicio", titulo: "Interpretação de Texto", materia: "Português", materiaKey: "portugues", questoes: 25, link: "/exercicios/portugues" },
  { id: 15, tipo: "exercicio", titulo: "História do Brasil Colonial", materia: "História", materiaKey: "historia", questoes: 15, link: "/exercicios/historia" },
  { id: 16, tipo: "exercicio", titulo: "Geografia Humana e Econômica", materia: "Geografia", materiaKey: "geografia", questoes: 18, link: "/exercicios/geografia" },
  { id: 17, tipo: "exercicio", titulo: "Ciências Naturais", materia: "Ciências", materiaKey: "ciencias", questoes: 20, link: "/exercicios/ciencias" },
  { id: 18, tipo: "exercicio", titulo: "Sociologia e Cidadania", materia: "Sociologia", materiaKey: "sociologia", questoes: 12, link: "/exercicios/sociologia" },

  // Simulados
  { id: 19, tipo: "simulado", titulo: "Simulado Completo ENCCEJA 2023", materia: "Todos", materiaKey: "todas", duracao: "180 min", questoes: 60, link: "/simulados/encceja" },
  { id: 20, tipo: "simulado", titulo: "Simulado Focado em Matemática", materia: "Matemática", materiaKey: "matematica", duracao: "60 min", questoes: 15, link: "/simulados/matematica" },
  { id: 21, tipo: "simulado", titulo: "Simulado de Português e Literatura", materia: "Português", materiaKey: "portugues", duracao: "60 min", questoes: 15, link: "/simulados/portugues" },
  { id: 22, tipo: "simulado", titulo: "Simulado de História e Geografia", materia: "História", materiaKey: "historia", duracao: "60 min", questoes: 15, link: "/simulados/historia-geografia" },
  { id: 23, tipo: "simulado", titulo: "Simulado de Ciências da Natureza", materia: "Ciências", materiaKey: "ciencias", duracao: "60 min", questoes: 15, link: "/simulados/ciencias" },
  { id: 24, tipo: "simulado", titulo: "Simulado de Redação Oficial", materia: "Redação", materiaKey: "redacao", duracao: "60 min", questoes: 1, link: "/simulados/redacao" },
];

const tipoInfo: Record<ContentType, { nome: string; icone: string; cor: string }> = {
  videoaula: { nome: "Videoaulas", icone: "play-circle", cor: "#159895" },
  apostila: { nome: "Apostilas", icone: "book-open-page-variant", cor: "#159895" },
  exercicio: { nome: "Exercícios", icone: "pencil", cor: "#159895" },
  simulado: { nome: "Simulados", icone: "trophy", cor: "#159895" },
};

const TIPOS_VALIDOS: ContentType[] = ["videoaula", "apostila", "exercicio", "simulado"];

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export default function Conteudos() {
  const router = useRouter();
  const params = useLocalSearchParams<{ materia?: string; tipo?: string }>();

  const [materiaAtiva, setMateriaAtiva] = useState<string>(
    params.materia && params.materia in materiasInfo ? params.materia : "todas"
  );

  const [tipoAtivo, setTipoAtivo] = useState<ContentType | "all">(
    params.tipo && TIPOS_VALIDOS.includes(params.tipo as ContentType)
      ? (params.tipo as ContentType)
      : "all"
  );

  const [busca, setBusca] = useState("");

  useEffect(() => {
    if (params.materia && params.materia in materiasInfo) {
      setMateriaAtiva(params.materia);
    }
    if (params.tipo && TIPOS_VALIDOS.includes(params.tipo as ContentType)) {
      setTipoAtivo(params.tipo as ContentType);
    }
  }, [params.materia, params.tipo]);

  const itensFiltrados = useMemo(() => {
    return contentData.filter((item) => {
      const matchMateria = materiaAtiva === "todas" || item.materiaKey === materiaAtiva;
      const matchTipo = tipoAtivo === "all" || item.tipo === tipoAtivo;
      const matchBusca =
        busca.trim().length === 0 ||
        normalize(item.titulo).includes(normalize(busca)) ||
        normalize(item.materia).includes(normalize(busca));
      return matchMateria && matchTipo && matchBusca;
    });
  }, [materiaAtiva, tipoAtivo, busca]);

  const counts = useMemo(() => {
    const base = contentData.filter((i) => materiaAtiva === "todas" || i.materiaKey === materiaAtiva);
    return {
      videoaula: base.filter((i) => i.tipo === "videoaula").length,
      apostila: base.filter((i) => i.tipo === "apostila").length,
      exercicio: base.filter((i) => i.tipo === "exercicio").length,
      simulado: base.filter((i) => i.tipo === "simulado").length,
      total: base.length,
    };
  }, [materiaAtiva]);

  const limparFiltros = () => {
    setMateriaAtiva("todas");
    setTipoAtivo("all");
    setBusca("");
  };

  const getCardVisual = (tipo: ContentType) => {
    if (tipo === "videoaula") return { bg: "#3b82f6", icone: "play-circle" as const };
    if (tipo === "apostila") return { bg: "#8b5cf6", icone: "file-document" as const };
    if (tipo === "exercicio") return { bg: "#10b981", icone: "pencil" as const };
    return { bg: "#10b981", icone: "trophy" as const };
  };

  const getNivelLabel = (nivel?: string) => {
    if (!nivel) return null;
    const n = normalize(nivel);
    if (n.includes("basico")) return "Básico";
    if (n.includes("intermediari")) return "Intermediário";
    if (n.includes("avancad")) return "Avançado";
    if (n.includes("fundamental")) return "Ensino Fundamental";
    if (n.includes("medio")) return "Ensino Médio";
    return nivel;
  };

  const veioDoModal =
    !!params.materia && params.materia !== "todas" && params.materia in materiasInfo;

  return (
    <View style={styles.telaInteira}>
      <View style={styles.header}>
        <View style={styles.headerSuperior}>
          <Image
            source={require("@/assets/images/Logo 3.0.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.textosHeader}>
            <Text style={styles.titulo}>Auxílio Encceja</Text>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
        >
          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/plataforma")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="home-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Início</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuBotao, styles.menuAtivo]}
            onPress={() => router.navigate("/conteudos")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="archive-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Conteúdos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/acompanhamento")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="chart-line" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Acompanhamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuBotao}
            onPress={() => router.navigate("/config")}
            activeOpacity={0.8}
          >
            <MaterialCommunityIcons name="cog-outline" size={15} color="#FFFFFF" />
            <Text style={styles.menuTexto}>Configurações</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeader}>
          <Text style={[styles.pageTitle, { color: "#25717A" }]}>Central de Conteúdos</Text>
          <Text style={styles.pageSubtitle}>
            Todos os materiais de estudo organizados em um só lugar
          </Text>
        </View>

        {/* Banner de origem */}
        {veioDoModal && (
          <View style={styles.origemBanner}>
            <View style={styles.origemBannerLeft}>
              <MaterialCommunityIcons name="filter-variant" size={18} color="#25717a" />
              <View style={styles.origemBannerTexts}>
                <Text style={styles.origemBannerTitle}>
                  Mostrando conteúdos de {materiasInfo[params.materia!].nome}
                </Text>
                <Text style={styles.origemBannerSubtitle}>
                  Filtros aplicados automaticamente a partir da sua escolha
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.origemBannerBtn}
              onPress={limparFiltros}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons name="close" size={14} color="#25717a" />
              <Text style={styles.origemBannerBtnText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Filtro por matéria */}
        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons name="book-outline" size={14} color="#7F8C8D" />
          <Text style={styles.sectionLabelText}>FILTRAR POR MATÉRIA</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.subjectTabs}
        >
          {Object.entries(materiasInfo).map(([key, info]) => {
            const ativo = materiaAtiva === key;
            return (
              <TouchableOpacity
                key={key}
                style={[styles.subjectBtn, ativo && styles.subjectBtnAtivo]}
                onPress={() => setMateriaAtiva(key)}
                activeOpacity={0.8}
              >
                <View style={[styles.subjectDot, { backgroundColor: info.cor }]} />
                <Text style={[styles.subjectBtnText, ativo && styles.subjectBtnTextAtivo]}>
                  {info.nome}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Banner de filtro ativo */}
        {(materiaAtiva !== "todas" || tipoAtivo !== "all" || busca.trim().length > 0) && (
          <View style={styles.selectionBanner}>
            <View style={styles.selectionBannerTextContainer}>
              <MaterialCommunityIcons name="filter" size={14} color="#7F8C8D" />
              <Text style={styles.selectionBannerText}>Filtrando por:</Text>
              {materiaAtiva !== "todas" && (
                <View style={[styles.filterTag, { backgroundColor: `${materiasInfo[materiaAtiva].cor}22` }]}>
                  <Text style={[styles.filterTagText, { color: materiasInfo[materiaAtiva].cor }]}>
                    {materiasInfo[materiaAtiva].nome}
                  </Text>
                </View>
              )}
              {tipoAtivo !== "all" && (
                <View style={styles.filterTagTipo}>
                  <Text style={styles.filterTagTipoText}>{tipoInfo[tipoAtivo as ContentType].nome}</Text>
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.btnLimpar} onPress={limparFiltros} activeOpacity={0.7}>
              <MaterialCommunityIcons name="close" size={14} color="#7F8C8D" />
              <Text style={styles.btnLimparText}>Limpar</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          <StatCard icone="play-circle" valor={counts.videoaula.toString()} titulo="Videoaulas" cor="#159895" />
          <StatCard icone="book-open-page-variant" valor={counts.apostila.toString()} titulo="Apostilas" cor="#159895" />
          <StatCard icone="pencil" valor={counts.exercicio.toString()} titulo="Exercícios" cor="#159895" />
          <StatCard icone="trophy" valor={counts.simulado.toString()} titulo="Simulados" cor="#159895" />
        </View>

        <View style={styles.statTotalCard}>
          <MaterialCommunityIcons name="bookshelf" size={22} color="#FFFFFF" />
          <Text style={styles.statTotalValue}>{counts.total}</Text>
          <Text style={styles.statTotalLabel}>Total de Conteúdos</Text>
        </View>

        {/* Search */}
        <View style={styles.searchWrapper}>
          <MaterialCommunityIcons name="magnify" size={20} color="#7F8C8D" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar conteúdos..."
            placeholderTextColor="#94A3B8"
            value={busca}
            onChangeText={setBusca}
          />
          {busca.length > 0 && (
            <TouchableOpacity onPress={() => setBusca("")} style={styles.searchClearBtn}>
              <MaterialCommunityIcons name="close-circle" size={18} color="#7F8C8D" />
            </TouchableOpacity>
          )}
        </View>

        {/* Filtro por tipo */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterTabs}
        >
          <FilterBtn
            label="Todos"
            icone="view-grid-outline"
            count={counts.total}
            ativo={tipoAtivo === "all"}
            onPress={() => setTipoAtivo("all")}
          />
          <FilterBtn
            label="Videoaulas"
            icone="play-circle-outline"
            count={counts.videoaula}
            ativo={tipoAtivo === "videoaula"}
            onPress={() => setTipoAtivo("videoaula")}
          />
          <FilterBtn
            label="Apostilas"
            icone="book-open-page-variant-outline"
            count={counts.apostila}
            ativo={tipoAtivo === "apostila"}
            onPress={() => setTipoAtivo("apostila")}
          />
          <FilterBtn
            label="Exercícios"
            icone="pencil-outline"
            count={counts.exercicio}
            ativo={tipoAtivo === "exercicio"}
            onPress={() => setTipoAtivo("exercicio")}
          />
          <FilterBtn
            label="Simulados"
            icone="trophy-outline"
            count={counts.simulado}
            ativo={tipoAtivo === "simulado"}
            onPress={() => setTipoAtivo("simulado")}
          />
        </ScrollView>

        {/* Seções de Conteúdo */}
        {(tipoAtivo === "all" || tipoAtivo === "videoaula") &&
          itensFiltrados.some((i) => i.tipo === "videoaula") && (
            <SectionContent
              titulo="Videoaulas"
              icone="play-circle"
              itens={itensFiltrados.filter((i) => i.tipo === "videoaula")}
              getCardVisual={getCardVisual}
              getNivelLabel={getNivelLabel}
            />
          )}

        {(tipoAtivo === "all" || tipoAtivo === "apostila") &&
          itensFiltrados.some((i) => i.tipo === "apostila") && (
            <SectionContent
              titulo="Apostilas"
              icone="book-open-page-variant"
              itens={itensFiltrados.filter((i) => i.tipo === "apostila")}
              getCardVisual={getCardVisual}
              getNivelLabel={getNivelLabel}
            />
          )}

        {(tipoAtivo === "all" || tipoAtivo === "exercicio") &&
          itensFiltrados.some((i) => i.tipo === "exercicio") && (
            <SectionContent
              titulo="Exercícios"
              icone="pencil"
              itens={itensFiltrados.filter((i) => i.tipo === "exercicio")}
              getCardVisual={getCardVisual}
              getNivelLabel={getNivelLabel}
            />
          )}

        {(tipoAtivo === "all" || tipoAtivo === "simulado") &&
          itensFiltrados.some((i) => i.tipo === "simulado") && (
            <SectionContent
              titulo="Simulados"
              icone="trophy"
              itens={itensFiltrados.filter((i) => i.tipo === "simulado")}
              getCardVisual={getCardVisual}
              getNivelLabel={getNivelLabel}
            />
          )}

        {/* Estado vazio */}
        {itensFiltrados.length === 0 && (
          <View style={styles.emptyState}>
            <MaterialCommunityIcons name="emoticon-sad-outline" size={64} color="#CBD5E1" />
            <Text style={styles.emptyStateTitle}>Nenhum resultado encontrado</Text>
            <Text style={styles.emptyStateText}>
              Tente buscar por palavras-chave diferentes ou limpar os filtros
            </Text>
            <TouchableOpacity style={styles.btnTentarNovamente} onPress={limparFiltros} activeOpacity={0.8}>
              <Text style={styles.btnTentarNovamenteText}>Limpar Filtros</Text>
            </TouchableOpacity>
          </View>
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

function StatCard({
  icone,
  valor,
  titulo,
  cor,
}: {
  icone: string;
  valor: string;
  titulo: string;
  cor: string;
}) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIcon, { backgroundColor: `${cor}22` }]}>
        <MaterialCommunityIcons name={icone as any} size={22} color={cor} />
      </View>
      <Text style={styles.statValue}>{valor}</Text>
      <Text style={styles.statLabel}>{titulo}</Text>
    </View>
  );
}

function FilterBtn({
  label,
  icone,
  count,
  ativo,
  onPress,
}: {
  label: string;
  icone: string;
  count: number;
  ativo: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.filterBtn, ativo && styles.filterBtnAtivo]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <MaterialCommunityIcons name={icone as any} size={15} color={ativo ? "#FFFFFF" : "#34495e"} />
      <Text style={[styles.filterBtnText, ativo && styles.filterBtnTextAtivo]}>{label}</Text>
      <View style={[styles.filterCount, ativo && styles.filterCountAtivo]}>
        <Text style={[styles.filterCountText, ativo && styles.filterCountTextAtivo]}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
}

function VideoPlayerModal({
  item,
  onClose,
}: {
  item: ContentItem;
  onClose: () => void;
}) {
  const player = useVideoPlayer(item.video, (playerInstance) => {
    // Configurações iniciais do player
    playerInstance.loop = false;
    // Inicia reprodução automaticamente
    playerInstance.play();
  });

  return (
    <Modal
      visible={true}
      animationType="fade"
      transparent
      supportedOrientations={["portrait", "landscape"]}
      onRequestClose={onClose}
    >
      <View style={styles.videoOverlay}>
        <View style={styles.videoModal}>
          <View style={styles.videoModalHeader}>
            <Text style={styles.videoModalTitulo} numberOfLines={2}>
              {item.titulo}
            </Text>
            <TouchableOpacity
              style={styles.videoModalFechar}
              onPress={onClose}
              activeOpacity={0.8}
            >
              <MaterialCommunityIcons name="close" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <VideoView
            player={player}
            style={styles.videoPlayer}
            nativeControls
            contentFit="contain"
          />

          <View style={styles.videoModalRodape}>
            {item.materia ? (
              <Text style={styles.videoModalInfo}>{item.materia}</Text>
            ) : null}
            {item.duracao ? (
              <Text style={styles.videoModalInfo}>{item.duracao}</Text>
            ) : null}
          </View>
        </View>
      </View>
    </Modal>
  );
}

function SectionContent({
  titulo,
  icone,
  itens,
  getCardVisual,
  getNivelLabel,
}: {
  titulo: string;
  icone: string;
  itens: ContentItem[];
  getCardVisual: (tipo: ContentType) => { bg: string; icone: any };
  getNivelLabel: (nivel?: string) => string | null;
}) {
  const router = useRouter();
  const [videoAtivo, setVideoAtivo] = useState<ContentItem | null>(null);

  const handlePress = (item: ContentItem) => {
    if (item.tipo === "videoaula") {
      if (item.video) setVideoAtivo(item);
      return;
    }
    if (!item.link) return;
    router.push(item.link as Href);
  };

  return (
    <View style={styles.contentSection}>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionTitleContainer}>
          <View style={styles.sectionTitleIcon}>
            <MaterialCommunityIcons name={icone as any} size={20} color="#FFFFFF" />
          </View>
          <Text style={styles.sectionTitle}>{titulo}</Text>
        </View>
        <Text style={styles.sectionCount}>
          {itens.length} {itens.length === 1 ? "item" : "itens"}
        </Text>
      </View>

      <View style={styles.contentGrid}>
        {itens.map((item) => {
          const visual = getCardVisual(item.tipo);
          const nivelLabel = getNivelLabel(item.nivel);
          const materiaInfo = materiasInfo[item.materiaKey];

          let btnLabel = "Acessar";
          let btnIconName: any = "book-open-variant";

          if (item.tipo === "videoaula") {
            btnLabel = "Assistir Videoaula";
            btnIconName = "play";
          } else if (item.tipo === "apostila") {
            btnLabel = "Acessar Apostila";
            btnIconName = "download-outline";
          } else if (item.tipo === "exercicio") {
            btnLabel = "Fazer Exercícios";
            btnIconName = "flash";
          } else if (item.tipo === "simulado") {
            btnLabel = "Iniciar Simulado";
            btnIconName = "rocket-launch";
          }

          return (
            <View key={item.id} style={styles.itemCard}>
              <View style={[styles.cardVisual, { backgroundColor: visual.bg }]}>
                {item.img ? (
                  <Image source={item.img} style={styles.cardImage} resizeMode="cover" />
                ) : null}

                <View style={styles.cardVisualOverlay} />

                <View style={styles.cardIconContainer}>
                  <MaterialCommunityIcons name={visual.icone} size={42} color="#FFFFFF" />
                </View>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.itemTitle} numberOfLines={2}>
                  {item.titulo}
                </Text>

                <View style={styles.itemTags}>
                  <View style={[styles.tag, { backgroundColor: `${materiaInfo?.cor || "#34495e"}22` }]}>
                    <MaterialCommunityIcons name="book-outline" size={9} color={materiaInfo?.cor || "#34495e"} />
                    <Text style={[styles.tagText, { color: materiaInfo?.cor || "#34495e" }]}>
                      {item.materia}
                    </Text>
                  </View>

                  {nivelLabel && (
                    <View style={styles.tagLevel}>
                      <Text style={styles.tagLevelText}>{nivelLabel}</Text>
                    </View>
                  )}

                  {item.duracao && (
                    <View style={styles.tagInfo}>
                      <MaterialCommunityIcons name="clock-outline" size={9} color="#7F8C8D" />
                      <Text style={styles.tagInfoText}>{item.duracao}</Text>
                    </View>
                  )}

                  {item.questoes !== undefined && (
                    <View style={styles.tagInfo}>
                      <MaterialCommunityIcons name="help-circle-outline" size={9} color="#7F8C8D" />
                      <Text style={styles.tagInfoText}>{item.questoes} questões</Text>
                    </View>
                  )}
                </View>

                <TouchableOpacity
                  style={styles.btnCard}
                  activeOpacity={0.85}
                  onPress={() => handlePress(item)}
                >
                  <View style={styles.btnCardContent}>
                    <MaterialCommunityIcons name={btnIconName} size={16} color="#000" />
                    <Text style={styles.btnCardText}>{btnLabel}</Text>
                    <MaterialCommunityIcons name="arrow-right" size={16} color="#000" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>

      {/* ✅ MIGRAÇÃO: usa o novo componente VideoPlayerModal */}
      {videoAtivo && videoAtivo.video ? (
        <VideoPlayerModal
          item={videoAtivo}
          onClose={() => setVideoAtivo(null)}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  telaInteira: {
    flex: 1,
    backgroundColor: "#F4F6F8",
  },

  header: {
    backgroundColor: "#34495e",
    paddingTop: 38,
    paddingBottom: 9,
    paddingHorizontal: 9,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
    paddingHorizontal: 5,
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

  scroll: {
    flex: 1,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },

  pageHeader: {
    alignItems: "center",
    marginBottom: 20,
  },

  pageTitle: {
    color: "#2C3E50",
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },

  pageSubtitle: {
    color: "#7F8C8D",
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },

  origemBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(37, 113, 122, 0.08)",
    borderWidth: 1.5,
    borderColor: "rgba(37, 113, 122, 0.25)",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    gap: 8,
    flexWrap: "wrap",
  },

  origemBannerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 10,
    paddingRight: 6,
  },

  origemBannerTexts: {
    flex: 1,
  },

  origemBannerTitle: {
    color: "#25717a",
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 3,
  },

  origemBannerSubtitle: {
    color: "#25717a",
    fontSize: 11,
    fontWeight: "500",
    opacity: 0.85,
    lineHeight: 15,
  },

  origemBannerBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "rgba(37, 113, 122, 0.3)",
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 10,
  },

  origemBannerBtnText: {
    color: "#25717a",
    fontSize: 11,
    fontWeight: "700",
  },

  sectionLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 10,
    marginTop: 4,
  },

  sectionLabelText: {
    color: "#7F8C8D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  subjectTabs: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 6,
    paddingRight: 16,
  },

  subjectBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E7EAED",
  },

  subjectBtnAtivo: {
    borderColor: "#25717a",
    backgroundColor: "rgba(37, 113, 122, 0.08)",
  },

  subjectDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  subjectBtnText: {
    color: "#2C3E50",
    fontSize: 12,
    fontWeight: "600",
  },

  subjectBtnTextAtivo: {
    color: "#25717a",
    fontWeight: "700",
  },

  selectionBanner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#E7EAED",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 11,
    marginTop: 12,
    marginBottom: 6,
    flexWrap: "wrap",
    gap: 8,
  },

  selectionBannerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 6,
  },

  selectionBannerText: {
    color: "#7F8C8D",
    fontSize: 12,
    fontWeight: "600",
  },

  filterTag: {
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 20,
  },

  filterTagText: {
    fontSize: 11,
    fontWeight: "700",
  },

  filterTagTipo: {
    backgroundColor: "rgba(37, 113, 122, 0.12)",
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 20,
  },

  filterTagTipoText: {
    color: "#25717a",
    fontSize: 11,
    fontWeight: "700",
  },

  btnLimpar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1.5,
    borderColor: "#E7EAED",
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 10,
  },

  btnLimparText: {
    color: "#7F8C8D",
    fontSize: 11,
    fontWeight: "600",
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 10,
  },

  statCard: {
    width: "48.5%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginBottom: 10,
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
    width: 44,
    height: 44,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  statValue: {
    color: "#2C3E50",
    fontSize: 22,
    fontWeight: "800",
  },

  statLabel: {
    color: "#7F8C8D",
    fontSize: 11,
    textAlign: "center",
    marginTop: 3,
  },

  statTotalCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#25717a",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 18,
  },

  statTotalValue: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  statTotalLabel: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
    flex: 1,
  },

  searchWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#E7EAED",
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: "#2C3E50",
  },

  searchClearBtn: {
    padding: 4,
  },

  filterTabs: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 6,
    paddingRight: 16,
    marginBottom: 16,
  },

  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#E7EAED",
  },

  filterBtnAtivo: {
    backgroundColor: "#25717a",
    borderColor: "#25717a",
  },

  filterBtnText: {
    color: "#34495e",
    fontSize: 12,
    fontWeight: "600",
  },

  filterBtnTextAtivo: {
    color: "#FFFFFF",
    fontWeight: "700",
  },

  filterCount: {
    backgroundColor: "#F4F6F8",
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 20,
    minWidth: 22,
    alignItems: "center",
  },

  filterCountAtivo: {
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  filterCountText: {
    color: "#7F8C8D",
    fontSize: 10,
    fontWeight: "700",
  },

  filterCountTextAtivo: {
    color: "#FFFFFF",
  },

  contentSection: {
    marginBottom: 22,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    flexWrap: "wrap",
    gap: 6,
  },

  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },

  sectionTitleIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: "#25717a",
    alignItems: "center",
    justifyContent: "center",
  },

  sectionTitle: {
    color: "#2C3E50",
    fontSize: 17,
    fontWeight: "800",
  },

  sectionCount: {
    color: "#7F8C8D",
    fontSize: 11,
    fontWeight: "500",
  },

  contentGrid: {
    gap: 14,
  },

  itemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#E7EAED",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 9,
    elevation: 4,
  },

  cardVisual: {
    height: 112,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },

  cardImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  cardVisualOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },

  cardIconContainer: {
    zIndex: 2,
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.55)",
    alignItems: "center",
    justifyContent: "center",
  },

  cardBody: {
    padding: 16,
  },

  itemTitle: {
    color: "#2C3E50",
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 20,
    marginBottom: 10,
  },

  itemTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 12,
  },

  tag: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  tagText: {
    fontSize: 9,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  tagLevel: {
    backgroundColor: "rgba(100, 116, 139, 0.12)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  tagLevelText: {
    color: "#7F8C8D",
    fontSize: 9,
    fontWeight: "700",
    textTransform: "uppercase",
  },

  tagInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "#F4F6F8",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },

  tagInfoText: {
    color: "#7F8C8D",
    fontSize: 9,
    fontWeight: "600",
  },

  btnCard: {
    backgroundColor: "rgba(37, 113, 122, 0.08)",
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(37, 113, 122, 0.2)",
  },

  btnCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },

  btnCardText: {
    color: "#000",
    fontSize: 13,
    fontWeight: "700",
  },

  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  emptyStateTitle: {
    color: "#2C3E50",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 6,
    textAlign: "center",
  },

  emptyStateText: {
    color: "#7F8C8D",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 16,
  },

  btnTentarNovamente: {
    backgroundColor: "#25717a",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 12,
  },

  btnTentarNovamenteText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
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
    marginTop: 14,
  },

  textoBotaoSair: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  footer: {
    textAlign: "center",
    color: "#7F8C8D",
    fontSize: 12,
    marginTop: 18,
  },
  videoOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  videoModal: {
    width: "100%",
    maxWidth: 720,
    backgroundColor: "#1c2833",
    borderRadius: 16,
    overflow: "hidden",
  },

  videoModalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#34495e",
  },

  videoModalTitulo: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginRight: 10,
  },

  videoModalFechar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.18)",
    alignItems: "center",
    justifyContent: "center",
  },

  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#000",
  },

  videoModalRodape: {
    flexDirection: "row",
    gap: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  videoModalInfo: {
    color: "#BDC3C7",
    fontSize: 12,
  },
});