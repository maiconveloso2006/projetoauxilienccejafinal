import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Cartografia Básica",
    "description": "Aprenda a ler e interpretar mapas, fundamentais para todas as questões de geografia.",
    "topics": [
      "Leitura de mapas e legendas",
      "Coordenadas geográficas",
      "Escalas e projeções",
      "Fusos horários e orientação"
    ]
  },
  {
    "title": "Geografia Física",
    "description": "Entenda a formação da Terra, os climas, relevos e as águas do planeta.",
    "topics": [
      "Estrutura interna da Terra",
      "Tipos de relevo e rochas",
      "Climas e vegetação mundial",
      "Hidrografia e bacias hidrográficas"
    ]
  },
  {
    "title": "Geografia Humana",
    "description": "Estudo da população, sua distribuição, dinâmicas e formação das cidades.",
    "topics": [
      "Crescimento e densidade demográfica",
      "Migrações e fluxos populacionais",
      "Urbanização e problemas urbanos",
      "Indústria e espaço geográfico"
    ]
  },
  {
    "title": "Geografia do Brasil",
    "description": "Um mergulho no território nacional, regiões, economia e sociedade brasileira.",
    "topics": [
      "Domínios morfoclimáticos",
      "As regiões brasileiras e suas características",
      "Economia: agropecuária, indústria e serviços",
      "Desigualdades regionais e sociais"
    ]
  },
  {
    "title": "Globalização",
    "description": "Entenda as relações entre países, blocos econômicos e a geopolítica atual.",
    "topics": [
      "O mundo globalizado",
      "Blocos econômicos (Mercosul, UE, etc.)",
      "Conflitos e fronteiras internacionais",
      "Fontes de energia e economia global"
    ]
  },
  {
    "title": "Ambiente e Sustentabilidade",
    "description": "Questões ambientais, preservação e o impacto humano no planeta.",
    "topics": [
      "Biomas brasileiros e mundiais",
      "Poluição e aquecimento global",
      "Desenvolvimento sustentável",
      "Recursos naturais e gestão ambiental"
    ]
  }
];

export default function GeografiaApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de Geografia" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
