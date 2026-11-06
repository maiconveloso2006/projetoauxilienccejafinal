import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Gramática Básica",
    "description": "Conceitos fundamentais de gramática para o ENCCEJA, incluindo fonética, morfologia e sintaxe.",
    "topics": [
      "Fonética e fonologia",
      "Classes de palavras",
      "Concordância verbal e nominal",
      "Regência verbal e nominal"
    ]
  },
  {
    "title": "Literatura Brasileira",
    "description": "Principais movimentos literários e autores brasileiros para o ENCCEJA.",
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
    "title": "Análise Textual",
    "description": "Conceitos e técnicas para análise de textos variados para o ENCCEJA.",
    "topics": [
      "Tipos textuais",
      "Estrutura e funcionamento dos textos",
      "Linguagem e registro",
      "Figuras de linguagem e recursos estilísticos"
    ]
  },
  {
    "title": "Crítica Literária",
    "description": "Abordagens e métodos para análise crítica de obras literárias para o ENCCEJA.",
    "topics": [
      "Teorias literárias",
      "Análise de gêneros literários",
      "Interpretação de textos literários",
      "Relação entre texto e contexto"
    ]
  },
  {
    "title": "Gramática Avançada",
    "description": "Conceitos avançados de gramática para o ENCCEJA, com foco em questões complexas.",
    "topics": [
      "Sintaxe complexa",
      "Concordância e regência complexas",
      "Uso de verbos e tempos verbais",
      "Pontuação e parênteses"
    ]
  }
];

export default function PortuguesApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de Português" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
