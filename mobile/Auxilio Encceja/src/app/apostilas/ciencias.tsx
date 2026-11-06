import React from "react";
import StudyContentScreen from "../../components/StudyContentScreen";

const materials = [
  {
    "title": "Física Básica",
    "description": "Conceitos fundamentais de física para o ENCCEJA, incluindo mecanica, termodinâmica e eletricidade.",
    "topics": [
      "Movimento e suas grandezas",
      "Leis de Newton",
      "Energia e trabalho",
      "Temperatura e calor"
    ]
  },
  {
    "title": "Química",
    "description": "Principais conceitos de química para o ENCCEJA, incluindo química geral, orgânica e inorgânica.",
    "topics": [
      "Átomo e estrutura atômica",
      "Reações químicas e equilíbrio químico",
      "Soluções e equilíbrio ácido-base",
      "Química orgânica e hidrocarbonetos"
    ]
  },
  {
    "title": "Biologia",
    "description": "Conceitos fundamentais de biologia para o ENCCEJA, incluindo celular, genética e ecologia.",
    "topics": [
      "Célula e suas estruturas",
      "Nutrição e respiração celular",
      "Genética e hereditariedade",
      "Ecologia e conservação ambiental"
    ]
  },
  {
    "title": "Física Avançada",
    "description": "Conceitos avançados de física para o ENCCEJA, com foco em óptica, eletromagnetismo e física moderna.",
    "topics": [
      "Óptica e propagação da luz",
      "Eletromagnetismo e ondas eletromagnéticas",
      "Corrente elétrica e circuitos",
      "Física moderna e relatividade"
    ]
  },
  {
    "title": "Bioquímica",
    "description": "Conceitos de bioquímica para o ENCCEJA, com foco em biomoléculas e processos celulares.",
    "topics": [
      "Biomoléculas e sua estrutura",
      "Enzimologia e catálise enzimática",
      "Metabolismo celular e energia",
      "Bioquímica de sistemas biológicos"
    ]
  },
  {
    "title": "Química Orgânica",
    "description": "Conceitos avançados de química orgânica para o ENCCEJA, com foco em reações e compostos orgânicos.",
    "topics": [
      "Compostos orgânicos e nomenclatura",
      "Alcanos, alquenos e alquinos",
      "Hidrocarbonetos aromáticos",
      "Reações orgânicas e mecanismos"
    ]
  }
];

export default function CienciasApostilaScreen() {
  return <StudyContentScreen kind="apostila" title="Apostilas de Ciências" subtitle="Material de estudo organizado conforme o projeto web original." materials={materials} />;
}
