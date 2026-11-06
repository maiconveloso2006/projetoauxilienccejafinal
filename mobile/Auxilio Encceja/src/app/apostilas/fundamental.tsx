import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Aritmética Básica",
    "description": "Fundamentos da aritmética para o ENCCEJA, incluindo números inteiros, frações e operações básicas.",
    "topics": [
      "Números inteiros e suas operações",
      "Frações e suas operações",
      "Decimais e porcentagens",
      "Razões e proporções"
    ]
  },
  {
    "title": "Geometria Plana",
    "description": "Conceitos de geometria plana para o ENCCEJA, incluindo polígonos, círculos e cálculo de áreas.",
    "topics": [
      "Polígonos e suas propriedades",
      "Círculos e suas relações",
      "Cálculo de áreas e perímetros",
      "Teorema de Pitágoras"
    ]
  },
  {
    "title": "Estatística e Probabilidade",
    "description": "Fundamentos de estatística e probabilidade para o ENCCEJA, com foco na análise de dados.",
    "topics": [
      "Coleta e organização de dados",
      "Gráficos e tabelas",
      "Medidas de centralidade",
      "Conceitos básicos de probabilidade"
    ]
  },
  {
    "title": "Gramática Básica",
    "description": "Fundamentos da gramática para o ENCCEJA, incluindo fonética, morfologia e sintaxe.",
    "topics": [
      "Fonética e fonologia",
      "Classes de palavras",
      "Concordância verbal e nominal",
      "Regência verbal e nominal"
    ]
  },
  {
    "title": "Literatura Brasileira",
    "description": "Principais movimentos literários e autores brasileiros para o ENCCEJA, com foco na compreensão dos contextos históricos e culturais.",
    "topics": [
      "Período colonial",
      "Romantismo",
      "Realismo e Naturalismo",
      "Modernismo"
    ]
  },
  {
    "title": "Redação e Texto Argumentativo",
    "description": "Técnicas e estratégias para elaborar textos argumentativos para o ENCCEJA.",
    "topics": [
      "Tipos de texto",
      "Estrutura do texto argumentativo",
      "Argumentação e persuasão",
      "Revisão e correção"
    ]
  },
  {
    "title": "Biologia Básica",
    "description": "Fundamentos de biologia para o ENCCEJA, com foco nos sistemas vivos.",
    "topics": [
      "Células e tecidos",
      "Sistema digestivo",
      "Sistema circulatório",
      "Reprodução e desenvolvimento"
    ]
  },
  {
    "title": "Física e Química",
    "description": "Fundamentos de física e química para o ENCCEJA, com foco nos conceitos básicos.",
    "topics": [
      "Leis de Newton",
      "Energia e transformações",
      "Estados da matéria",
      "Reações químicas"
    ]
  },
  {
    "title": "Ecologia e Meio Ambiente",
    "description": "Fundamentos de ecologia e preservação ambiental para o ENCCEJA.",
    "topics": [
      "Ecossistemas",
      "Ciclos biogeoquímicos",
      "Biodiversidade",
      "Poluição e sustentabilidade"
    ]
  },
  {
    "title": "História Antiga e Medieval",
    "description": "Principais civilizações e períodos da história antiga e medieval para o ENCCEJA.",
    "topics": [
      "Civilizações mesopotâmicas",
      "Egito antigo",
      "Grécia antiga",
      "Império Romano"
    ]
  },
  {
    "title": "Idade Moderna e Contemporânea",
    "description": "Principais eventos e movimentos da Idade Moderna e Contemporânea para o ENCCEJA.",
    "topics": [
      "Descobrimento da América",
      "Revoluções burguesas",
      "Guerras mundiais",
      "Guerra Fria"
    ]
  },
  {
    "title": "História do Brasil",
    "description": "Principais períodos e eventos da história do Brasil para o ENCCEJA.",
    "topics": [
      "Período colonial",
      "Império",
      "República Velha",
      "Ditadura militar"
    ]
  },
  {
    "title": "Geografia Física",
    "description": "Fundamentos de geografia física para o ENCCEJA, com foco nos processos naturais.",
    "topics": [
      "Formações geológicas",
      "Climas do mundo",
      "Hidrografia",
      "Populações e densidades"
    ]
  },
  {
    "title": "Geografia Humana",
    "description": "Fundamentos de geografia humana para o ENCCEJA, com foco nos processos sociais.",
    "topics": [
      "Urbanização",
      "Agricultura",
      "Indústria",
      "Transporte e comunicação"
    ]
  },
  {
    "title": "Regiões Geográficas",
    "description": "Principais regiões geográficas do Brasil e do mundo para o ENCCEJA.",
    "topics": [
      "Regiões do Brasil",
      "América Latina",
      "Europa",
      "Ásia"
    ]
  }
];

export default function FundamentalApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Nossas Apostilas" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
