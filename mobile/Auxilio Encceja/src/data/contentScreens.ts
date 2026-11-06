export type ScreenKind = "apostilas" | "exercicios" | "simulados";
export type ScreenInfo = { materia: string; titulo: string; detalhe: string; descricao: string };

// Configuração das telas mobile correspondentes às páginas do projeto web.
export const contentScreens: Record<ScreenKind, Record<string, ScreenInfo>> = {
  apostilas: {
    matematica: { materia: "Matemática", titulo: "Apostila de Matemática - Fundamental", detalhe: "Ensino Fundamental", descricao: "Conteúdo de matemática para revisar os principais assuntos do ENCCEJA." },
    portugues: { materia: "Português", titulo: "Apostila de Português - Ensino Médio", detalhe: "Ensino Médio", descricao: "Leitura, interpretação de texto e conhecimentos de língua portuguesa." },
    ciencias: { materia: "Ciências", titulo: "Ciências da Natureza - Volume Único", detalhe: "Ensino Médio", descricao: "Revisão de conteúdos de Ciências da Natureza." },
    historia: { materia: "História", titulo: "Apostila de História", detalhe: "Ensino Fundamental", descricao: "Revisão de História do Brasil e temas históricos essenciais." },
    geografia: { materia: "Geografia", titulo: "Apostila de Geografia - Fundamental", detalhe: "Ensino Fundamental", descricao: "Conceitos de espaço geográfico, população, natureza e sociedade." },
    sociologia: { materia: "Sociologia", titulo: "Sociologia - Introdução à Teoria Social", detalhe: "Ensino Médio", descricao: "Introdução à sociedade, cidadania e relações sociais." },
    fundamental: { materia: "Ensino Fundamental", titulo: "Apostila Geral - Ensino Fundamental", detalhe: "Ensino Fundamental", descricao: "Material de revisão geral para o Ensino Fundamental." },
    medio: { materia: "Ensino Médio", titulo: "Apostila Geral - Ensino Médio", detalhe: "Ensino Médio", descricao: "Material de revisão geral para o Ensino Médio." },
  },
  exercicios: {
    matematica: { materia: "Matemática", titulo: "Exercícios de Matemática Básica", detalhe: "20 questões", descricao: "Pratique operações, porcentagem, proporções e resolução de problemas." },
    portugues: { materia: "Português", titulo: "Interpretação de Texto", detalhe: "25 questões", descricao: "Pratique leitura, interpretação e compreensão textual." },
    ciencias: { materia: "Ciências", titulo: "Ciências Naturais", detalhe: "20 questões", descricao: "Revise conceitos de Ciências da Natureza." },
    historia: { materia: "História", titulo: "História do Brasil Colonial", detalhe: "15 questões", descricao: "Pratique conteúdos sobre a história do Brasil." },
    geografia: { materia: "Geografia", titulo: "Geografia Humana e Econômica", detalhe: "18 questões", descricao: "Pratique população, economia e organização do espaço." },
    sociologia: { materia: "Sociologia", titulo: "Sociologia e Cidadania", detalhe: "12 questões", descricao: "Reflita sobre cidadania, sociedade e direitos." },
  },
  simulados: {
    encceja: { materia: "Todas as matérias", titulo: "Simulado Completo ENCCEJA 2023", detalhe: "60 questões · 180 min", descricao: "Teste seus conhecimentos com um simulado geral." },
    matematica: { materia: "Matemática", titulo: "Simulado Focado em Matemática", detalhe: "15 questões · 60 min", descricao: "Avalie seus conhecimentos matemáticos." },
    portugues: { materia: "Português", titulo: "Simulado de Português e Literatura", detalhe: "15 questões · 60 min", descricao: "Avalie interpretação de texto e conhecimentos de português." },
    historia: { materia: "História e Geografia", titulo: "Simulado de História e Geografia", detalhe: "15 questões · 60 min", descricao: "Revise conteúdos de História e Geografia." },
    ciencias: { materia: "Ciências", titulo: "Simulado de Ciências da Natureza", detalhe: "15 questões · 60 min", descricao: "Avalie conhecimentos de Ciências da Natureza." },
    redacao: { materia: "Redação", titulo: "Simulado de Redação Oficial", detalhe: "1 questão · 60 min", descricao: "Pratique organização e escrita de uma redação." },
  },
};

export const normalizeKey = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]/g, "");